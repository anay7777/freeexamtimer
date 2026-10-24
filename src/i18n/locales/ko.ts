import type { Dictionary } from './en';

const ko: Dictionary = {
  meta: {
    home: {
      title: '무료 시험 타이머 — 온라인 시험 시계 & 카운트다운 타이머 | FreeExamTimer',
      description:
        '교사·시험 감독관·수험생을 위한 무료 온라인 시험 타이머. 읽기 시간, 답안 작성 시간, 25% 시간 연장, 전체 화면 시험 시계, 알림음까지. 수능 타이머, 공부 타이머로도 활용하세요. 광고·회원가입 없음.',
    },
    howTo: {
      title: '무료 시험 타이머 사용법 — 교사·시험 감독관을 위한 설정 가이드 | FreeExamTimer',
      description:
        'FreeExamTimer 시험 타이머 설정 가이드: 답안 작성 시간 프리셋, 읽기 시간 카운트다운, 25% 시간 연장, 전체 화면 시험 시계, 알림음, 단축키 사용법을 단계별로 안내합니다.',
    },
    faq: {
      title: '자주 묻는 질문 — 무료 온라인 시험 타이머 | FreeExamTimer',
      description:
        'FreeExamTimer 자주 묻는 질문: SAT·GCSE·IELTS 카운트다운, 수학 시험 타이머, PC·휴대폰 지원, 읽기 시간, 시간 연장, 설치 없는 온라인 타이머에 대한 답변을 확인하세요.',
    },
    keywords:
      '시험 타이머, 무료 시험 타이머, 온라인 시험 타이머, 온라인 타이머, 시험 시계, 시험 카운트다운, 카운트다운 타이머, 수능 타이머, 공부 타이머, 전체 화면 타이머, 시간 연장 타이머, 읽기 시간 타이머, 디지털 시험 시계, 모의고사 타이머, 수학 시험 타이머, 시험 감독관 타이머, 교실 시험 시계, 고사장 시계, SAT 타이머, GRE 타이머, IELTS 타이머, TOEFL 타이머, AP 시험 타이머, IB 시험 타이머, ACT 타이머, GCSE 타이머, JEE 타이머, NEET 타이머, Gaokao 타이머, ENEM 타이머',
    ogImageAlt: 'FreeExamTimer — 무료 온라인 시험 카운트다운 시계',
    schemaDescription:
      '교사, 시험 감독관, 수험생을 위한 무료 온라인 시험 타이머. 읽기 시간, 답안 작성 시간, 시간 연장(편의 제공 +25%), 전체 화면 고사장 디스플레이, 알림음, 시험 설정 공유 링크를 지원합니다.',
    schemaFeatures: [
      '시험 카운트다운 타이머',
      '읽기 시간 후 답안 작성 시간 자동 전환',
      '시간 연장 / 편의 제공 (+25%)',
      '전체 화면 프로젝터 고사장 디스플레이',
      '알림음 및 종료 전 경고',
      '시험 설정 공유 링크',
      '다크 모드 지원 디지털 시험 시계',
      'SAT, GRE, IELTS, JEE, NEET, GCSE, IB, CAT, CLAT, UPSC, ACT, Gaokao, ENEM, AP 시험 지원',
    ],
  },

  nav: {
    timer: '타이머',
    howTo: '사용법',
    faq: '자주 묻는 질문',
    about: '소개',
    contact: '문의',
    fullScreen: '전체 화면',
    fullScreenTitle: '전체 화면 (F)',
    toggleTheme: '테마 전환',
    toggleThemeTitle: '테마 전환 (D)',
    settings: '설정',
    language: '언어',
  },

  footer: {
    tagline:
      '교사, 시험 감독관, 수험생을 위해 만든 고사장용 시험 시계. 읽기 시간, 25% 시간 연장(편의 제공), 프로젝터 고사장 모드까지 — 광고 없이 100% 무료입니다.',
    badges: '추적 없음 • 광고 없음 • 오프라인에서도 안전',
    timerGuides: '타이머 & 가이드',
    examTimer: '시험 타이머',
    howToUse: '사용법',
    faqHelp: '자주 묻는 질문 & 도움말',
    aboutContact: '소개 & 문의',
    aboutUs: '서비스 소개',
    contactUs: '문의하기',
    hallProjections: '고사장 화면',
    legal: '법적 고지',
    privacy: '개인정보 처리방침',
    terms: '이용약관',
    languages: '언어',
    rights: '© 2026 FreeExamTimer. 모든 권리 보유.',
    shortcuts:
      '단축키: <kbd>Space</kbd> 시작/일시정지 · <kbd>R</kbd> 초기화 · <kbd>F</kbd> 전체 화면 · <kbd>D</kbd> 테마',
    themeTitle: '다크/라이트 모드 전환',
    theme: '테마:',
    dark: '다크',
    light: '라이트',
    top: '맨 위로',
    topTitle: '페이지 맨 위로 이동',
    topAria: '맨 위로 돌아가기',
  },

  app: {
    regions: {
      System: '시스템',
      'Asia & Pacific': '아시아 & 태평양',
      Americas: '아메리카',
      Europe: '유럽',
      'Middle East & Africa': '중동 & 아프리카',
    },
    sounds: {
      bell: '하모닉 시험 종',
      gong: '고사장 징 (울림)',
      chime: '부드러운 차임 (3음)',
      beep: '디지털 비프음',
      buzzer: '부드러운 버저',
    },

    settings: {
      ariaLabel: '설정 패널',
      title: '시험 타이머 설정',
      close: '설정 닫기',
      displayClock: '화면 & 시계',
      countryTime: '국가 표준시',
      countryTimeHint: '현재 시각과 예약 시작 시각이 이 국가의 시간으로 표시됩니다.',
      darkMode: '다크 모드',
      alwaysSeconds: '항상 초 표시',
      hideSecondsTitle: '수험생의 긴장을 줄이기 위해 시험 대부분 동안 초를 숨기고 마지막 5분에만 표시합니다',
      hideSeconds: '마지막 5분 전까지 초 숨기기',
      calm: '(안정 모드)',
      hour12: '12시간제 (오전/오후)',
      showExtra: '25% 연장 종료 시각 표시',
      flash: '종료 시 화면 깜박임',
      wakeLock: '화면 꺼짐 방지',
      timerSize: '타이머 크기',
      timerSizeAria: '타이머 표시 크기',
      soundChimes: '소리 & 알림음',
      silent: '무음 고사장 (시각 알림만)',
      chimeSound: '알림음 종류',
      volume: '음량',
      testSound: '테스트 소리 재생',
      warnings: '경고 알림',
      warningsHint: '남은 답안 작성 시간이 다음에 도달하면 알림음 재생:',
      warnMinutes: '{n}분 남음',
      warnOneMinute: '1분 남음',
      shortcuts: '키보드 단축키',
      scStartPause: '시작 / 일시정지',
      scReset: '시험 초기화',
      scFullScreen: '전체 화면 고사장 디스플레이',
      scTheme: '다크 테마 전환',
      scSettings: '설정 열기 / 닫기',
      scExit: '나가기 / 창 닫기',
    },

    fullscreen: {
      ariaLabel: '고사장 화면 송출',
      ready: '준비',
      extended: '연장',
      currentTime: '현재 시각',
      startTime: '시작 시각',
      finishTime: '종료 시각',
      extraFinish: '+25% 연장 종료',
      localTime: '현지 시각',
      switchTzTitle: '프로젝터 모드에서 국가 표준시 변경',
      exit: '나가기 (Esc)',
      exitAria: '전체 화면 종료',
    },

    hero: {
      badge: '공식 시험 카운트다운 시계',
      title: '시험 카운트다운 & 고사장 디스플레이',
      intro:
        '교사와 시험 감독관을 위한 전용 시험 타이머. 읽기 시간 자동 전환, 25% 시간 연장(편의 제공) 시계, 전체 화면 프로젝터 모드를 지원합니다.',
    },

    display: {
      readyToStart: '시작 준비 완료',
      directive: '시험 시간을 확인한 후 시험 시작을 누르세요',
      current: '현재',
      start: '시작',
      finish: '종료',
      extraFinish: '+25% 종료',
      countryTimer: '국가 표준시 타이머:',
      localDevice: '현지 (기기 시간)',
      chooseTz: '국가 표준시 선택',
      selectTzTitle: '진행 중인 시험 시계를 볼 국가 표준시를 선택하세요',
      hallNotice: '고사장 안내:',
    },

    controls: {
      startExam: '시험 시작',
      pause: '일시정지',
      reset: '초기화',
      add5: '+5분 연장',
      add5Title: '답안 작성 시간 5분 추가',
      add15: '+15분',
      add15Title: '답안 작성 시간 15분 추가',
      add25: '+25% 연장',
      add25Title: '표준 25% 편의 제공 연장 시간 추가',
      fullScreen: '전체 화면',
      fullScreenTitle: '전체 화면으로 송출 (F)',
      share: '링크 공유',
      shareTitle: '현재 시험 설정이 담긴 공유 링크 복사',
      mobileAria: '모바일 시험 컨트롤',
      mobileAdd5Title: '5분 추가',
    },

    setup: {
      heading: '시험 설정',
      editable: '(대기 중 수정 가능)',
      clear: '지우기',
      clearTitle: '패널의 모든 설정 입력값 지우기',
      hide: '숨기기',
      titleLabel: '시험명 & 과목',
      titlePlaceholder: '예: 수학 영역 (가형) 1교시',
      centreLabel: '시험장 / 고사실 번호',
      optional: '(선택)',
      centrePlaceholder: '예: 제54321 시험장 · 체육관 A열',
      durationLabel: '답안 작성 시간 (시 : 분 : 초)',
      durationHint: '읽기 시간 제외',
      hours: '시간',
      minutes: '분',
      seconds: '초',
      presets: '빠른 설정:',
      presetLabels: {
        '15': '15분',
        '30': '30분',
        '45': '45분',
        '60': '1시간',
        '75': '1시간 15분',
        '90': '1시간 30분',
        '105': '1시간 45분',
        '120': '2시간',
        '150': '2시간 30분',
        '180': '3시간',
      },
      minLabel: '{n}분',
      none: '없음',
      readingLabel: '읽기 시간 (분)',
      readingHint: '읽기 시간이 끝나면 답안 작성 시간으로 자동 전환됩니다.',
      extraLabel: '시간 연장 / 편의 제공 (분)',
      calc25: '+25% 계산',
      calc25Title: '답안 작성 시간의 정확히 25% 연장 시간 계산',
      extraHint: '화면에 공식 연장 종료 시각을 계산해 표시합니다.',
      autostartLabel: '예약 자동 시작',
      autostartHint: '시계가 지정한 시각에 도달하면 자동으로 시작합니다.',
      autostartTzLabel: '예약 시작 국가 시간:',
      autostartTzHint:
        '선택한 국가의 시계가 예약 시작 시각에 도달하면 카운트다운이 자동으로 시작됩니다.',
      noticeLabel: '시험 감독관 안내 / 화면 표시 규칙',
      noticePlaceholder: '예: 시험 중 정숙. 검은색 볼펜만 사용. 휴대폰·스마트워치 소지 금지.',
      rulesHint: '자주 쓰는 시험 규칙을 안내문에 추가:',
      rules: [
        { label: '+ 시험 중 정숙', text: '시험실 내에서는 항상 정숙을 유지하십시오.' },
        {
          label: '+ 휴대폰 / 스마트워치 금지',
          text: '모든 휴대폰과 스마트워치는 전원을 끄고 가방에 넣어 두십시오.',
        },
        { label: '+ 검은색 펜만 사용', text: '검은색 잉크 또는 볼펜만 사용하십시오. 수정액은 사용할 수 없습니다.' },
        { label: '+ 시험지 확인', text: '본인의 시험지가 맞는지 확인하십시오.' },
        { label: '+ 도움 요청 시 손 들기', text: '추가 용지나 도움이 필요하면 손을 들어 주십시오.' },
      ],
    },

    features: {
      eyebrow: '실제 고사장을 위해 설계',
      title: '시험 감독관에게 필요한 모든 것 — 불필요한 것은 없이',
      items: [
        {
          icon: '📘',
          title: '읽기 시간 후 답안 작성',
          text: '선택한 읽기 시간이 명확한 안내와 함께 먼저 카운트다운된 뒤, 알림음과 함께 답안 작성 시간으로 자동 전환됩니다.',
        },
        {
          icon: '⏱️',
          title: '이중 종료 시계',
          text: '표준 종료 시각과 25% 편의 제공 연장 종료 시각을 나란히 계산해 보여줍니다. 칠판에 암산할 필요가 없습니다.',
        },
        {
          icon: '📺',
          title: '프로젝터 고사장 모드',
          text: '클릭 한 번으로 전체 화면 전환. 체육관이나 강당 뒤편 30m 이상 떨어진 곳에서도 읽을 수 있는 큰 고정폭 숫자로 표시됩니다.',
        },
        {
          icon: '🛡️',
          title: '오차 없는 안정적 작동',
          text: '불안정한 틱 간격이 아닌 시스템 타임스탬프 차이로 시간을 계산합니다. 실수로 새로고침하거나 탭을 닫아도 진행 중인 시험이 즉시 복원됩니다.',
        },
        {
          icon: '🔔',
          title: '합성 알림음',
          text: '외부 오디오 파일 없이 Web Audio API로 합성합니다. 15분, 10분, 5분, 1분 전 경고 또는 무음 고사장용 화면 깜박임을 지원합니다.',
        },
        {
          icon: '🔗',
          title: '시험 공유 링크',
          text: '시험명, 시간, 읽기 시간, 안내문을 공유 URL에 담아 여러 고사실의 타이머를 동기화하세요.',
        },
      ],
    },

    seo: {
      ariaLabel: 'FreeExamTimer 소개',
      eyebrow: '완벽 가이드',
      title: '모든 시험을 위한 최고의 무료 시험 타이머',
      intro:
        '회원가입도 광고도 없는 무료 <strong>온라인 시험 타이머</strong>. 학교 교실부터 대규모 시험장까지, 전 세계 교사와 시험 감독관, 수험생이 믿고 사용합니다.',
      what: {
        title: 'FreeExamTimer란?',
        paragraphs: [
          'FreeExamTimer는 실제 시험 환경을 위해 설계된 전문가용 <strong>시험 타이머</strong>입니다. 일반 스톱워치나 주방용 카운트다운 타이머와 달리, 읽기 시간 설정부터 종료 종소리까지 시간제 시험을 감독하는 실제 흐름에 맞춰 모든 기능을 만들었습니다. 계정도, 광고도, 유료 기능도 없는 완전 무료 서비스입니다.',
          '집에서 혼자 공부하는 학생을 위한 <strong>디지털 시험 시계</strong>, 300명이 응시하는 체육관 벽면에 띄우는 <strong>전체 화면 시험 타이머</strong>, 또는 URL 하나로 여러 고사실이 공유하는 <strong>시험 카운트다운 타이머</strong>까지 — FreeExamTimer는 세 가지 상황을 모두 거뜬히 해결합니다. 수능 모의고사 연습용 <strong>수능 타이머</strong>나 <strong>공부 타이머</strong>로도 손색없습니다.',
        ],
      },
      core: {
        title: '무료 시험 타이머의 핵심 기능',
        items: [
          '<strong>읽기 시간이 있는 시험 타이머</strong> — 별도의 읽기 시간(보통 5분, 10분, 15분)을 설정할 수 있습니다. "읽기 시간" 표시와 함께 카운트다운한 뒤 알림음과 함께 답안 작성 시간으로 자동 전환되므로 수동 전환이 필요 없습니다.',
          '<strong>시간 연장 시험 타이머</strong> — 연장 시간(분)을 직접 입력하거나 <em>+25% 계산</em> 버튼을 눌러 표준 편의 제공 연장 시간을 자동으로 적용하세요. 표준 종료 시각과 연장(+25%) 종료 시각이 화면에 나란히 표시되어 칠판 계산 실수를 없애줍니다.',
          '<strong>전체 화면 시험 타이머</strong> — <kbd>F</kbd> 키나 전체 화면 버튼을 눌러 프로젝터 고사장 모드로 전환하세요. <strong>시험 시계</strong>가 30m 이상 떨어진 곳에서도 보이는 큰 고정폭 숫자로 확대되고, 현재 시각·시작 시각·종료 시각·연장 종료 시각이 함께 표시되어 수험생이 한눈에 확인할 수 있습니다.',
          '<strong>시험 카운트다운</strong> — 불안정한 틱 간격이 아닌 시스템 타임스탬프 차이를 기준으로 초 단위까지 정확합니다. 브라우저 탭이 제한되거나 기기가 절전 모드에 들어가도 시간이 밀리지 않습니다.',
          '<strong>수학 시험 타이머 프리셋</strong> — 15분, 30분, 45분, 1시간, 1시간 15분, 1시간 30분, 1시간 45분, 2시간, 2시간 30분, 3시간을 빠르게 선택하세요. <strong>수학 시험 타이머</strong>는 물론 표준 시간이 정해진 모든 시험에 적합합니다.',
          '<strong>알림음</strong> — 5가지 합성 사운드(하모닉 종, 고사장 징, 부드러운 차임, 디지털 비프음, 부드러운 버저)와 30분, 15분, 10분, 5분, 1분 전 경고를 원하는 대로 설정할 수 있습니다. 무음 고사장 모드에서는 화면 깜박임으로만 알립니다.',
          '<strong>국가 표준시 타이머 & 국제 시간대</strong> — 예약 시작 또는 현재 시각 화면에서 주요 국가의 공식 시간대를 바로 선택할 수 있습니다. 모든 시계(현재, 시작, 종료, +25% 연장)가 선택한 국가 표준시에 맞춰 바뀌므로 국제 시험(IB, AP, SAT, Cambridge, JEE, IELTS)과 대륙을 넘나드는 원격 감독에도 활용할 수 있습니다.',
          '<strong>시험 공유 링크</strong> — 시험명, 시간, 읽기 시간, 국가 표준시, 감독관 안내문을 URL에 담아 다른 고사실에서도 같은 설정으로 타이머를 바로 열 수 있습니다.',
        ],
      },
      competitive: {
        title: '각종 시험을 위한 온라인 시험 타이머',
        intro:
          'FreeExamTimer는 1초가 중요하고 정확성이 필수인 <strong>수능·자격시험 타이머</strong>로 쓰기 위해 만들어졌습니다. 세계 주요 시험에 맞춰 이렇게 활용할 수 있습니다:',
        items: [
          '<strong>SAT 시험 타이머</strong> — College Board의 모듈별 시간 구성을 그대로 재현하세요: Reading &amp; Writing 모듈 64분, Math 35분 등.',
          '<strong>GRE 시험 타이머</strong> — 섹션별 시간을 정확히 설정하세요: Verbal Reasoning 섹션당 41분, Quantitative Reasoning 섹션당 47분.',
          '<strong>ACT 시험 타이머</strong> — English(45분), Mathematics(60분), Reading(35분), Science(35분) — 프리셋을 쓰거나 정확한 시간을 입력하세요.',
          '<strong>IELTS 시험 타이머</strong> — Academic Writing Task 1(20분)과 Task 2(40분), General Training Writing, Reading(60분). Listening에는 읽기 시간을 함께 넣을 수도 있습니다.',
          '<strong>AP 시험 타이머</strong> — AP 시험은 과목마다 시간이 다르므로 서술형·객관식 섹션별로 시와 분을 정확히 설정하세요.',
          '<strong>IB 시험 타이머</strong> — Paper 1, Paper 2 시작 전 IB의 필수 5분 읽기 시간을 읽기 시간 기능으로 운영하세요.',
          '<strong>GCSE 시험 타이머</strong> — 45분(짧은 과목)부터 2시간 30분(긴 시험지)까지 지원하며, SEND 수험생을 위한 시간 연장도 완벽하게 지원합니다.',
          '<strong>JEE 시험 타이머</strong> — JEE Main과 JEE Advanced는 3시간 시험입니다. 실전과 같은 풀타임 모의고사 연습에 활용하세요.',
          '<strong>NEET 시험 타이머</strong> — 3시간 20분짜리 NEET-UG 시험을 30분·15분 전 자동 알림음과 함께 연습하세요.',
          '<strong>CAT 시험 타이머</strong> — CAT는 섹션(VARC, DILR, QA)당 40분입니다. 섹션별로 따로 설정하세요.',
          '<strong>CLAT 시험 타이머</strong> — 2시간 CLAT 시험을 읽기 시간과 안내문 표시와 함께 감독하는 모의고사로 재현하세요.',
          '<strong>UPSC 시험 타이머</strong> — Prelims는 과목당 2시간입니다. UPSC Mains 답안 작성 연습 시 공유 링크로 여러 자습실을 동기화하세요.',
          '<strong>Gaokao 시험 타이머</strong> — 중국 대학입학시험은 150분(어문)부터 40분(선택 과목)까지 다양합니다.',
          '<strong>ENEM 시험 타이머</strong> — 브라질 ENEM은 1일차 5시간 30분(언어 + 논술), 2일차 5시간(이공계)입니다. 시험일별로 타이머를 나눠 사용하세요.',
        ],
      },
      why: {
        title: '왜 전용 시험 시계를 써야 할까요?',
        intro:
          '일반 타이머에는 시험 환경에서 꼭 필요한 기능이 없습니다. FreeExamTimer 같은 전용 <strong>시험 시계</strong>는 다음을 제공합니다:',
        items: [
          '<strong>단계 구분</strong> — 읽기 시간과 답안 작성 시간이 하나의 카운트다운이 아닌 별도 단계로 나뉩니다.',
          '<strong>편의 제공 기준 준수</strong> — 25% 시간 연장 계산기는 전 세계 시험 주관 기관(예: 영국 JCQ, College Board, Cambridge Assessment)이 사용하는 기준에 맞춰 만들어졌습니다.',
          '<strong>고사장 화면 가독성</strong> — 고정폭 숫자로 자릿수 너비가 흔들리지 않아 수험생의 주의를 흩뜨리지 않으며, 마지막 5분에는 색상이 바뀌어 남은 시간을 알려줍니다.',
          '<strong>장애 복원력</strong> — 상태가 매초 localStorage에 저장됩니다. 실수로 새로고침하거나 순간 정전이 나도 진행 중인 시험이 자동으로 복원됩니다.',
          '<strong>화면 꺼짐 방지</strong> — 기기가 절전 모드로 들어가지 않도록 할 수 있어 장시간 시험 중 무인 프로젝터 운영에 필수적입니다.',
        ],
      },
      howTo: {
        title: '무료 온라인 시험 타이머 사용법',
        steps: [
          '<strong>시험명과 과목 입력</strong> — 시험지 이름(예: "수학 영역 1교시")을 입력하면 고사장 화면에 표시됩니다.',
          '<strong>답안 작성 시간 입력</strong> — 시, 분, 초를 입력하거나 빠른 설정 버튼을 누르세요.',
          '<strong>읽기 시간 추가</strong>(필요 시) — 5분, 10분, 15분 중 선택하면 타이머가 자동으로 전환합니다.',
          '<strong>시간 연장 설정</strong> — 분을 입력하거나 편의 제공 대상자를 위해 <em>+25% 계산</em>을 누르세요.',
          '<strong>예약 시작 시각 & 국가 표준시 입력</strong>(선택) — 예약 시작 또는 현재 시각에서 주요 국가의 표준시(예: 한국 KST, 인도 IST, 미국 동부, 영국 GMT/BST, 일본 JST, 유럽 CET)를 선택하세요. 해당 국가의 시계가 지정한 시각에 도달하면 시험이 자동으로 시작되며, 전 세계 수험생과 원격 감독관이 각자의 국가 시간으로 진행 중인 시계를 확인할 수 있습니다.',
          '<strong>전체 화면 전환</strong> — 수험생이 입실하기 전에 <kbd>F</kbd> 키나 전체 화면 버튼을 누르세요.',
          '<strong>시험 시작 누르기</strong> — 또는 예약 자동 시작을 기다리세요. 타이머가 시작되고 설정한 시점마다 알림음이 울리며, 시간이 끝나면 "필기구를 내려놓으세요" 안내창이 표시됩니다.',
        ],
      },
    },

    resetModal: {
      title: '현재 시험을 초기화할까요?',
      text: '타이머가 멈추고 대기 상태로 돌아갑니다. 경과 시간과 연장 시간이 모두 초기화됩니다.',
      confirm: '시험 초기화',
      cancel: '취소',
    },

    doneModal: {
      eyebrow: '시험 종료',
      title: '필기구를 내려놓으세요 — 시험 시간 종료',
      text: '모든 수험생은 즉시 답안 작성을 멈추고, 답안지를 회수할 때까지 조용히 자리에 앉아 있으십시오.',
      dismiss: '확인 후 닫기',
    },
  },

  // Strings rendered at runtime by src/scripts/exam-ui.ts
  client: {
    phases: {
      ready: '시작 준비 완료',
      readyReading: '준비 — 읽기 시간 후 답안 작성',
      reading: '읽기 시간',
      writing: '답안 작성 시간',
      finished: '시험 종료',
    },
    directives: {
      ready: '시험 정보를 확인한 후 시작을 누르세요',
      readyReading: '답안 작성 전 읽기 시간 {n}분',
      reading: '문제지만 읽으십시오. 답안지에 아무것도 쓰지 마십시오.',
      writing: '답안지를 펴고 시작하십시오.',
      finished: '필기구를 내려놓으십시오. 조용히 자리에 앉아 계십시오.',
    },
    paused: '{label} · 일시정지됨',
    pausedDirective: '타이머가 일시정지되었습니다. 계속하려면 재개를 누르세요.',
    examInProgress: '시험 진행 중',
    currentPreview: '현재: {time} {tz}',
    extendedBadge: '+{n}분 연장',
    resumeExam: '시험 재개',
    startAgain: '다시 시작',
    startExam: '시험 시작',
    resume: '재개',
    restart: '재시작',
    start: '시작',
    show: '보기',
    hide: '숨기기',
    timeUpTitle: '{title} — 시험 시간 종료',
    pensDown: '필기구를 내려놓으세요 — 시험 시간 종료',
    toastReadingOver: '읽기 시간이 끝났습니다. 답안 작성 시간이 시작되었습니다.',
    toastWarning: '경고: {time} 남음',
    unitMin: '{n}분',
    unitSec: '{n}초',
    toastAutoStart: '예약 자동 시작이 실행되었습니다',
    toastCannotStart: '시험을 시작할 수 없습니다',
    errFinished: '시험이 종료되었습니다. 다시 시작하려면 먼저 초기화하세요.',
    errNoWriting: '시작하기 전에 답안 작성 시간을 설정하세요.',
    toastReset: '시험이 초기화되었습니다',
    toastTimeZone: '국가 표준시: {tz}',
    toastCannotClear: '시험 진행 중에는 지울 수 없습니다',
    toastCleared: '패널 입력값을 지웠습니다',
    toastDuration: '시험 시간이 {n}분으로 설정되었습니다',
    toastReading: '읽기 시간: {n}분',
    toastExtra: '연장 시간: {n}분',
    toastCalc25: '25% 연장 시간 계산: +{n}분',
    toastRuleAdded: '안내문에 규칙이 추가되었습니다',
    toastAdded5Writing: '답안 작성 시간 5분이 추가되었습니다',
    toastAdded5: '연장 시간 5분이 추가되었습니다',
    toastAdded15Writing: '답안 작성 시간 15분이 추가되었습니다',
    toastAdded25: '+{n}분 (25% 시간 연장) 추가되었습니다',
    toastLinkCopied: '시험 설정 링크가 클립보드에 복사되었습니다!',
    toastUrlInBar: '주소창에 URL을 복사했습니다',
    toastTestSound: '샘플 소리 재생 중: {sound}',
  },

  howTo: {
    eyebrow: '가이드',
    title: '이 타이머로 시험을 진행하는 방법',
    intro:
      '이 사이트는 오직 시험 시계입니다. 스톱워치나 알람 없이, 고사장에서 시험 감독관에게 필요한 기능만 담았습니다.',
    steps: [
      {
        title: '1. 답안 작성 시간 설정 및 프리셋 사용',
        text: '시, 분, 초를 입력하거나 15분부터 3시간까지의 원터치 프리셋을 누르세요. 이 시간은 읽기 시간을 제외한 공식 답안 작성 시간입니다.',
      },
      {
        title: '2. 읽기 시간 카운트다운',
        text: '읽기 시간을 5분, 10분, 15분 중에서 빠르게 선택하세요. 타이머가 읽기 단계를 명확히 표시하고 수험생에게 필기 금지를 안내한 뒤, 알림음과 함께 답안 작성 시간으로 자동 전환합니다.',
      },
      {
        title: '3. 이중 종료 시계 & 25% 시간 연장',
        text: '"+25% 계산"을 누르면 편의 제공 대상자의 표준 연장 시간이 자동으로 계산됩니다. 화면에 표준 종료 시각과 +25% 연장 종료 시각이 동시에 표시되어 고사장에서 암산할 필요가 없습니다. 진행 중에도 +5분 또는 +15분을 바로 추가할 수 있습니다.',
      },
      {
        title: '4. 수험생 안내 & 규칙',
        text: '시험 정보를 입력하고 빠른 규칙 버튼(시험 중 정숙, 휴대폰 금지, 검은색 펜만 사용)을 눌러 시험 내내 깔끔한 안내문을 화면에 띄우세요.',
      },
      {
        title: '5. 프로젝터 고사장 모드 (F 키)',
        text: 'F 키나 전체 화면 아이콘을 누르면 30m 이상 떨어진 곳에서도 읽을 수 있는 고대비 대형 시계가 표시됩니다. 수험생의 주의를 흩뜨리지 않도록 컨트롤은 자동으로 흐려집니다.',
      },
      {
        title: '6. 알림음, 경고, 긴장 완화',
        text: 'Web Audio로 구현한 종, 징, 차임 소리로 경고 시점(30분, 15분, 10분, 5분, 1분 전)을 설정하세요. 설정에서 "마지막 5분 전까지 초 숨기기"를 켜면 긴 시험 동안 수험생이 덜 긴장할 수 있습니다.',
      },
    ],
    backupTitle: '예비 시계',
    backupText:
      '기기 하나에만 의존하지 마세요. 벽시계나 다른 타이머를 예비로 준비하세요. 이 페이지는 새로고침해도 시험이 이어지지만, 화면 꺼짐 방지 없이 컴퓨터가 절전 모드에 들어가거나 탭이 강제 종료되면 작동하지 않습니다.',
    cta: '시험 타이머 열기',
  },

  faq: {
    eyebrow: '도움말 & 자주 묻는 질문',
    title: '자주 묻는 질문',
    intro:
      '쪽지 시험, 교실 시험, 중요한 고사장 시험에서 FreeExamTimer를 사용할 때 자주 묻는 질문에 대한 답변을 확인하세요.',
    ctaTitle: '시험 카운트다운을 시작할 준비가 되셨나요?',
    ctaText: 'FreeExamTimer는 회원가입·광고 없이 100% 무료이며, 고사장 화면 송출을 완벽하게 지원합니다.',
    ctaButton: '시험 타이머 열기',
    items: [
      {
        question: '시험용으로 가장 좋은 카운트다운 앱은 무엇인가요?',
        answer:
          'FreeExamTimer는 실제 시험 환경과 교실을 위해 만들어진 최고의 시험 카운트다운 앱 중 하나입니다. 일반 타이머 앱과 달리 읽기 시간 후 답안 작성 시간 자동 전환, 편의 제공을 위한 25% 시간 연장 자동 계산, 이중 종료 시계, 잘 보이는 전체 화면 고사장 디스플레이, 맞춤 경고 알림음 등 시험 전용 기능을 갖추고 있으며, 광고나 회원가입 없이 100% 무료입니다.',
      },
      {
        question: '수학 시험 타이머는 어디서 찾을 수 있나요?',
        answer:
          'FreeExamTimer를 브라우저에서 바로 수학 시험 타이머로 사용할 수 있습니다. 일반적인 수학 시험 시간(45분, 1시간, 1시간 30분, 2시간, 3시간 등)을 원클릭 프리셋으로 설정할 수 있고, 초 단위까지 정밀하게 조정할 수 있으며, 고대비 고정폭 숫자로 자릿수가 흔들리지 않아 복잡한 문제를 풀 때도 집중할 수 있습니다.',
      },
      {
        question: 'PC에서 쓸 수 있는 가장 좋은 시험 카운트다운 앱은?',
        answer:
          'FreeExamTimer는 Windows PC, Mac, Chromebook에서 쓸 수 있는 최고의 웹 기반 시험 카운트다운 앱입니다. 최신 데스크톱 브라우저(Chrome, Edge, Firefox, Safari)에서 바로 실행되며, 프로젝터 고사장 모드(F 키로 전체 화면), 편리한 단축키(스페이스바로 시작/일시정지, R로 초기화, D로 다크 모드), 컴퓨터 절전을 막는 화면 꺼짐 방지, localStorage를 통한 자동 오프라인 복구 기능을 제공합니다.',
      },
      {
        question: '무료 카운트다운 타이머는 어떻게 만드나요?',
        answer:
          'FreeExamTimer에서 무료 카운트다운을 만드는 방법: (1) 시험명과 과목을 입력합니다. (2) 원하는 시간을 시, 분, 초로 입력하거나 선택합니다. (3) 필요하면 읽기 시간이나 시간 연장(+25%)을 추가합니다. (4) 설정에서 경고 알림음을 구성합니다. (5) "시험 시작"을 클릭하거나 스페이스바를 누르면 소프트웨어 설치나 계정 생성 없이 바로 카운트다운이 시작됩니다.',
      },
      {
        question: '타이머는 어떻게 설정하나요?',
        answer:
          'FreeExamTimer에서 타이머를 설정하는 방법: (1) 시, 분, 초 입력란에 시간을 입력하거나 빠른 설정(예: 15분, 30분, 1시간, 2시간)을 클릭합니다. (2) 필요하면 별도의 읽기 시간(5분, 10분, 15분)과 편의 제공을 위한 연장 시간을 선택합니다. (3) 특정 시각에 시험이 자동으로 시작되길 원하면 예약 시작 시각을 설정합니다. (4) "시험 시작"을 클릭하거나 스페이스바를 눌러 카운트다운을 시작합니다.',
      },
      {
        question: '가장 좋은 무료 타이머 앱은 무엇인가요?',
        answer:
          'FreeExamTimer는 학생, 교사, 시험 감독관을 위한 최고의 무료 타이머 앱으로 널리 인정받고 있습니다. 고사장용 전문 시험 도구를 100% 무료로 제공하며, 광고, 유료 기능, 추적, 회원가입이 전혀 없습니다. PC, 태블릿, 스마트폰 등 모든 플랫폼에서 작동합니다.',
      },
      {
        question: 'SAT, GCSE, IELTS용 카운트다운 타이머로 쓸 수 있나요?',
        answer:
          '네. FreeExamTimer는 SAT, GCSE, IELTS, ACT, GRE, AP, IB, JEE, NEET 등 주요 시험을 위해 설계되었습니다. 정확한 섹션 시간(예: SAT Reading & Writing 64분, IELTS Writing 또는 Reading 60분, GCSE 시험 1시간 45분)을 설정할 수 있으며, 읽기 시간과 공식 25% 시간 연장(편의 제공)도 완벽하게 지원합니다. 수능 모의고사 연습용 수능 타이머로도 활용할 수 있습니다.',
      },
      {
        question: '온라인 시험 타이머는 앱을 설치하지 않아도 작동하나요?',
        answer:
          '네. FreeExamTimer는 앱이나 확장 프로그램을 다운로드하거나 설치할 필요 없이 웹 브라우저에서 바로 실행됩니다. 인터넷 브라우저가 있는 모든 기기에서 작동하며, 인터넷 연결이 끊겨도 원활하게 계속 실행됩니다. 타이머 상태가 매초 localStorage에 저장되므로 페이지를 새로고침하거나 탭을 다시 열어도 진행 중인 시험이 즉시 복원됩니다.',
      },
      {
        question: '온라인 시험 타이머를 무료로 쓸 수 있나요?',
        answer:
          '네, FreeExamTimer는 구독료, 유료 결제, 숨은 비용 없이 100% 무료입니다. 읽기 시간, 25% 시간 연장 계산, 전체 화면 고사장 디스플레이, 알림음, 시험 공유 URL 등 모든 기능을 모든 교사, 시험 감독관, 수험생이 무료로 이용할 수 있습니다.',
      },
      {
        question: '휴대폰에서도 시험 타이머를 쓸 수 있나요?',
        answer:
          '네. FreeExamTimer는 iOS(iPhone/iPad)와 Android 모바일 브라우저에 최적화된 반응형 웹입니다. 시작, 일시정지, 초기화, 전체 화면, 설정을 쉽게 누를 수 있는 모바일 전용 하단 내비게이션 바를 제공하므로 어떤 스마트폰에서도 시험 카운트다운을 편리하게 관리하고 확인할 수 있습니다.',
      },
    ],
  },
};

export default ko;
