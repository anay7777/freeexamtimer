import { findCountryTimeZone, formatClockWithZone } from '../data/timezones';

export type Phase = 'idle' | 'reading' | 'writing' | 'finished';

export type SecondsDisplayMode = 'always' | 'final5m' | 'never';

export interface ExamConfig {
  title: string;
  centre: string;
  instructions: string;
  durationSeconds: number;
  readingSeconds: number;
  extraSeconds: number;
  warnings: number[];
  autoStartTime: string | null;
  timeZone: string;
  showSeconds: boolean;
  hideSecondsUntil5m: boolean;
  silent: boolean;
}

export interface ExamSnapshot {
  config: ExamConfig;
  phase: Phase;
  isPaused: boolean;
  phaseEndAt: number | null;
  pausedRemainingMs: number | null;
  startedAt: number | null;
  writingStartedAt: number | null;
  scheduledFinishAt: number | null;
  extraAddedMs: number;
  firedWarnings: number[];
  readingComplete: boolean;
  timeZone?: string;
}

export interface ExamView {
  phase: Phase;
  isPaused: boolean;
  remainingMs: number;
  remainingLabel: string;
  progress: number;
  currentTimeLabel: string;
  startTimeLabel: string;
  finishTimeLabel: string;
  extra25FinishLabel: string;
  timeZone: string;
  timeZoneLabel: string;
  timeZoneAbbr: string;
  timeZoneFlag: string;
  phaseLabel: string;
  phaseBadgeClass: string;
  phaseSubLabel: string;
  totalWritingMs: number;
  justCrossedWarnings: number[];
  justEnteredWriting: boolean;
  justFinished: boolean;
  extraMinutes: number;
}

const STORAGE_KEY = 'fet-exam-session';
const SETTINGS_KEY = 'fet-exam-settings';

export const DEFAULT_CONFIG: ExamConfig = {
  title: '',
  centre: '',
  instructions: '',
  durationSeconds: 3600,
  readingSeconds: 0,
  extraSeconds: 0,
  warnings: [900, 300, 60],
  autoStartTime: null,
  timeZone: 'local',
  showSeconds: true,
  hideSecondsUntil5m: false,
  silent: false,
};

export function pad2(n: number): string {
  return String(Math.floor(Math.abs(n))).padStart(2, '0');
}

export function formatClock(date: Date, hour12: boolean, withSeconds = true, timeZone = 'local'): string {
  return formatClockWithZone(date, hour12, withSeconds, timeZone);
}

export function formatDuration(ms: number, showSeconds: boolean, hideSecondsUntil5m = false): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  // Reduced anxiety mode: only show seconds when <= 5 minutes (300 seconds)
  const displaySeconds = showSeconds && (!hideSecondsUntil5m || total <= 300);

  if (h > 0) {
    return displaySeconds ? `${pad2(h)}:${pad2(m)}:${pad2(s)}` : `${pad2(h)}:${pad2(m)}`;
  }
  return displaySeconds ? `${pad2(m)}:${pad2(s)}` : `${pad2(m)} min`;
}

export function parseHms(h: string, m: string, s: string): number {
  const hours = Math.max(0, parseInt(h, 10) || 0);
  const minutes = Math.max(0, parseInt(m, 10) || 0);
  const seconds = Math.max(0, parseInt(s, 10) || 0);
  return hours * 3600 + minutes * 60 + seconds;
}

export function splitSeconds(total: number): { h: number; m: number; s: number } {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return { h, m, s };
}

export function parseQueryConfig(search: string): Partial<ExamConfig> {
  const params = new URLSearchParams(search);
  const partial: Partial<ExamConfig> = {};
  const h = params.get('h');
  const m = params.get('m');
  const s = params.get('s');
  if (h !== null || m !== null || s !== null) {
    partial.durationSeconds = parseHms(h ?? '0', m ?? '0', s ?? '0');
  }
  const read = params.get('read');
  if (read !== null) partial.readingSeconds = Math.max(0, parseInt(read, 10) || 0);
  const extra = params.get('extra');
  if (extra !== null) partial.extraSeconds = Math.max(0, parseInt(extra, 10) || 0);
  const title = params.get('title');
  if (title) partial.title = title.slice(0, 80);
  const centre = params.get('centre');
  if (centre) partial.centre = centre.slice(0, 80);
  const instr = params.get('instr');
  if (instr) partial.instructions = instr.slice(0, 400);
  const tz = params.get('tz');
  if (tz) partial.timeZone = tz;
  return partial;
}

