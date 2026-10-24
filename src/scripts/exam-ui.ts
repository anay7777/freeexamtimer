import {
  ExamEngine,
  DEFAULT_CONFIG,
  DEFAULT_SETTINGS,
  loadSettings,
  parseHms,
  parseQueryConfig,
  saveSettings,
  splitSeconds,
  toQueryString,
  type ExamConfig,
  type AppSettings,
} from '../lib/exam-engine';
import { playAlert, playTone, resumeAudio } from '../lib/audio';
import { findCountryTimeZone } from '../data/timezones';
import { fmt } from '../i18n/fmt';
import type { Dictionary } from '../i18n/locales/en';

type ClientStrings = Dictionary['client'] & { sounds: Record<string, string> };

const engine = new ExamEngine();
// Localized runtime strings, rendered into #exam-i18n by ExamApp.astro
let t = {} as ClientStrings;
let settings: AppSettings = loadSettings();
let wakeLock: WakeLockSentinel | null = null;
let tickTimer = 0;

function $(id: string): HTMLElement | null {
  return document.getElementById(id);
}

function input(id: string): HTMLInputElement | null {
  return document.getElementById(id) as HTMLInputElement | null;
}

function toast(msg: string): void {
  const wrap = $('toast-container');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className =
    'rounded-full bg-[var(--text-primary)] px-5 py-2.5 text-[13px] font-medium text-[var(--bg-primary)] shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-150';
  el.textContent = msg;
  wrap.appendChild(el);
  window.setTimeout(() => {
    el.classList.add('opacity-0', 'transition-opacity', 'duration-300');
    window.setTimeout(() => el.remove(), 300);
  }, 2200);
}

function applyTheme(theme: 'light' | 'dark'): void {
  if (typeof (window as any).__applyTheme === 'function') {
    (window as any).__applyTheme(theme);
    return;
  }
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem('fet-theme', theme);
  } catch {
    /* ignore */
  }
  const dark = theme === 'dark';
  const sun = $('icon-sun');
  const moon = $('icon-moon');
  if (sun) sun.classList.toggle('hidden', !dark);
  if (moon) moon.classList.toggle('hidden', dark);

  document.querySelectorAll('.theme-icon-sun').forEach((el) => el.classList.toggle('hidden', !dark));
  document.querySelectorAll('.theme-icon-moon').forEach((el) => el.classList.toggle('hidden', dark));
  document.querySelectorAll<HTMLElement>('[data-theme-label]').forEach((el) => {
    el.textContent = dark ? el.dataset.labelDark || 'Dark' : el.dataset.labelLight || 'Light';
  });

  const toggle = input('toggle-dark');
  if (toggle) toggle.checked = dark;
}

