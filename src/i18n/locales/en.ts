// English source dictionary. Every other locale must match this shape (see `Dictionary`).
// Strings used with `set:html` may contain <strong>, <em> and <kbd> tags.
// Placeholders such as {n}, {time} or {title} are filled in at runtime by `fmt()`.

const en = {
  meta: {
    home: {
      title: 'Free Exam Timer — Free Online Exam Countdown Clock | FreeExamTimer',
      description:
        'Free exam timer for teachers, invigilators & students. Set reading time, writing time, extra time (+25%), full-screen hall display, and audible chimes. Works for SAT, GRE, IELTS, JEE, NEET, GCSE, IB & more. No ads, no signup.',
    },
    howTo: {
      title: 'How to Use the Free Exam Timer — Setup Guide for Teachers & Invigilators | FreeExamTimer',
      description:
        'Step-by-step guide to setting up FreeExamTimer: writing time presets, reading time countdown, +25% extra time, full-screen hall display, chimes, and keyboard shortcuts.',
    },
    faq: {
      title: 'Frequently Asked Questions — Free Online Exam Timer | FreeExamTimer',
      description:
        'Common questions and answers about FreeExamTimer: countdowns for SAT, GCSE, IELTS, maths exam timer, PC and phone support, reading time, extra time, and no-download browser timer.',
    },
    keywords:
      'exam timer, free exam timer, online exam timer, exam timer clock, exam timer countdown, exam timer full screen, exam timer with extra time, exam timer with reading time, digital exam timer, competitive exam timer, math exam timer, SAT exam timer, GRE exam timer, CAT exam timer, JEE exam timer, NEET exam timer, CLAT exam timer, UPSC exam timer, ACT exam timer, GCSE exam timer, Gaokao exam timer, ENEM exam timer, IELTS exam timer, AP exam timer, IB exam timer, reading time timer, invigilator timer, hall timer, classroom exam clock, exam countdown clock',
    ogImageAlt: 'FreeExamTimer — Free Online Exam Countdown Clock',
    schemaDescription:
      'Free online exam timer for teachers, invigilators and students. Features reading time, writing time, extra time (+25% access arrangements), full-screen hall display, audible chimes, and shareable exam links.',
    schemaFeatures: [
      'Exam countdown timer',
      'Reading time phase with auto-handoff',
      'Extra time / access arrangements (+25%)',
      'Full-screen projector hall display',
      'Audible chimes and warning alerts',
      'Shareable exam configuration links',
      'Digital exam timer with dark mode',
      'Supports SAT, GRE, IELTS, JEE, NEET, GCSE, IB, CAT, CLAT, UPSC, ACT, Gaokao, ENEM, AP exams',
    ],
  },

  nav: {
    timer: 'Timer',
    howTo: 'How to use',
    faq: 'FAQ',
    about: 'About',
    contact: 'Contact',
    fullScreen: 'Full screen',
    fullScreenTitle: 'Full screen (F)',
    toggleTheme: 'Toggle theme',
    toggleThemeTitle: 'Toggle theme (D)',
    settings: 'Settings',
    language: 'Language',
  },

  footer: {
    tagline:
      'A hall-ready exam clock built for teachers, invigilators, and students. Reading time, +25% extra time access arrangements, and projector hall mode — 100% free with no ads.',
    badges: 'Zero Tracking • No Ads • Offline Safe',
    timerGuides: 'Timer & Guides',
    examTimer: 'Exam Timer',
    howToUse: 'How to Use',
    faqHelp: 'FAQ & Help',
    aboutContact: 'About & Contact',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    hallProjections: 'Hall Projections',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    languages: 'Languages',
    rights: '© 2026 FreeExamTimer. All rights reserved.',
    shortcuts:
      'Shortcuts: <kbd>Space</kbd> Start/Pause · <kbd>R</kbd> Reset · <kbd>F</kbd> Fullscreen · <kbd>D</kbd> Theme',
    themeTitle: 'Toggle dark/light mode',
    theme: 'Theme:',
    dark: 'Dark',
    light: 'Light',
    top: 'Top',
    topTitle: 'Scroll to top of page',
    topAria: 'Back to top',
  },

  app: {
    regions: {
      System: 'System',
      'Asia & Pacific': 'Asia & Pacific',
      Americas: 'Americas',
      Europe: 'Europe',
      'Middle East & Africa': 'Middle East & Africa',
    },
    sounds: {
      bell: 'Harmonic Exam Bell',
      gong: 'Hall Gong (Resonant)',
      chime: 'Gentle Chime (3-tone)',
      beep: 'Digital Beep',
      buzzer: 'Soft Buzzer',
    },

    settings: {
      ariaLabel: 'Settings panel',
      title: 'Exam Timer Settings',
      close: 'Close settings',
      displayClock: 'Display & Clock',
      countryTime: 'Country Standard Time',
      countryTimeHint: "Live clocks and scheduled starts display in this country's time.",
      darkMode: 'Dark mode',
      alwaysSeconds: 'Always show seconds',
      hideSecondsTitle: 'Hide seconds during the bulk of the exam and only show in final 5 minutes to reduce student anxiety',
      hideSeconds: 'Hide seconds until final 5m',
      calm: '(calm)',
      hour12: '12-hour clock (AM/PM)',
      showExtra: 'Show +25% extra finish time',
      flash: 'Visual flash when finished',
      wakeLock: 'Keep screen awake (No sleep)',
      timerSize: 'Timer size',
      timerSizeAria: 'Timer display size',
      soundChimes: 'Sound & Chimes',
      silent: 'Silent hall (Visual alerts only)',
      chimeSound: 'Chime sound',
      volume: 'Volume',
      testSound: 'Play test sound',
      warnings: 'Warning Notifications',
      warningsHint: 'Chime when remaining writing time reaches:',
      warnMinutes: '{n} minutes remaining',
      warnOneMinute: '1 minute remaining',
      shortcuts: 'Keyboard Shortcuts',
      scStartPause: 'Start / Pause',
      scReset: 'Reset exam',
      scFullScreen: 'Full screen hall display',
      scTheme: 'Toggle dark theme',
      scSettings: 'Open / close settings',
      scExit: 'Exit / Close modals',
    },

    fullscreen: {
      ariaLabel: 'Hall display projection',
      ready: 'Ready',
      extended: 'Extended',
      currentTime: 'Current Time',
      startTime: 'Start Time',
      finishTime: 'Finish Time',
      extraFinish: '+25% Extra Finish',
      localTime: 'Local Time',
      switchTzTitle: 'Switch Country Standard Time in Projector Mode',
      exit: 'Exit (Esc)',
      exitAria: 'Exit full screen',
    },

    hero: {
      badge: 'Official Exam Countdown Clock',
      title: 'Exam Countdown & Hall Display',
      intro:
        'Dedicated exam timer for teachers and invigilators. Reading time handoff, +25% access arrangement clocks, and full-screen projector mode.',
    },

    display: {
      readyToStart: 'Ready to start',
      directive: 'Verify duration and press Start exam',
      current: 'Current',
      start: 'Start',
      finish: 'Finish',
      extraFinish: '+25% Finish',
      countryTimer: 'Country Standard Timer:',
      localDevice: 'Local (Device Time)',
      chooseTz: 'Choose Country Standard Time',
      selectTzTitle: 'Select country standard time to view ongoing exam clocks',
      hallNotice: 'Exam Hall Notice:',
    },

    controls: {
      startExam: 'Start exam',
      pause: 'Pause',
      reset: 'Reset',
      add5: '+5 min extra',
      add5Title: 'Add 5 minutes writing time',
      add15: '+15 min',
      add15Title: 'Add 15 minutes writing time',
      add25: '+25% Extra',
      add25Title: 'Add standard 25% access arrangement extra time',
      fullScreen: 'Full screen',
      fullScreenTitle: 'Project to full screen (F)',
      share: 'Share link',
      shareTitle: 'Copy shareable link with current exam configuration',
      mobileAria: 'Mobile exam controls',
      mobileAdd5Title: 'Add 5 min',
    },

    setup: {
      heading: 'Exam Configuration',
      editable: '(editable while idle)',
      clear: 'Clear',
      clearTitle: 'Clear all configuration inputs in panel',
      hide: 'Hide',
      titleLabel: 'Exam Title & Subject',
      titlePlaceholder: 'e.g. Mathematics Paper 1 (Higher Tier)',
      centreLabel: 'Centre / Room Number',
      optional: '(optional)',
      centrePlaceholder: 'e.g. Centre 54321 · Sports Hall Desk A',
      durationLabel: 'Writing Duration (Hours : Minutes : Seconds)',
      durationHint: 'Exclusive of reading time',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      presets: 'Quick presets:',
      presetLabels: {
        '15': '15 min',
        '30': '30 min',
        '45': '45 min',
        '60': '1 hr',
        '75': '1h 15m',
        '90': '1.5 hr',
        '105': '1h 45m',
        '120': '2 hr',
        '150': '2.5 hr',
        '180': '3 hr',
      },
      minLabel: '{n} min',
      none: 'None',
      readingLabel: 'Reading Time (Minutes)',
      readingHint: 'Hands off automatically into writing time when finished.',
      extraLabel: 'Extra Time / Access Arrangements (Minutes)',
      calc25: '+25% Calc',
      calc25Title: 'Calculate exactly 25% extra writing time',
      extraHint: 'Calculates official extended finish clock on the display.',
      autostartLabel: 'Automatic Scheduled Start',
      autostartHint: 'Starts automatically when wall clock hits this exact time.',
      autostartTzLabel: 'Scheduled Start Country Time:',
      autostartTzHint:
        'The countdown begins automatically when the clock in this selected country reaches your scheduled start time.',
      noticeLabel: 'Invigilator Notice / Rules for Screen',
      noticePlaceholder: 'e.g. Silence at all times. Black ballpoint pen only. No mobile phones or smartwatches.',
      rulesHint: 'Add common exam rules to instructions:',
      rules: [
        { label: '+ Silence at all times', text: 'Silence at all times in the examination room.' },
        {
          label: '+ No phones / smartwatches',
          text: 'All mobile phones and smartwatches must be switched off and placed in bags.',
        },
        { label: '+ Black pen only', text: 'Black ink or ballpoint pen only. Do not use correcting fluid.' },
        { label: '+ Check paper details', text: 'Check that you have the correct examination paper.' },
        { label: '+ Raise hand for help', text: 'Raise your hand if you require extra paper or assistance.' },
      ],
    },

    features: {
      eyebrow: 'Built specifically for real exam halls',
      title: "Everything an invigilator needs — and nothing they don't",
      items: [
        {
          icon: '📘',
          title: 'Reading then writing',
          text: 'Optional reading time counts down first with clear instructions, then automatically hands over into writing time with an audible tone.',
        },
        {
          icon: '⏱️',
          title: 'Dual finish clocks',
          text: 'Calculates both standard finish time and +25% access arrangement finish time side-by-side. No mental math on the whiteboard.',
        },
        {
          icon: '📺',
          title: 'Projector hall mode',
          text: 'One-click full screen with giant tabular numerals readable from 30+ meters away at the back of the gym or assembly hall.',
        },
        {
          icon: '🛡️',
          title: 'Drift-free & crash-proof',
          text: 'Uses system timestamp deltas, not fragile tick intervals. Accidental browser refresh or tab close restores the running exam instantly.',
        },
        {
          icon: '🔔',
          title: 'Synthesized chimes',
          text: 'Synthesized via Web Audio API without external audio files. 15m, 10m, 5m, and 1m warnings, or silent hall visual flash.',
        },
        {
          icon: '🔗',
          title: 'Shareable exam links',
          text: 'Encode paper name, length, reading time, and notices directly into a shareable URL to sync multiple examination rooms.',
        },
      ],
    },

    seo: {
      ariaLabel: 'About FreeExamTimer',
      eyebrow: 'Complete Guide',
      title: 'The Best Free Exam Timer for Every Examination',
      intro:
        'A free, no-signup, no-ads <strong>online exam timer</strong> trusted by teachers, invigilators, and students worldwide — from school classrooms to competitive exam halls.',
      what: {
        title: 'What Is FreeExamTimer?',
        paragraphs: [
          'FreeExamTimer is a professional-grade <strong>exam timer</strong> designed for real examination conditions. Unlike generic stopwatches or kitchen countdown clocks, every feature has been built around the specific workflow of invigilating a timed paper — from setting reading time through to the final bell. It is completely free: no account required, no advertisements, no paywalled features.',
          'Whether you need a <strong>digital exam timer</strong> for a single student at home, a <strong>full-screen exam timer</strong> projected onto the wall of a sports hall holding 300 candidates, or a configurable <strong>exam timer countdown</strong> shared between multiple invigilation rooms via a URL, FreeExamTimer handles all three scenarios without breaking a sweat.',
        ],
      },
      core: {
        title: 'Core Features of This Free Exam Timer',
        items: [
          '<strong>Exam timer with reading time</strong> — Set a separate reading-time phase (5, 10, or 15 minutes are common). The timer counts it down with a clear "Reading Time" label, then automatically hands over into writing time with an audible chime. No manual switching needed.',
          '<strong>Exam timer with extra time</strong> — Enter any number of extra minutes or click the <em>+25% Calc</em> button to apply the standard access-arrangement allowance automatically. Both the standard finish time and the extended (+25%) finish time are displayed side-by-side on screen — eliminating whiteboard maths mistakes.',
          '<strong>Exam timer full screen</strong> — Press <kbd>F</kbd> or the Full Screen button to enter projector hall mode. The <strong>exam timer clock</strong> scales to giant tabular numerals readable from 30+ metres, accompanied by live current time, start time, finish time, and extended finish time — everything a candidate needs to see at a glance.',
          '<strong>Exam timer countdown</strong> — Accurate to the second, driven by system-timestamp deltas rather than fragile tick intervals. The timer does not drift, even if the browser tab is throttled or the device enters power-saving mode.',
          '<strong>Math exam timer presets</strong> — Quick-select durations: 15 min, 30 min, 45 min, 1 hr, 1 h 15 m, 1.5 hr, 1 h 45 m, 2 hr, 2.5 hr, and 3 hr. Perfect for a <strong>math exam timer</strong> or any paper with a standard duration.',
          '<strong>Audible chimes</strong> — Five synthesized sounds (Harmonic Bell, Hall Gong, Gentle Chime, Digital Beep, Soft Buzzer) with configurable warning thresholds at 30 m, 15 m, 10 m, 5 m, and 1 m remaining. Silent hall mode shows a visual flash only.',
          "<strong>Country standard timers & international timezones</strong> — Select any major country's official time zone directly under Scheduled Start or under the live Current Time view. Clocks (Current, Start, Finish, and Extended +25%) dynamically adapt to the selected country standard time, enabling international examinations (IB, AP, SAT, Cambridge, JEE, IELTS) and remote proctoring across continents.",
          '<strong>Shareable exam links</strong> — Encode the exam title, duration, reading time, country standard timezone, and invigilator notice into a URL that opens the timer pre-configured in any other room.',
        ],
      },
      competitive: {
        title: 'Online Exam Timer for Competitive Exams',
        intro:
          "FreeExamTimer is purpose-built for <strong>competitive exam timer</strong> use — where seconds count and accuracy is non-negotiable. Here is how it maps to the world's most popular high-stakes examinations:",
        items: [
          "<strong>SAT exam timer</strong> — Simulate the College Board's module-based timing: 64 minutes for Reading &amp; Writing Module 1, 35 minutes for Math, etc.",
          '<strong>GRE exam timer</strong> — Set precise section durations: 41 minutes per Verbal Reasoning section, 47 minutes per Quantitative Reasoning section.',
          '<strong>ACT exam timer</strong> — English (45 min), Mathematics (60 min), Reading (35 min), Science (35 min) — use presets or type exact times.',
          '<strong>IELTS exam timer</strong> — Academic Writing Task 1 (20 min) and Task 2 (40 min), or General Training Writing; Reading (60 min). Reading time can also be included for Listening.',
          '<strong>AP exam timer</strong> — AP exams vary by subject; configure hours and minutes precisely for each free-response or multiple-choice section.',
          "<strong>IB exam timer</strong> — Use the reading time feature for IB's compulsory 5-minute reading period before Paper 1 or Paper 2 sections.",
          '<strong>GCSE exam timer</strong> — Supports durations from 45 minutes (short component) to 2 hours 30 minutes (extended papers), with full extra-time support for SEND candidates.',
          '<strong>JEE exam timer</strong> — JEE Main and JEE Advanced papers run 3 hours; use the competitive exam timer to simulate full-length practice sessions.',
          '<strong>NEET exam timer</strong> — Practice 3 hour 20 minute NEET-UG papers with automatic chimes at the 30- and 15-minute marks.',
          '<strong>CAT exam timer</strong> — CAT runs 40 minutes per section (VARC, DILR, QA); set up each section individually.',
          '<strong>CLAT exam timer</strong> — Simulate the 2-hour CLAT paper with reading-time and instruction overlays for invigilated practice tests.',
          '<strong>UPSC exam timer</strong> — Prelims papers are 2 hours each; UPSC Mains answer-writing practice benefits from the shareable link feature to sync multiple study rooms.',
          '<strong>Gaokao exam timer</strong> — Chinese college entrance exam sections run 150 minutes (Language &amp; Literature) down to 40 minutes (optional subjects).',
          "<strong>ENEM exam timer</strong> — Brazil's ENEM runs 5.5 hours on Day 1 (Languages + Essay) and 5 hours on Day 2 (STEM). Use multiple timers across study days.",
        ],
      },
      why: {
        title: 'Why Choose a Dedicated Exam Timer Clock?',
        intro:
          'General-purpose timers lack the features that matter in an examination context. A dedicated <strong>exam timer clock</strong> like FreeExamTimer provides:',
        items: [
          '<strong>Phase separation</strong> — Reading time and writing time are distinct phases, not a single undifferentiated countdown.',
          '<strong>Access arrangements compliance</strong> — The +25% extra-time calculator is built to the standard used by awarding bodies worldwide (e.g. UK JCQ, College Board, Cambridge Assessment).',
          '<strong>Hall-display readability</strong> — Tabular mono numerals prevent digit-width jitter that distracts candidates; colours shift during the final five minutes to signal urgency.',
          '<strong>Crash resilience</strong> — State is persisted to localStorage every second. Accidental page refresh or power blip restores the live exam automatically.',
          '<strong>Screen wake lock</strong> — Optionally prevents the device from sleeping, essential for unattended projectors during long examinations.',
        ],
      },
      howTo: {
        title: 'How to Use This Free Online Exam Timer',
        steps: [
          '<strong>Set the exam title and subject</strong> — Type the paper name (e.g. "Mathematics Paper 1 — Higher Tier") so it appears on the hall display.',
          '<strong>Enter the writing duration</strong> — Choose hours, minutes, and seconds, or click a quick-preset button.',
          '<strong>Add reading time</strong> (if required) — Select 5, 10, or 15 minutes; the timer handles the handoff automatically.',
          '<strong>Configure extra time</strong> — Type the minutes or press <em>+25% Calc</em> for access arrangements.',
          "<strong>Enter a scheduled start time & country standard time</strong> (optional) — Pick any major country's standard time (e.g. India IST, US Eastern, UK GMT/BST, Japan JST, Europe CET) under Scheduled Start or Current Time. The exam starts automatically when that country's clock reaches the specified time, and candidates or remote invigilators worldwide can monitor the ongoing clocks in their own country time.",
          '<strong>Go full screen</strong> — Press <kbd>F</kbd> or the Full Screen button before candidates enter the room.',
          '<strong>Press Start exam</strong> — Or wait for the auto-start trigger. The timer begins, chimes sound at configured warning thresholds, and a "PENS DOWN" modal fires when time expires.',
        ],
      },
    },

    resetModal: {
      title: 'Reset current exam?',
      text: 'The timer will stop and revert to idle. Any elapsed time and extra time will be reset.',
      confirm: 'Reset Exam',
      cancel: 'Cancel',
    },

    doneModal: {
      eyebrow: 'Exam Completed',
      title: 'PENS DOWN — TIME IS UP',
      text: 'All candidates must stop writing immediately and remain seated in silence until papers are collected.',
      dismiss: 'Acknowledge & Close',
    },
  },

  // Strings rendered at runtime by src/scripts/exam-ui.ts
  client: {
    phases: {
      ready: 'Ready to start',
      readyReading: 'Ready — reading then writing',
      reading: 'Reading time',
      writing: 'Writing time',
      finished: 'Exam finished',
    },
    directives: {
      ready: 'Verify exam details and press Start',
      readyReading: '{n} min reading time before writing begins',
      reading: 'Read question paper only. Do not write in booklet.',
      writing: 'You may open answer booklet and begin.',
      finished: 'Pens down. Please remain seated in complete silence.',
    },
    paused: '{label} · Paused',
    pausedDirective: 'Timer is paused. Press Resume to continue.',
    examInProgress: 'Examination in Progress',
    currentPreview: 'Current: {time} {tz}',
    extendedBadge: 'Extended +{n} min',
    resumeExam: 'Resume exam',
    startAgain: 'Start again',
    startExam: 'Start exam',
    resume: 'Resume',
    restart: 'Restart',
    start: 'Start',
    show: 'Show',
    hide: 'Hide',
    timeUpTitle: '{title} — TIME IS UP',
    pensDown: 'PENS DOWN — TIME IS UP',
    toastReadingOver: 'Reading time is over. Writing time has started.',
    toastWarning: 'Warning: {time} remaining',
    unitMin: '{n} min',
    unitSec: '{n}s',
    toastAutoStart: 'Automatic scheduled start triggered',
    toastCannotStart: 'Cannot start exam',
    errFinished: 'Exam is finished. Please reset before starting again.',
    errNoWriting: 'Please set the writing time before starting.',
    toastReset: 'Exam reset',
    toastTimeZone: 'Country standard time: {tz}',
    toastCannotClear: 'Cannot clear while exam is running',
    toastCleared: 'Panel inputs cleared',
    toastDuration: 'Duration set to {n} minutes',
    toastReading: 'Reading time: {n} min',
    toastExtra: 'Extra time: {n} min',
    toastCalc25: 'Calculated 25% extra time: +{n} minutes',
    toastRuleAdded: 'Rule added to notice',
    toastAdded5Writing: '+5 minutes extra writing time added',
    toastAdded5: '+5 minutes extra time added',
    toastAdded15Writing: '+15 minutes extra writing time added',
    toastAdded25: '+{n} min (25% extra time) added',
    toastLinkCopied: 'Exam configuration link copied to clipboard!',
    toastUrlInBar: 'Copied URL to address bar',
    toastTestSound: 'Playing sample sound: {sound}',
  },

  howTo: {
    eyebrow: 'Guide',
    title: 'How to run an exam on this timer',
    intro:
      'This site is only an exam clock. There is no stopwatch or alarm — just the controls an invigilator needs in a hall.',
    steps: [
      {
        title: '1. Set writing time and use presets',
        text: 'Enter hours, minutes, and seconds, or tap one-touch presets from 15 min through 3 hours. This is the official writing time, exclusive of reading time.',
      },
      {
        title: '2. Reading time countdown',
        text: 'Quickly select 5, 10, or 15 minutes of reading time. The timer clearly labels the reading phase and warns candidates not to write, before automatically transitioning into writing time with an audible chime.',
      },
      {
        title: '3. Dual Finish Clocks & 25% Extra Time',
        text: 'Tap "+25% Calc" to automatically calculate standard access arrangement extra time. The clock display presents both standard finish time and +25% extra finish time simultaneously, eliminating mental math in the exam hall. You can also add +5 or +15 minutes on the fly.',
      },
      {
        title: '4. Candidate instructions & rules',
        text: 'Add paper details and click quick rule chips (Silence at all times, No mobile phones, Black pen only) to project clean instructions throughout the examination.',
      },
      {
        title: '5. Projector Hall Mode (F key)',
        text: 'Press F or the full-screen icon to project a giant high-contrast clock readable from 30+ meters away. Controls auto-dim to minimize candidate distraction.',
      },
      {
        title: '6. Chimes, warnings, and anxiety reduction',
        text: 'Configure warnings (30m, 15m, 10m, 5m, 1m) with authentic Web Audio bells, gongs, or chimes. Enable "Hide seconds until final 5m" in Settings to keep anxious candidates calm during long papers.',
      },
    ],
    backupTitle: 'Backup clock',
    backupText:
      'Do not rely on a single device. Keep a wall clock or second timer as backup. This page continues the exam if you refresh, but it cannot run if the computer sleeps without wake lock, or if the tab is discarded.',
    cta: 'Open exam timer',
  },

  faq: {
    eyebrow: 'Help & FAQ',
    title: 'Frequently Asked Questions',
    intro:
      'Find quick answers to common questions about using FreeExamTimer for tests, classroom examinations, and high-stakes exam halls.',
    ctaTitle: 'Ready to start your exam countdown?',
    ctaText: 'FreeExamTimer is 100% free with no signup, no ads, and full hall projection support.',
    ctaButton: 'Open exam timer',
    items: [
      {
        question: 'What is the best countdown app for exams?',
        answer:
          'FreeExamTimer is one of the best countdown apps for exams because it is purpose-built for real examination conditions and classroom environments. Unlike generic timer apps, it includes dedicated exam features: separate reading time with automatic handoff to writing time, an automatic +25% extra time calculator for access arrangements, dual finish-time clocks, high-visibility full-screen hall projection, and custom audio warning chimes—all 100% free with no ads or registration required.',
      },
      {
        question: 'Where can I find a maths exam timer?',
        answer:
          'You can use FreeExamTimer directly in your browser as a dedicated maths exam timer. It features quick one-click duration presets for standard mathematics exam lengths (such as 45m, 1h, 1.5h, 2h, and 3h), allows second-level precision, and displays clear, high-contrast tabular numerals that eliminate digit-width jitter while solving complex equations and timed problem sets.',
      },
      {
        question: 'What is the best exam countdown app for PC?',
        answer:
          'FreeExamTimer is the best web-based exam countdown app for Windows PC, Mac, and Chromebook. It runs directly in any modern desktop browser (Chrome, Edge, Firefox, Safari) and features a projector hall display mode (press F for full screen), handy keyboard shortcuts (Space to start/pause, R to reset, D for dark mode), screen wake lock to prevent computer sleep, and automatic offline crash recovery via localStorage.',
      },
      {
        question: 'How to make a free countdown?',
        answer:
          'To make a free countdown on FreeExamTimer: (1) Enter your exam title and subject; (2) Enter or select your desired duration in hours, minutes, and seconds; (3) Optionally add a reading time period or extra time allowance (+25%); (4) Configure warning chimes and alerts in Settings; (5) Click "Start exam" or press the Spacebar to begin your free countdown immediately without downloading any software or creating an account.',
      },
      {
        question: 'How can I set a timer?',
        answer:
          'To set a timer on FreeExamTimer: (1) Enter your duration using the hours, minutes, and seconds input boxes, or click one of the quick duration presets (e.g., 15m, 30m, 1h, 2h); (2) Optionally choose a separate reading time (5, 10, or 15 minutes) and extra time for access arrangements; (3) Optionally set a scheduled start time if you want the exam to begin automatically at a specific clock time; (4) Click "Start exam" or press the Spacebar to launch the countdown.',
      },
      {
        question: 'What is the best free timer app?',
        answer:
          'FreeExamTimer is widely recognized as the best free timer app for students, teachers, and exam invigilators. It offers professional hall-ready examination tools 100% free of charge, with zero advertisements, no paywalled features, no tracking, and no sign-up requirement. It works cross-platform across PCs, tablets, and smartphones.',
      },
      {
        question: 'Can I use a countdown timer for the SAT, GCSE, or IELTS?',
        answer:
          'Yes. FreeExamTimer is designed for major competitive and standardized exams including the SAT, GCSE, IELTS, ACT, GRE, AP, IB, JEE, and NEET. You can configure the exact section lengths (e.g., 64 minutes for SAT Reading & Writing, 60 minutes for IELTS Writing or Reading, or 1h 45m for GCSE papers) with full support for reading periods and official +25% extra time access arrangements.',
      },
      {
        question: 'Does an online exam timer work without downloading an app?',
        answer:
          'Yes. FreeExamTimer runs entirely inside your web browser without downloading or installing any apps or extensions. It works on any device with an internet browser and continues running smoothly even if your internet connection drops. The timer state is continuously saved to localStorage every second, so refreshing the page or reopening the tab restores your live exam immediately.',
      },
      {
        question: 'Can I use an online exam timer for free?',
        answer:
          'Yes, FreeExamTimer is 100% free with no subscription fees, paywalls, or hidden costs. Every feature — including reading time, +25% extra time calculations, full-screen hall projection, audible chimes, and shareable exam URLs — is available to all teachers, invigilators, and students at zero cost.',
      },
      {
        question: 'Can I use an exam timer on my phone?',
        answer:
          'Yes. FreeExamTimer is fully responsive and optimized for mobile browsers on iOS (iPhone/iPad) and Android. It features a responsive layout and a dedicated mobile bottom navigation bar with easy-to-tap controls for Start, Pause, Reset, Full Screen, and Settings, making it convenient to manage or view your exam countdown on any smartphone.',
      },
    ],
  },
};

export type Dictionary = typeof en;
export default en;