export function toQueryString(config: ExamConfig): string {
  const { h, m, s } = splitSeconds(config.durationSeconds);
  const params = new URLSearchParams();
  if (h) params.set('h', String(h));
  if (m) params.set('m', String(m));
  if (s) params.set('s', String(s));
  if (config.readingSeconds) params.set('read', String(config.readingSeconds));
  if (config.extraSeconds) params.set('extra', String(config.extraSeconds));
  if (config.title) params.set('title', config.title);
  if (config.centre) params.set('centre', config.centre);
  if (config.instructions) params.set('instr', config.instructions);
  if (config.timeZone && config.timeZone !== 'local') params.set('tz', config.timeZone);
  return params.toString();
}

export interface AppSettings {
  hour12: boolean;
  timeZone: string;
  showSeconds: boolean;
  hideSecondsUntil5m: boolean;
  silent: boolean;
  volume: number;
  sound: string;
  flash: boolean;
  timerScale: number;
  wakeLock: boolean;
  warnings: number[];
  showExtraClock: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  hour12: false,
  timeZone: 'local',
  showSeconds: true,
  hideSecondsUntil5m: false,
  silent: false,
  volume: 0.7,
  sound: 'bell',
  flash: true,
  timerScale: 100,
  wakeLock: true,
  warnings: [900, 300, 60],
  showExtraClock: true,
};

export function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS, warnings: [...DEFAULT_SETTINGS.warnings] };
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      timeZone: parsed.timeZone || 'local',
      warnings: Array.isArray(parsed.warnings) ? parsed.warnings : [...DEFAULT_SETTINGS.warnings],
    };
  } catch {
    return { ...DEFAULT_SETTINGS, warnings: [...DEFAULT_SETTINGS.warnings] };
  }
}

export function saveSettings(settings: AppSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    /* ignore */
  }
}

function totalWritingMs(config: ExamConfig, extraAddedMs: number): number {
  return (config.durationSeconds + config.extraSeconds) * 1000 + extraAddedMs;
}

export class ExamEngine {
  config: ExamConfig = { ...DEFAULT_CONFIG };
  phase: Phase = 'idle';
  isPaused = false;
  phaseEndAt: number | null = null;
  pausedRemainingMs: number | null = null;
  startedAt: number | null = null;
  writingStartedAt: number | null = null;
  scheduledFinishAt: number | null = null;
  extraAddedMs = 0;
  firedWarnings: number[] = [];
  readingComplete = false;
  hour12 = false;
  timeZone = 'local';
  private autoStartArmedKey: string | null = null;

  remainingMs(now = Date.now()): number {
    if (this.phase === 'idle' || this.phase === 'finished') {
      if (this.phase === 'finished') return 0;
      if (this.config.readingSeconds > 0 && !this.readingComplete) {
        return this.config.readingSeconds * 1000;
      }
      return totalWritingMs(this.config, this.extraAddedMs);
    }
    if (this.isPaused) return Math.max(0, this.pausedRemainingMs ?? 0);
    if (this.phaseEndAt == null) return 0;
    return Math.max(0, this.phaseEndAt - now);
  }

  progress(now = Date.now()): number {
    if (this.phase === 'reading') {
      const total = this.config.readingSeconds * 1000;
      if (total <= 0) return 1;
      return this.remainingMs(now) / total;
    }
    const total = totalWritingMs(this.config, this.extraAddedMs);
    if (total <= 0) return 1;
    if (this.phase === 'idle') return 1;
    if (this.phase === 'finished') return 0;
    return this.remainingMs(now) / total;
  }