function currentTheme(): 'light' | 'dark' {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function warningsFromUi(): number[] {
  const list: number[] = [];
  if (input('warn-30')?.checked) list.push(1800);
  if (input('warn-15')?.checked) list.push(900);
  if (input('warn-10')?.checked) list.push(600);
  if (input('warn-5')?.checked) list.push(300);
  if (input('warn-1')?.checked) list.push(60);
  return list;
}

function setTimeZone(tzId: string, announce = false): void {
  const meta = findCountryTimeZone(tzId);
  settings.timeZone = meta.id;
  engine.setTimeZone(meta.id);
  saveSettings(settings);

  ['select-timezone-clock', 'select-timezone-autostart', 'select-timezone-settings', 'fs-select-timezone'].forEach((id) => {
    const sel = document.getElementById(id) as HTMLSelectElement | null;
    if (sel && sel.value !== meta.id) {
      sel.value = meta.id;
    }
  });

  render();
  if (announce) {
    toast(fmt(t.toastTimeZone, { tz: `${meta.flag} ${meta.country} (${meta.abbr})` }));
  }
}

function readConfigFromForm(): ExamConfig {
  const title = input('input-title')?.value.trim() ?? '';
  const centre = input('input-centre')?.value.trim() ?? '';
  const instructions = (document.getElementById('input-instructions') as HTMLTextAreaElement)?.value.trim() ?? '';
  const h = input('input-hours')?.value ?? '1';
  const m = input('input-minutes')?.value ?? '0';
  const s = input('input-seconds')?.value ?? '0';
  const reading = Math.max(0, (parseInt(input('input-reading')?.value ?? '0', 10) || 0) * 60);
  const extra = Math.max(0, (parseInt(input('input-extra')?.value ?? '0', 10) || 0) * 60);
  const autoStart = input('input-autostart')?.value || null;
  const timeZone =
    (document.getElementById('select-timezone-autostart') as HTMLSelectElement)?.value ||
    (document.getElementById('select-timezone-clock') as HTMLSelectElement)?.value ||
    settings.timeZone ||
    'local';

  return {
    ...engine.config,
    title,
    centre,
    instructions,
    durationSeconds: parseHms(h, m, s),
    readingSeconds: reading,
    extraSeconds: extra,
    autoStartTime: autoStart,
    timeZone,
    warnings: warningsFromUi(),
    showSeconds: settings.showSeconds,
    hideSecondsUntil5m: settings.hideSecondsUntil5m,
    silent: settings.silent,
  };
}

function fillForm(config: ExamConfig): void {
  const titleEl = input('input-title');
  if (titleEl) titleEl.value = config.title;

  const centreEl = input('input-centre');
  if (centreEl) centreEl.value = config.centre;

  const instrEl = document.getElementById('input-instructions') as HTMLTextAreaElement | null;
  if (instrEl) instrEl.value = config.instructions;

  const { h, m, s } = splitSeconds(config.durationSeconds);
  const hEl = input('input-hours');
  if (hEl) hEl.value = String(h);
  const mEl = input('input-minutes');
  if (mEl) mEl.value = String(m);
  const sEl = input('input-seconds');
  if (sEl) sEl.value = String(s);

  const readEl = input('input-reading');
  if (readEl) readEl.value = String(Math.round(config.readingSeconds / 60));

  const extraEl = input('input-extra');
  if (extraEl) extraEl.value = String(Math.round(config.extraSeconds / 60));

  const autoEl = input('input-autostart');
  if (autoEl) autoEl.value = config.autoStartTime ?? '';

  const tz = config.timeZone || settings.timeZone || 'local';
  ['select-timezone-clock', 'select-timezone-autostart', 'select-timezone-settings', 'fs-select-timezone'].forEach((id) => {
    const sel = document.getElementById(id) as HTMLSelectElement | null;
    if (sel) sel.value = tz;
  });
}

function syncConfig(): void {
  if (engine.phase !== 'idle') return;
  engine.applyConfig(readConfigFromForm());
}

function clearSetupForm(): void {
  if (engine.phase !== 'idle') {
    toast(t.toastCannotClear);
    return;
  }
  const title = input('input-title');
  if (title) title.value = '';

  const centre = input('input-centre');
  if (centre) centre.value = '';

  const hEl = input('input-hours');
  if (hEl) hEl.value = '0';

  const mEl = input('input-minutes');
  if (mEl) mEl.value = '0';

  const sEl = input('input-seconds');
  if (sEl) sEl.value = '0';

  const readEl = input('input-reading');
  if (readEl) readEl.value = '0';

  const extraEl = input('input-extra');
  if (extraEl) extraEl.value = '0';

  const autoEl = input('input-autostart');
  if (autoEl) autoEl.value = '';

  const instrEl = document.getElementById('input-instructions') as HTMLTextAreaElement | null;
  if (instrEl) instrEl.value = '';

  setTimeZone('local', false);
  syncConfig();
  render();
  toast(t.toastCleared);
}

function setSetupDisabled(disabled: boolean): void {
  document.querySelectorAll('#setup-body input, #setup-body textarea, #setup-body button, #setup-body select').forEach((el) => {
    (el as HTMLInputElement).disabled = disabled;
  });
  const clearBtn = document.getElementById('btn-clear-setup') as HTMLButtonElement | null;
  if (clearBtn) clearBtn.disabled = disabled;
}

function openSettings(): void {
  $('settings-panel')?.classList.add('open');
  $('backdrop')?.classList.add('active');
}

function closeSettings(): void {
  $('settings-panel')?.classList.remove('open');
  $('backdrop')?.classList.remove('active');
}

function openModal(id: string): void {
  const el = $(id);
  if (!el) return;
  el.classList.remove('hidden');
  el.classList.add('flex');
}

function closeModal(id: string): void {
  const el = $(id);
  if (!el) return;
  el.classList.add('hidden');
  el.classList.remove('flex');
}

async function requestWake(): Promise<void> {
  if (!settings.wakeLock || !('wakeLock' in navigator)) return;
  try {
    wakeLock = await navigator.wakeLock.request('screen');
  } catch {
    wakeLock = null;
  }
}

async function releaseWake(): Promise<void> {
  try {
    await wakeLock?.release();
  } catch {
    /* ignore */
  }
  wakeLock = null;
}

function updateElementText(id: string, text: string): void {
  const el = $(id);
  if (el) el.textContent = text;
}

function phaseText(): { label: string; directive: string } {
  switch (engine.phase) {
    case 'reading':
      return { label: t.phases.reading, directive: t.directives.reading };
    case 'writing':
      return { label: t.phases.writing, directive: t.directives.writing };
    case 'finished':
      return { label: t.phases.finished, directive: t.directives.finished };
    default:
      if (engine.config.readingSeconds > 0) {
        const n = Math.round(engine.config.readingSeconds / 60);
        return { label: t.phases.readyReading, directive: fmt(t.directives.readyReading, { n }) };
      }
      return { label: t.phases.ready, directive: t.directives.ready };
  }
}

function render(): void {
  const view = engine.tick();
  const phase = phaseText();
  const phaseLabel = view.isPaused ? fmt(t.paused, { label: phase.label }) : phase.label;
  const directive = view.isPaused ? t.pausedDirective : phase.directive;

  // Primary timer readout
  updateElementText('timer-display', view.remainingLabel);
  updateElementText('fs-timer', view.remainingLabel);

  // Status Chip & Directive
  const phaseChip = $('phase-chip');
  if (phaseChip) {
    phaseChip.className = `${view.phaseBadgeClass} rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider`;
    phaseChip.textContent = phaseLabel;
  }

  const fsPhaseChip = $('fs-phase-chip');
  if (fsPhaseChip) {
    fsPhaseChip.className = `${view.phaseBadgeClass} rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider`;
    fsPhaseChip.textContent = phaseLabel;
  }

  updateElementText('phase-directive', directive);
  updateElementText('fs-directive', directive);

  // Exam Titles
  updateElementText('display-title', engine.config.title);
  updateElementText('fs-title', engine.config.title || t.examInProgress);
  updateElementText('display-centre', engine.config.centre);
  updateElementText('fs-centre', engine.config.centre);

  // Clocks
  updateElementText('clock-current', view.currentTimeLabel);
  updateElementText('fs-current', view.currentTimeLabel);
  updateElementText('clock-start', view.startTimeLabel);
  updateElementText('fs-start', view.startTimeLabel);
  updateElementText('clock-finish', view.finishTimeLabel);
  updateElementText('fs-finish', view.finishTimeLabel);
  updateElementText('clock-extra-finish', view.extra25FinishLabel);
  updateElementText('fs-extra-finish', view.extra25FinishLabel);

  // Timezone Badges & Labels
  updateElementText('clock-current-badge', view.timeZoneAbbr);
  updateElementText('clock-start-badge', view.timeZoneAbbr);
  updateElementText('clock-finish-badge', view.timeZoneAbbr);
  updateElementText('clock-extra-finish-badge', view.timeZoneAbbr);
  updateElementText('fs-current-badge', view.timeZoneAbbr);
  updateElementText('fs-start-badge', view.timeZoneAbbr);
  updateElementText('fs-finish-badge', view.timeZoneAbbr);
  updateElementText('fs-extra-finish-badge', view.timeZoneAbbr);
  updateElementText('display-tz-label', view.timeZoneLabel);
  updateElementText('display-tz-flag', view.timeZoneFlag);
  updateElementText('fs-tz-label', view.timeZoneLabel);
  updateElementText('fs-tz-flag', view.timeZoneFlag);

  // Live preview clock under Automatic Scheduled Start
  const autoPreview = $('autostart-tz-preview');
  if (autoPreview) {
    autoPreview.textContent = fmt(t.currentPreview, { time: view.currentTimeLabel, tz: view.timeZoneAbbr });
  }

  // Show/Hide Extra 25% Clock box based on settings
  const showExtraClock = settings.showExtraClock;
  $('box-extra-finish')?.classList.toggle('hidden', !showExtraClock);
  $('fs-box-extra-finish')?.classList.toggle('hidden', !showExtraClock);

  // Progress Bar
  const pct = `${Math.max(0, Math.min(100, view.progress * 100))}%`;
  const bar = $('progress-fill');
  if (bar) bar.style.width = pct;
  const fsBar = $('fs-fill');
  if (fsBar) fsBar.style.width = pct;

  // Extra badge
  const extraOn = view.extraMinutes > 0;
  $('extra-badge')?.classList.toggle('hidden', !extraOn);
  $('fs-extra-badge')?.classList.toggle('hidden', !extraOn);
  if (extraOn) {
    updateElementText('extra-badge', fmt(t.extendedBadge, { n: view.extraMinutes }));
    updateElementText('fs-extra-badge', fmt(t.extendedBadge, { n: view.extraMinutes }));
  }

  // Instructions Banner
  const instrCallout = $('instructions-callout');
  const instrText = $('instructions-live');
  const fsInstrWrap = $('fs-instructions-wrap');
  const fsInstrText = $('fs-instructions-text');
  if (engine.config.instructions) {
    instrCallout?.classList.remove('hidden');
    if (instrText) instrText.textContent = engine.config.instructions;
    fsInstrWrap?.classList.remove('hidden');
    if (fsInstrText) fsInstrText.textContent = engine.config.instructions;
  } else {
    instrCallout?.classList.add('hidden');
    fsInstrWrap?.classList.add('hidden');
  }

  // Action Button Visibility
  const running = engine.phase === 'reading' || engine.phase === 'writing';
  const idle = engine.phase === 'idle';

  // Desktop Controls
  $('btn-start')?.classList.toggle('hidden', running && !engine.isPaused);
  $('btn-pause')?.classList.toggle('hidden', !running || engine.isPaused);
  $('btn-add-5')?.classList.toggle('hidden', idle || engine.phase === 'finished');
  $('btn-add-15')?.classList.toggle('hidden', idle || engine.phase === 'finished');
  $('btn-add-25pct')?.classList.toggle('hidden', idle || engine.phase === 'finished');

  // Mobile Controls
  $('mob-start')?.classList.toggle('hidden', running && !engine.isPaused);
  $('mob-pause')?.classList.toggle('hidden', !running || engine.isPaused);
  $('mob-add')?.classList.toggle('hidden', idle || engine.phase === 'finished');

  // Fullscreen Floating Controls
  $('fs-btn-start')?.classList.toggle('hidden', running && !engine.isPaused);
  $('fs-btn-pause')?.classList.toggle('hidden', !running || engine.isPaused);
  $('fs-btn-add-5')?.classList.toggle('hidden', idle || engine.phase === 'finished');

  const startLabel = engine.isPaused ? t.resumeExam : engine.phase === 'finished' ? t.startAgain : t.startExam;
  const mobStartLabel = engine.isPaused ? t.resume : engine.phase === 'finished' ? t.restart : t.start;

  updateElementText('btn-start', startLabel);
  updateElementText('mob-start', mobStartLabel);
  updateElementText('fs-btn-start', startLabel);

  // Urgent Flash under 60 seconds
  const isUrgent = running && !engine.isPaused && view.remainingMs <= 60_000 && view.remainingMs > 0;
  $('display-card')?.classList.toggle('timer-urgent', isUrgent);
  $('fullscreen-overlay')?.classList.toggle('timer-urgent', isUrgent);

  setSetupDisabled(!idle);

  // Phase transition events
  if (view.justEnteredWriting) {
    toast(t.toastReadingOver);
    if (!settings.silent) playTone(settings.sound, settings.volume);
  }

  for (const w of view.justCrossedWarnings) {
    const mins = w >= 60 ? fmt(t.unitMin, { n: w / 60 }) : fmt(t.unitSec, { n: w });
    toast(fmt(t.toastWarning, { time: mins }));
    if (!settings.silent) playTone(settings.sound, settings.volume);
  }

  if (view.justFinished) {
    openModal('done-modal');
    updateElementText('done-title', engine.config.title ? fmt(t.timeUpTitle, { title: engine.config.title }) : t.pensDown);
    if (!settings.silent) playAlert(settings.sound, settings.volume);
    if (settings.flash) flashScreen();
    void releaseWake();

    // Automatically reset the timer after it stops, but do not start it
    engine.reset();
    syncConfig();
  } else if (engine.phase === 'finished') {
    engine.reset();
    syncConfig();
  }

  // Automatic Start check
  if (engine.shouldAutoStart()) {
    void startExam();
    toast(t.toastAutoStart);
  }
}

function flashScreen(): void {
  let count = 0;
  const interval = window.setInterval(() => {
    document.body.style.background = count % 2 === 0 ? '#ee000024' : '';
    count += 1;
    if (count > 8) {
      window.clearInterval(interval);
      document.body.style.background = '';
    }
  }, 250);
}

async function startExam(): Promise<void> {
  await resumeAudio();
  syncConfig();
  const finishedBefore = engine.phase === 'finished';
  const result = engine.start();
  if (!result.ok) {
    toast(result.error ? (finishedBefore ? t.errFinished : t.errNoWriting) : t.toastCannotStart);
    return;
  }
  await requestWake();
  render();
}

function pauseExam(): void {
  engine.pause();
  void releaseWake();
  render();
}

function requestReset(): void {
  if (engine.phase === 'idle') {
    engine.reset();
    syncConfig();
    render();
    return;
  }
  openModal('reset-modal');
}

function doReset(): void {
  engine.reset();
  closeModal('reset-modal');
  void releaseWake();
  syncConfig();
  render();
  toast(t.toastReset);
}

function enterFullscreen(): void {
  const overlay = $('fullscreen-overlay');
  if (overlay) overlay.classList.add('active');
  try {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen?.();
    }
  } catch {
    /* ignore fullscreen restrictions */
  }
  render();
}