  applyConfig(next: Partial<ExamConfig>): void {
    if (this.phase !== 'idle') return;
    this.config = { ...this.config, ...next };
    if (next.timeZone !== undefined) {
      this.timeZone = next.timeZone;
    }
    this.persist();
  }

  setTimeZone(tz: string): void {
    this.timeZone = tz;
    this.config.timeZone = tz;
    this.persist();
  }

  start(now = Date.now()): { ok: boolean; error?: string } {
    if (this.phase === 'finished') {
      return { ok: false, error: 'Exam is finished. Please reset before starting again.' };
    }
    if (this.isPaused && this.phase !== 'idle') {
      this.resume(now);
      return { ok: true };
    }
    if (this.phase === 'reading' || this.phase === 'writing') return { ok: true };

    const writing = this.config.durationSeconds + this.config.extraSeconds;
    if (writing <= 0) return { ok: false, error: 'Please set the writing time before starting.' };

    this.startedAt = now;
    this.extraAddedMs = 0;
    this.firedWarnings = [];
    this.readingComplete = false;
    this.isPaused = false;
    this.pausedRemainingMs = null;

    const reading = this.config.readingSeconds;
    if (reading > 0) {
      this.phase = 'reading';
      this.phaseEndAt = now + reading * 1000;
      this.scheduledFinishAt = now + reading * 1000 + writing * 1000;
      this.writingStartedAt = null;
    } else {
      this.phase = 'writing';
      this.writingStartedAt = now;
      this.readingComplete = true;
      this.phaseEndAt = now + writing * 1000;
      this.scheduledFinishAt = this.phaseEndAt;
    }
    this.persist();
    return { ok: true };
  }

  pause(now = Date.now()): void {
    if (this.phase !== 'reading' && this.phase !== 'writing') return;
    if (this.isPaused) return;
    this.pausedRemainingMs = this.remainingMs(now);
    this.isPaused = true;
    this.phaseEndAt = null;
    if (this.scheduledFinishAt != null) {
      this.scheduledFinishAt =
        now +
        this.pausedRemainingMs +
        (this.phase === 'reading' ? totalWritingMs(this.config, this.extraAddedMs) : 0);
    }
    this.persist();
  }

  resume(now = Date.now()): void {
    if (!this.isPaused) return;
    const remaining = this.pausedRemainingMs ?? 0;
    this.isPaused = false;
    this.phaseEndAt = now + remaining;
    if (this.phase === 'reading') {
      this.scheduledFinishAt = now + remaining + totalWritingMs(this.config, this.extraAddedMs);
    } else {
      this.scheduledFinishAt = this.phaseEndAt;
    }
    this.pausedRemainingMs = null;
    this.persist();
  }

  reset(): void {
    this.phase = 'idle';
    this.isPaused = false;
    this.phaseEndAt = null;
    this.pausedRemainingMs = null;
    this.startedAt = null;
    this.writingStartedAt = null;
    this.scheduledFinishAt = null;
    this.extraAddedMs = 0;
    this.firedWarnings = [];
    this.readingComplete = false;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  addExtraMinutes(minutes: number): void {
    if (minutes <= 0) return;
    if (this.phase === 'idle' || this.phase === 'finished') {
      this.config.extraSeconds += minutes * 60;
      this.persist();
      return;
    }
    const ms = minutes * 60_000;
    this.extraAddedMs += ms;
    if (this.phase === 'writing') {
      if (this.isPaused && this.pausedRemainingMs != null) {
        this.pausedRemainingMs += ms;
      } else if (this.phaseEndAt != null) {
        this.phaseEndAt += ms;
      }
    }
    if (this.scheduledFinishAt != null) this.scheduledFinishAt += ms;
    this.persist();
  }

  calculate25PercentMinutes(): number {
    const baseMinutes = Math.round(this.config.durationSeconds / 60);
    return Math.round(baseMinutes * 0.25);
  }

  tick(now = Date.now()): ExamView {
    const justCrossedWarnings: number[] = [];
    let justEnteredWriting = false;
    let justFinished = false;

    if ((this.phase === 'reading' || this.phase === 'writing') && !this.isPaused) {
      const remaining = this.remainingMs(now);
      if (this.phase === 'writing') {
        for (const w of this.config.warnings) {
          const wms = w * 1000;
          if (remaining <= wms && !this.firedWarnings.includes(w)) {
            this.firedWarnings.push(w);
            justCrossedWarnings.push(w);
          }
        }
      }
      if (remaining <= 0) {
        if (this.phase === 'reading') {
          this.enterWriting(now);
          justEnteredWriting = true;
        } else {
          this.phase = 'finished';
          this.phaseEndAt = now;
          this.isPaused = false;
          justFinished = true;
          this.persist();
        }
      }
    }

    const remainingMs = this.remainingMs(now);
    let phaseLabel = 'Ready to start';
    let phaseBadgeClass = 'badge-ready';
    let phaseSubLabel = 'Verify exam details and press Start';

    if (this.phase === 'reading') {
      phaseLabel = 'Reading time';
      phaseBadgeClass = 'badge-reading';
      phaseSubLabel = 'Read question paper only. Do not write in booklet.';
    } else if (this.phase === 'writing') {
      phaseLabel = 'Writing time';
      phaseBadgeClass = 'badge-writing';
      phaseSubLabel = 'You may open answer booklet and begin.';
    } else if (this.phase === 'finished') {
      phaseLabel = 'Exam finished';
      phaseBadgeClass = 'badge-finished';
      phaseSubLabel = 'Pens down. Please remain seated in complete silence.';
    } else if (this.config.readingSeconds > 0) {
      phaseLabel = 'Ready — reading then writing';
      phaseSubLabel = `${Math.round(this.config.readingSeconds / 60)} min reading time before writing begins`;
    }

    const current = new Date(now);
    const startLabel = this.startedAt
      ? formatClock(new Date(this.startedAt), this.hour12, false, this.timeZone)
      : '—';

    // Finish time calculation
    let finishLabel = '—';
    let extra25FinishLabel = '—';

    const baseDuration = this.config.durationSeconds;
    const readingSec = this.config.readingSeconds;
    const extraSec = this.config.extraSeconds + Math.round(this.extraAddedMs / 1000);
    const extra25Sec = Math.round(baseDuration * 0.25);

    if (this.scheduledFinishAt != null) {
      finishLabel = formatClock(new Date(this.scheduledFinishAt), this.hour12, false, this.timeZone);
      const extra25Timestamp = this.scheduledFinishAt + extra25Sec * 1000;
      extra25FinishLabel = formatClock(new Date(extra25Timestamp), this.hour12, false, this.timeZone);
    } else if (this.phase === 'idle') {
      const totalSec = readingSec + baseDuration + extraSec;
      if (totalSec > 0) {
        finishLabel = formatClock(new Date(now + totalSec * 1000), this.hour12, false, this.timeZone);
        extra25FinishLabel = formatClock(new Date(now + (totalSec + extra25Sec) * 1000), this.hour12, false, this.timeZone);
      }
    }

    const tzMeta = findCountryTimeZone(this.timeZone);

    return {
      phase: this.phase,
      isPaused: this.isPaused,
      remainingMs,
      remainingLabel: formatDuration(remainingMs, this.config.showSeconds, this.config.hideSecondsUntil5m),
      progress: this.progress(now),
      currentTimeLabel: formatClock(current, this.hour12, true, this.timeZone),
      startTimeLabel: startLabel,
      finishTimeLabel: finishLabel,
      extra25FinishLabel,
      timeZone: this.timeZone,
      timeZoneLabel: tzMeta.name,
      timeZoneAbbr: tzMeta.abbr,
      timeZoneFlag: tzMeta.flag,
      phaseLabel,
      phaseBadgeClass,
      phaseSubLabel,
      totalWritingMs: totalWritingMs(this.config, this.extraAddedMs),
      justCrossedWarnings,
      justEnteredWriting,
      justFinished,
      extraMinutes: Math.round((this.config.extraSeconds * 1000 + this.extraAddedMs) / 60_000),
    };
  }

  shouldAutoStart(now = Date.now()): boolean {
    if (this.phase !== 'idle' || !this.config.autoStartTime) return false;
    const [hh, mm] = this.config.autoStartTime.split(':').map(Number);
    if (Number.isNaN(hh) || Number.isNaN(mm)) return false;

    let currentHours: number;
    let currentMinutes: number;
    let dateKey: string;

    const tz = this.timeZone && this.timeZone !== 'local' ? this.timeZone : null;
    if (tz) {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
        const parts = formatter.formatToParts(new Date(now));
        const getVal = (type: string) => parts.find((p) => p.type === type)?.value ?? '0';
        currentHours = parseInt(getVal('hour'), 10);
        if (currentHours === 24) currentHours = 0;
        currentMinutes = parseInt(getVal('minute'), 10);
        dateKey = `${getVal('year')}-${getVal('month')}-${getVal('day')}`;
      } catch {
        const d = new Date(now);
        currentHours = d.getHours();
        currentMinutes = d.getMinutes();
        dateKey = d.toDateString();
      }
    } else {
      const d = new Date(now);
      currentHours = d.getHours();
      currentMinutes = d.getMinutes();
      dateKey = d.toDateString();
    }

    if (currentHours !== hh || currentMinutes !== mm) {
      this.autoStartArmedKey = null;
      return false;
    }
    const key = `${this.config.autoStartTime}-${this.timeZone || 'local'}-${dateKey}`;
    if (this.autoStartArmedKey === key) return false;
    this.autoStartArmedKey = key;
    return true;
  }