function exitFullscreen(): void {
  const overlay = $('fullscreen-overlay');
  if (overlay) overlay.classList.remove('active');
  try {
    if (document.fullscreenElement) {
      void document.exitFullscreen?.();
    }
  } catch {
    /* ignore */
  }
}

function persistSettings(): void {
  settings.warnings = warningsFromUi();
  settings.timeZone = engine.timeZone;
  saveSettings(settings);
  engine.config.showSeconds = settings.showSeconds;
  engine.config.hideSecondsUntil5m = settings.hideSecondsUntil5m;
  engine.config.silent = settings.silent;
  engine.config.warnings = settings.warnings;
  engine.hour12 = settings.hour12;
  engine.config.timeZone = engine.timeZone;

  // Scale timer display font
  const scale = settings.timerScale / 100;
  const display = $('timer-display');
  if (display) {
    display.style.fontSize = `clamp(${52 * scale}px, ${13 * scale}vw, ${104 * scale}px)`;
  }
}

export function bootExamUi(): void {
  t = JSON.parse($('exam-i18n')?.textContent || '{}') as ClientStrings;

  // Theme initialization
  try {
    const saved = localStorage.getItem('fet-theme');
    applyTheme(
      saved === 'dark' || saved === 'light'
        ? saved
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
    );
  } catch {
    applyTheme('light');
  }

  // Populate settings form controls
  const togSec = input('toggle-seconds');
  if (togSec) togSec.checked = settings.showSeconds;

  const togAnxiety = input('toggle-anxiety-seconds');
  if (togAnxiety) togAnxiety.checked = settings.hideSecondsUntil5m;

  const togHour12 = input('toggle-hour12');
  if (togHour12) togHour12.checked = settings.hour12;

  const togExtra = input('toggle-extra-clock');
  if (togExtra) togExtra.checked = settings.showExtraClock;

  const togSilent = input('toggle-silent');
  if (togSilent) togSilent.checked = settings.silent;

  const togFlash = input('toggle-flash');
  if (togFlash) togFlash.checked = settings.flash;

  const togWake = input('toggle-wakelock');
  if (togWake) togWake.checked = settings.wakeLock;

  const rngSize = input('range-size');
  if (rngSize) rngSize.value = String(settings.timerScale);
  updateElementText('label-size', `${settings.timerScale}%`);

  const rngVol = input('range-volume');
  if (rngVol) rngVol.value = String(Math.round(settings.volume * 100));
  updateElementText('label-volume', `${Math.round(settings.volume * 100)}%`);

  const selSound = document.getElementById('select-sound') as HTMLSelectElement | null;
  if (selSound) selSound.value = settings.sound;

  const warn30 = input('warn-30');
  if (warn30) warn30.checked = settings.warnings.includes(1800);
  const warn15 = input('warn-15');
  if (warn15) warn15.checked = settings.warnings.includes(900);
  const warn10 = input('warn-10');
  if (warn10) warn10.checked = settings.warnings.includes(600);
  const warn5 = input('warn-5');
  if (warn5) warn5.checked = settings.warnings.includes(300);
  const warn1 = input('warn-1');
  if (warn1) warn1.checked = settings.warnings.includes(60);

  engine.hour12 = settings.hour12;
  engine.config.showSeconds = settings.showSeconds;
  engine.config.hideSecondsUntil5m = settings.hideSecondsUntil5m;
  engine.config.silent = settings.silent;
  engine.config.warnings = settings.warnings;

  // Restore state or URL params
  const fromUrl = parseQueryConfig(window.location.search);
  const restored = engine.restore();
  if (!restored) {
    engine.applyConfig({ ...DEFAULT_CONFIG, ...fromUrl });
  } else if (Object.keys(fromUrl).length && engine.phase === 'idle') {
    engine.applyConfig(fromUrl);
  }

  // Active timezone determination
  const initialTz = fromUrl.timeZone || engine.config.timeZone || settings.timeZone || 'local';
  setTimeZone(initialTz, false);

  fillForm(engine.config);
  persistSettings();
  render();

  // Country timezone select change listeners across the entire app
  ['select-timezone-clock', 'select-timezone-autostart', 'select-timezone-settings', 'fs-select-timezone'].forEach((id) => {
    const sel = document.getElementById(id) as HTMLSelectElement | null;
    if (sel) {
      sel.value = engine.timeZone;
      sel.addEventListener('change', () => {
        setTimeZone(sel.value, true);
        syncConfig();
      });
    }
  });

  // Setup inputs change handler
  const onSetupInput = () => {
    syncConfig();
    render();
  };

  ['input-title', 'input-centre', 'input-hours', 'input-minutes', 'input-seconds', 'input-reading', 'input-extra', 'input-autostart'].forEach(
    (id) => $(id)?.addEventListener('input', onSetupInput),
  );
  document.getElementById('input-instructions')?.addEventListener('input', onSetupInput);

  // Quick Duration presets (e.g. 15, 30, 45, 60, 90, 120, 180 min)
  document.querySelectorAll('[data-preset]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (engine.phase !== 'idle') return;
      const mins = parseInt((btn as HTMLElement).dataset.preset ?? '0', 10);
      const { h, m } = splitSeconds(mins * 60);
      const hEl = input('input-hours');
      const mEl = input('input-minutes');
      const sEl = input('input-seconds');
      if (hEl) hEl.value = String(h);
      if (mEl) mEl.value = String(m);
      if (sEl) sEl.value = '0';
      onSetupInput();
      toast(fmt(t.toastDuration, { n: mins }));
    });
  });

  // Reading time presets
  document.querySelectorAll('[data-reading]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (engine.phase !== 'idle') return;
      const mins = (btn as HTMLElement).dataset.reading ?? '0';
      const readEl = input('input-reading');
      if (readEl) readEl.value = mins;
      onSetupInput();
      toast(fmt(t.toastReading, { n: mins }));
    });
  });

  // Extra time presets
  document.querySelectorAll('[data-extra]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (engine.phase !== 'idle') return;
      const mins = (btn as HTMLElement).dataset.extra ?? '0';
      const extraEl = input('input-extra');
      if (extraEl) extraEl.value = mins;
      onSetupInput();
      toast(fmt(t.toastExtra, { n: mins }));
    });
  });

  // Calculate 25% extra time button
  $('btn-calc-25pct')?.addEventListener('click', () => {
    const calcMins = engine.calculate25PercentMinutes();
    const extraEl = input('input-extra');
    if (extraEl) extraEl.value = String(calcMins);
    onSetupInput();
    toast(fmt(t.toastCalc25, { n: calcMins }));
  });

  // Rule insertion chips
  document.querySelectorAll('[data-add-rule]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const rule = (btn as HTMLElement).dataset.addRule ?? '';
      const area = document.getElementById('input-instructions') as HTMLTextAreaElement | null;
      if (!area) return;
      const current = area.value.trim();
      area.value = current ? `${current}\n• ${rule}` : `• ${rule}`;
      onSetupInput();
      toast(t.toastRuleAdded);
    });
  });

  // Primary Action Buttons
  $('btn-start')?.addEventListener('click', () => void startExam());
  $('mob-start')?.addEventListener('click', () => void startExam());
  $('fs-btn-start')?.addEventListener('click', () => void startExam());

  $('btn-pause')?.addEventListener('click', pauseExam);
  $('mob-pause')?.addEventListener('click', pauseExam);
  $('fs-btn-pause')?.addEventListener('click', pauseExam);

  $('btn-reset')?.addEventListener('click', requestReset);
  $('mob-reset')?.addEventListener('click', requestReset);
  $('fs-btn-reset')?.addEventListener('click', requestReset);
  $('confirm-reset')?.addEventListener('click', doReset);
  $('cancel-reset')?.addEventListener('click', () => closeModal('reset-modal'));

  // Quick Extra Time additions (+5, +15, +25%)
  $('btn-add-5')?.addEventListener('click', () => {
    engine.addExtraMinutes(5);
    toast(t.toastAdded5Writing);
    render();
  });
  $('mob-add')?.addEventListener('click', () => {
    engine.addExtraMinutes(5);
    toast(t.toastAdded5);
    render();
  });
  $('fs-btn-add-5')?.addEventListener('click', () => {
    engine.addExtraMinutes(5);
    toast(t.toastAdded5);
    render();
  });
  $('btn-add-15')?.addEventListener('click', () => {
    engine.addExtraMinutes(15);
    toast(t.toastAdded15Writing);
    render();
  });
  $('btn-add-25pct')?.addEventListener('click', () => {
    const mins = engine.calculate25PercentMinutes();
    engine.addExtraMinutes(mins);
    toast(fmt(t.toastAdded25, { n: mins }));
    render();
  });

  // Share exam URL
  $('btn-share')?.addEventListener('click', async () => {
    syncConfig();
    const qs = toQueryString(engine.config);
    const url = `${location.origin}${location.pathname}${qs ? `?${qs}` : ''}`;
    try {
      history.replaceState({}, '', url);
    } catch {
      /* ignore */
    }
    try {
      await navigator.clipboard.writeText(url);
      toast(t.toastLinkCopied);
    } catch {
      toast(t.toastUrlInBar);
    }
  });

  // Fullscreen controls
  $('btn-fullscreen')?.addEventListener('click', enterFullscreen);
  $('btn-hall-fullscreen')?.addEventListener('click', enterFullscreen);
  $('mob-fullscreen')?.addEventListener('click', enterFullscreen);
  $('fs-btn-exit')?.addEventListener('click', exitFullscreen);

  // Settings Panel Toggles
  $('btn-settings')?.addEventListener('click', openSettings);
  $('mob-settings')?.addEventListener('click', openSettings);
  $('btn-close-settings')?.addEventListener('click', closeSettings);
  $('backdrop')?.addEventListener('click', closeSettings);

  // Theme Toggles
  input('toggle-dark')?.addEventListener('change', () => applyTheme(input('toggle-dark')?.checked ? 'dark' : 'light'));

  // Settings Inputs
  input('toggle-seconds')?.addEventListener('change', () => {
    settings.showSeconds = input('toggle-seconds')?.checked ?? true;
    persistSettings();
    render();
  });

  input('toggle-anxiety-seconds')?.addEventListener('change', () => {
    settings.hideSecondsUntil5m = input('toggle-anxiety-seconds')?.checked ?? false;
    persistSettings();
    render();
  });

  input('toggle-hour12')?.addEventListener('change', () => {
    settings.hour12 = input('toggle-hour12')?.checked ?? false;
    persistSettings();
    render();
  });

  input('toggle-extra-clock')?.addEventListener('change', () => {
    settings.showExtraClock = input('toggle-extra-clock')?.checked ?? true;
    persistSettings();
    render();
  });

  input('toggle-silent')?.addEventListener('change', () => {
    settings.silent = input('toggle-silent')?.checked ?? false;
    persistSettings();
  });

  input('toggle-flash')?.addEventListener('change', () => {
    settings.flash = input('toggle-flash')?.checked ?? true;
    persistSettings();
  });

  input('toggle-wakelock')?.addEventListener('change', () => {
    settings.wakeLock = input('toggle-wakelock')?.checked ?? true;
    persistSettings();
    if (!settings.wakeLock) void releaseWake();
    else if (engine.phase === 'reading' || engine.phase === 'writing') void requestWake();
  });

  input('range-size')?.addEventListener('input', () => {
    const val = parseInt(input('range-size')?.value ?? '100', 10);
    settings.timerScale = val;
    updateElementText('label-size', `${val}%`);
    persistSettings();
  });

  input('range-volume')?.addEventListener('input', () => {
    const val = parseInt(input('range-volume')?.value ?? '70', 10);
    settings.volume = val / 100;
    updateElementText('label-volume', `${val}%`);
    persistSettings();
  });

  document.getElementById('select-sound')?.addEventListener('change', (e) => {
    settings.sound = (e.target as HTMLSelectElement).value;
    persistSettings();
  });

  $('btn-test-sound')?.addEventListener('click', async () => {
    await resumeAudio();
    playTone(settings.sound, settings.volume);
    toast(fmt(t.toastTestSound, { sound: t.sounds[settings.sound] ?? settings.sound }));
  });

  ['warn-30', 'warn-15', 'warn-10', 'warn-5', 'warn-1'].forEach((id) => {
    $(id)?.addEventListener('change', () => {
      persistSettings();
      syncConfig();
    });
  });

  $('dismiss-done')?.addEventListener('click', () => closeModal('done-modal'));

  // Setup Accordion Toggle & Clear Button
  const setupBody = $('setup-body');
  const toggleSetup = $('btn-toggle-setup');
  toggleSetup?.addEventListener('click', () => {
    if (!setupBody) return;
    const hidden = setupBody.classList.toggle('hidden');
    toggleSetup.textContent = hidden ? t.show : t.hide;
  });

  $('btn-clear-setup')?.addEventListener('click', clearSetupForm);

  // Browser Fullscreen change listener
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      $('fullscreen-overlay')?.classList.remove('active');
    }
  });

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    const tag = (e.target as HTMLElement).tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (engine.phase === 'reading' || engine.phase === 'writing') {
        if (engine.isPaused) void startExam();
        else pauseExam();
      } else if (engine.phase === 'idle') {
        void startExam();
      }
    }
    if (e.code === 'KeyR') requestReset();
    if (e.code === 'KeyF') {
      e.preventDefault();
      if ($('fullscreen-overlay')?.classList.contains('active')) exitFullscreen();
      else enterFullscreen();
    }
    if (e.code === 'KeyS') {
      const panel = $('settings-panel');
      if (panel?.classList.contains('open')) closeSettings();
      else openSettings();
    }
    if (e.code === 'Escape') {
      closeSettings();
      exitFullscreen();
      closeModal('reset-modal');
      closeModal('done-modal');
    }
  });

  // Screen visibility wake lock restoration
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && (engine.phase === 'reading' || engine.phase === 'writing')) {
      void requestWake();
    }
  });

  // Main UI render loop (200ms)
  tickTimer = window.setInterval(render, 200);
  window.addEventListener('beforeunload', () => window.clearInterval(tickTimer));
}