  persist(): void {
    try {
      const snap: ExamSnapshot = {
        config: this.config,
        phase: this.phase,
        isPaused: this.isPaused,
        phaseEndAt: this.phaseEndAt,
        pausedRemainingMs: this.pausedRemainingMs,
        startedAt: this.startedAt,
        writingStartedAt: this.writingStartedAt,
        scheduledFinishAt: this.scheduledFinishAt,
        extraAddedMs: this.extraAddedMs,
        firedWarnings: this.firedWarnings,
        readingComplete: this.readingComplete,
        timeZone: this.timeZone,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snap));
    } catch {
      /* ignore storage errors */
    }
  }

  restore(): boolean {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      const snap = JSON.parse(raw) as ExamSnapshot;
      this.config = { ...DEFAULT_CONFIG, ...snap.config };
      if (snap.timeZone) {
        this.timeZone = snap.timeZone;
        this.config.timeZone = snap.timeZone;
      } else if (snap.config?.timeZone) {
        this.timeZone = snap.config.timeZone;
      }
      this.phase = snap.phase;
      this.isPaused = snap.isPaused;
      this.phaseEndAt = snap.phaseEndAt;
      this.pausedRemainingMs = snap.pausedRemainingMs;
      this.startedAt = snap.startedAt;
      this.writingStartedAt = snap.writingStartedAt;
      this.scheduledFinishAt = snap.scheduledFinishAt;
      this.extraAddedMs = snap.extraAddedMs ?? 0;
      this.firedWarnings = snap.firedWarnings ?? [];
      this.readingComplete = snap.readingComplete ?? false;

      if (this.phase === 'finished') return true;

      if ((this.phase === 'reading' || this.phase === 'writing') && !this.isPaused && this.phaseEndAt != null) {
        const now = Date.now();
        if (now >= this.phaseEndAt) {
          if (this.phase === 'reading') {
            const overflow = now - this.phaseEndAt;
            this.enterWriting(this.phaseEndAt);
            if (this.phaseEndAt != null) this.phaseEndAt -= overflow;
            this.tick(now);
          } else {
            this.phase = 'finished';
            this.phaseEndAt = now;
          }
        }
      }
      return true;
    } catch {
      return false;
    }
  }

  private enterWriting(now: number): void {
    this.phase = 'writing';
    this.readingComplete = true;
    this.writingStartedAt = now;
    this.firedWarnings = [];
    const writing = totalWritingMs(this.config, this.extraAddedMs);
    this.phaseEndAt = now + writing;
    this.scheduledFinishAt = this.phaseEndAt;
    this.persist();
  }
}
