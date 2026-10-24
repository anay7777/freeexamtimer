import type { Dictionary } from './en';

const fr: Dictionary = {
  meta: {
    home: {
      title: "Minuteur d'examen gratuit – Compte à rebours | FreeExamTimer",
      description:
        "Minuteur d'examen gratuit en ligne pour enseignants, surveillants et élèves : temps de lecture, tiers-temps (+25 %), plein écran et alertes sonores. Sans pub, sans inscription.",
    },
    howTo: {
      title: "Mode d'emploi du minuteur d'examen – Guide surveillants | FreeExamTimer",
      description:
        "Guide pas à pas pour configurer FreeExamTimer : durées prédéfinies, temps de lecture, tiers-temps +25 %, affichage plein écran en salle, alertes sonores et raccourcis clavier.",
    },
    faq: {
      title: "FAQ – Minuteur d'examen en ligne gratuit | FreeExamTimer",
      description:
        "Questions fréquentes sur FreeExamTimer : chronomètre d'examen pour SAT, IELTS, maths, sur PC ou téléphone, temps de lecture, tiers-temps, sans téléchargement.",
    },
    keywords:
      "minuteur examen, minuteur d'examen gratuit, minuteur en ligne, minuteur examen en ligne, chronomètre examen, chronomètre en ligne, compte à rebours examen, compte à rebours en ligne, horloge examen, horloge examen plein écran, minuteur examen tiers-temps, minuteur avec temps de lecture, minuteur numérique, minuteur concours, minuteur examen maths, minuteur bac, minuteur brevet, minuteur SAT, minuteur GRE, minuteur IELTS, minuteur DELF, minuteur TOEIC, minuteur GCSE, minuteur IB, minuteur JEE, minuteur NEET, minuteur surveillant, chrono salle d'examen, horloge de classe, aménagements d'examen",
    ogImageAlt: "FreeExamTimer — Minuteur et compte à rebours d'examen en ligne gratuit",
    schemaDescription:
      "Minuteur d'examen en ligne gratuit pour enseignants, surveillants et élèves. Temps de lecture, temps de composition, tiers-temps (+25 % pour les aménagements d'examen), affichage plein écran en salle, alertes sonores et liens d'examen partageables.",
    schemaFeatures: [
      "Compte à rebours d'examen",
      'Phase de temps de lecture avec enchaînement automatique',
      "Tiers-temps / aménagements d'examen (+25 %)",
      'Affichage plein écran pour vidéoprojecteur en salle',
      'Alertes sonores et avertissements',
      "Liens de configuration d'examen partageables",
      "Minuteur d'examen numérique avec mode sombre",
      'Compatible SAT, GRE, IELTS, JEE, NEET, GCSE, IB, CAT, CLAT, UPSC, ACT, Gaokao, ENEM, AP',
    ],
  },

  nav: {
    timer: 'Minuteur',
    howTo: "Mode d'emploi",
    faq: 'FAQ',
    about: 'À propos',
    contact: 'Contact',
    fullScreen: 'Plein écran',
    fullScreenTitle: 'Plein écran (F)',
    toggleTheme: 'Changer de thème',
    toggleThemeTitle: 'Changer de thème (D)',
    settings: 'Paramètres',
    language: 'Langue',
  },

  footer: {
    tagline:
      "Une horloge d'examen prête pour la salle, conçue pour les enseignants, les surveillants et les élèves. Temps de lecture, tiers-temps +25 % et mode vidéoprojecteur — 100 % gratuit, sans publicité.",
    badges: 'Zéro pistage • Sans pub • Fonctionne hors ligne',
    timerGuides: 'Minuteur et guides',
    examTimer: "Minuteur d'examen",
    howToUse: "Mode d'emploi",
    faqHelp: 'FAQ et aide',
    aboutContact: 'À propos et contact',
    aboutUs: 'À propos',
    contactUs: 'Nous contacter',
    hallProjections: 'Projection en salle',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    terms: "Conditions d'utilisation",
    languages: 'Langues',
    rights: '© 2026 FreeExamTimer. Tous droits réservés.',
    shortcuts:
      'Raccourcis : <kbd>Space</kbd> Démarrer/Pause · <kbd>R</kbd> Réinitialiser · <kbd>F</kbd> Plein écran · <kbd>D</kbd> Thème',
    themeTitle: 'Basculer entre mode sombre et clair',
    theme: 'Thème :',
    dark: 'Sombre',
    light: 'Clair',
    top: 'Haut',
    topTitle: 'Remonter en haut de la page',
    topAria: 'Retour en haut',
  },

  app: {
    regions: {
      System: 'Système',
      'Asia & Pacific': 'Asie et Pacifique',
      Americas: 'Amériques',
      Europe: 'Europe',
      'Middle East & Africa': 'Moyen-Orient et Afrique',
    },
    sounds: {
      bell: "Cloche d'examen harmonique",
      gong: 'Gong de salle (résonant)',
      chime: 'Carillon doux (3 notes)',
      beep: 'Bip numérique',
      buzzer: 'Buzzer doux',
    },

    settings: {
      ariaLabel: 'Panneau des paramètres',
      title: "Paramètres du minuteur d'examen",
      close: 'Fermer les paramètres',
      displayClock: 'Affichage et horloge',
      countryTime: 'Heure officielle du pays',
      countryTimeHint: "Les horloges en direct et les départs programmés s'affichent à l'heure de ce pays.",
      darkMode: 'Mode sombre',
      alwaysSeconds: 'Toujours afficher les secondes',
      hideSecondsTitle:
        "Masquer les secondes pendant la majeure partie de l'épreuve et ne les afficher que pendant les 5 dernières minutes pour limiter le stress des candidats",
      hideSeconds: "Masquer les secondes jusqu'aux 5 dernières min",
      calm: '(apaisant)',
      hour12: 'Format 12 heures (AM/PM)',
      showExtra: "Afficher l'heure de fin avec tiers-temps (+25 %)",
      flash: 'Flash visuel à la fin',
      wakeLock: "Garder l'écran allumé (pas de veille)",
      timerSize: 'Taille du minuteur',
      timerSizeAria: "Taille d'affichage du minuteur",
      soundChimes: 'Son et alertes',
      silent: 'Salle silencieuse (alertes visuelles uniquement)',
      chimeSound: "Son d'alerte",
      volume: 'Volume',
      testSound: 'Écouter un son test',
      warnings: 'Avertissements',
      warningsHint: 'Sonner lorsque le temps de composition restant atteint :',
      warnMinutes: 'Plus que {n} minutes',
      warnOneMinute: 'Plus que 1 minute',
      shortcuts: 'Raccourcis clavier',
      scStartPause: 'Démarrer / Pause',
      scReset: "Réinitialiser l'examen",
      scFullScreen: 'Affichage plein écran en salle',
      scTheme: 'Activer/désactiver le thème sombre',
      scSettings: 'Ouvrir / fermer les paramètres',
      scExit: 'Quitter / fermer les fenêtres',
    },

    fullscreen: {
      ariaLabel: "Projection en salle d'examen",
      ready: 'Prêt',
      extended: 'Prolongé',
      currentTime: 'Heure actuelle',
      startTime: 'Heure de début',
      finishTime: 'Heure de fin',
      extraFinish: 'Fin tiers-temps +25 %',
      localTime: 'Heure locale',
      switchTzTitle: "Changer l'heure officielle du pays en mode projection",
      exit: 'Quitter (Échap)',
      exitAria: 'Quitter le plein écran',
    },

    hero: {
      badge: "Compte à rebours officiel d'examen",
      title: "Compte à rebours d'examen et affichage en salle",
      intro:
        "Un minuteur d'examen dédié aux enseignants et aux surveillants. Enchaînement automatique après le temps de lecture, horloges de tiers-temps +25 % et mode plein écran pour vidéoprojecteur.",
    },

    display: {
      readyToStart: 'Prêt à démarrer',
      directive: "Vérifiez la durée et cliquez sur Démarrer l'examen",
      current: 'Actuelle',
      start: 'Début',
      finish: 'Fin',
      extraFinish: 'Fin +25 %',
      countryTimer: 'Heure officielle du pays :',
      localDevice: "Locale (heure de l'appareil)",
      chooseTz: "Choisir l'heure officielle du pays",
      selectTzTitle: "Sélectionnez l'heure officielle d'un pays pour suivre les horloges de l'examen en cours",
      hallNotice: 'Consignes de la salle :',
    },

    controls: {
      startExam: "Démarrer l'examen",
      pause: 'Pause',
      reset: 'Réinitialiser',
      add5: '+5 min',
      add5Title: 'Ajouter 5 minutes de composition',
      add15: '+15 min',
      add15Title: 'Ajouter 15 minutes de composition',
      add25: 'Tiers-temps +25 %',
      add25Title: "Ajouter le temps supplémentaire standard de 25 % (aménagements d'examen)",
      fullScreen: 'Plein écran',
      fullScreenTitle: 'Projeter en plein écran (F)',
      share: 'Partager le lien',
      shareTitle: "Copier un lien partageable avec la configuration actuelle de l'examen",
      mobileAria: "Commandes mobiles de l'examen",
      mobileAdd5Title: 'Ajouter 5 min',
    },

    setup: {
      heading: "Configuration de l'examen",
      editable: '(modifiable à l’arrêt)',
      clear: 'Effacer',
      clearTitle: 'Effacer tous les champs du panneau',
      hide: 'Masquer',
      titleLabel: "Intitulé de l'épreuve et matière",
      titlePlaceholder: 'ex. Mathématiques – Épreuve 1 (spécialité)',
      centreLabel: "Centre / numéro de salle",
      optional: '(facultatif)',
      centrePlaceholder: 'ex. Centre 54321 · Gymnase, table A',
      durationLabel: 'Durée de composition (heures : minutes : secondes)',
      durationHint: 'Hors temps de lecture',
      hours: 'Heures',
      minutes: 'Minutes',
      seconds: 'Secondes',
      presets: 'Durées rapides :',
      presetLabels: {
        '15': '15 min',
        '30': '30 min',
        '45': '45 min',
        '60': '1 h',
        '75': '1 h 15',
        '90': '1 h 30',
        '105': '1 h 45',
        '120': '2 h',
        '150': '2 h 30',
        '180': '3 h',
      },
      minLabel: '{n} min',
      none: 'Aucun',
      readingLabel: 'Temps de lecture (minutes)',
      readingHint: 'Bascule automatiquement sur le temps de composition une fois terminé.',
      extraLabel: "Tiers-temps / aménagements d'examen (minutes)",
      calc25: 'Calcul +25 %',
      calc25Title: 'Calculer exactement 25 % de temps de composition supplémentaire',
      extraHint: "Affiche l'heure de fin officielle avec temps supplémentaire.",
      autostartLabel: 'Départ automatique programmé',
      autostartHint: "Démarre automatiquement lorsque l'horloge atteint cette heure précise.",
      autostartTzLabel: 'Heure du pays pour le départ programmé :',
      autostartTzHint:
        "Le compte à rebours démarre automatiquement lorsque l'horloge du pays sélectionné atteint l'heure de départ programmée.",
      noticeLabel: "Consignes du surveillant / règles affichées à l'écran",
      noticePlaceholder:
        'ex. Silence absolu. Stylo à bille noir uniquement. Téléphones portables et montres connectées interdits.',
      rulesHint: "Ajouter des règles d'examen courantes aux consignes :",
      rules: [
        { label: '+ Silence absolu', text: "Silence absolu dans la salle d'examen." },
        {
          label: '+ Ni téléphone ni montre connectée',
          text: 'Les téléphones portables et montres connectées doivent être éteints et rangés dans les sacs.',
        },
        { label: '+ Stylo noir uniquement', text: "Encre noire ou stylo à bille noir uniquement. Correcteur blanc interdit." },
        { label: '+ Vérifier le sujet', text: "Vérifiez que vous avez bien le bon sujet d'examen." },
        { label: "+ Lever la main pour de l'aide", text: "Levez la main si vous avez besoin de copies supplémentaires ou d'aide." },
      ],
    },

    features: {
      eyebrow: "Conçu pour les vraies salles d'examen",
      title: "Tout ce dont un surveillant a besoin — et rien de superflu",
      items: [
        {
          icon: '📘',
          title: 'Lecture puis composition',
          text: "Le temps de lecture facultatif s'écoule d'abord avec des consignes claires, puis bascule automatiquement sur le temps de composition avec un signal sonore.",
        },
        {
          icon: '⏱️',
          title: 'Deux heures de fin',
          text: "Calcule côte à côte l'heure de fin standard et l'heure de fin avec tiers-temps +25 %. Plus besoin de calcul mental au tableau.",
        },
        {
          icon: '📺',
          title: 'Mode vidéoprojecteur',
          text: "Plein écran en un clic avec des chiffres géants, lisibles à plus de 30 mètres au fond du gymnase ou de la salle polyvalente.",
        },
        {
          icon: '🛡️',
          title: 'Précis et résistant aux plantages',
          text: "S'appuie sur l'horloge système et non sur des intervalles fragiles. Une actualisation ou une fermeture d'onglet accidentelle restaure instantanément l'examen en cours.",
        },
        {
          icon: '🔔',
          title: 'Alertes synthétisées',
          text: "Sons générés via la Web Audio API, sans fichier audio externe. Avertissements à 15, 10, 5 et 1 min, ou flash visuel en salle silencieuse.",
        },
        {
          icon: '🔗',
          title: "Liens d'examen partageables",
          text: "Intégrez l'intitulé de l'épreuve, la durée, le temps de lecture et les consignes dans une URL partageable pour synchroniser plusieurs salles d'examen.",
        },
      ],
    },

    seo: {
      ariaLabel: 'À propos de FreeExamTimer',
      eyebrow: 'Guide complet',
      title: "Le meilleur minuteur d'examen gratuit pour toutes vos épreuves",
      intro:
        "Un <strong>minuteur d'examen en ligne</strong> gratuit, sans inscription et sans publicité, adopté par les enseignants, les surveillants et les élèves du monde entier — de la salle de classe aux salles de concours.",
      what: {
        title: "Qu'est-ce que FreeExamTimer ?",
        paragraphs: [
          "FreeExamTimer est un <strong>minuteur d'examen</strong> de qualité professionnelle, conçu pour les conditions réelles d'examen. Contrairement à un chronomètre classique ou à un minuteur de cuisine, chaque fonction a été pensée pour le déroulement d'une épreuve surveillée — du temps de lecture jusqu'à la sonnerie finale. Il est entièrement gratuit : aucun compte requis, aucune publicité, aucune fonction payante.",
          "Que vous ayez besoin d'un <strong>chronomètre d'examen numérique</strong> pour un seul élève à la maison, d'une <strong>horloge d'examen plein écran</strong> projetée sur le mur d'un gymnase accueillant 300 candidats, ou d'un <strong>compte à rebours d'examen</strong> configurable et partagé entre plusieurs salles via une simple URL, FreeExamTimer gère les trois situations sans effort.",
        ],
      },
      core: {
        title: "Fonctionnalités clés de ce minuteur d'examen gratuit",
        items: [
          "<strong>Minuteur d'examen avec temps de lecture</strong> — Définissez une phase de lecture distincte (5, 10 ou 15 minutes le plus souvent). Le minuteur la décompte avec la mention « Temps de lecture », puis bascule automatiquement sur le temps de composition avec un signal sonore. Aucune manipulation nécessaire.",
          "<strong>Minuteur d'examen avec tiers-temps</strong> — Saisissez le nombre de minutes supplémentaires ou cliquez sur le bouton <em>Calcul +25 %</em> pour appliquer automatiquement le temps majoré prévu par les aménagements d'examen. L'heure de fin standard et l'heure de fin prolongée (+25 %) s'affichent côte à côte à l'écran — fini les erreurs de calcul au tableau.",
          "<strong>Minuteur d'examen plein écran</strong> — Appuyez sur <kbd>F</kbd> ou sur le bouton Plein écran pour passer en mode vidéoprojecteur. L'<strong>horloge d'examen</strong> affiche des chiffres géants lisibles à plus de 30 mètres, accompagnés de l'heure actuelle, de l'heure de début, de l'heure de fin et de l'heure de fin prolongée — tout ce que les candidats doivent voir d'un coup d'œil.",
          "<strong>Compte à rebours d'examen</strong> — Précis à la seconde, calculé à partir de l'horloge système plutôt que d'intervalles fragiles. Le minuteur ne dérive pas, même si l'onglet est ralenti par le navigateur ou si l'appareil passe en mode économie d'énergie.",
          "<strong>Durées prédéfinies pour les maths</strong> — Sélection rapide : 15 min, 30 min, 45 min, 1 h, 1 h 15, 1 h 30, 1 h 45, 2 h, 2 h 30 et 3 h. Idéal comme <strong>minuteur d'examen de maths</strong> ou pour toute épreuve de durée standard.",
          "<strong>Alertes sonores</strong> — Cinq sons synthétisés (cloche harmonique, gong de salle, carillon doux, bip numérique, buzzer doux) avec des avertissements réglables à 30, 15, 10, 5 et 1 minute de la fin. Le mode salle silencieuse n'affiche qu'un flash visuel.",
          "<strong>Heure officielle par pays et fuseaux horaires internationaux</strong> — Choisissez le fuseau horaire officiel de n'importe quel grand pays directement sous Départ programmé ou dans l'affichage Heure actuelle. Les horloges (actuelle, début, fin et fin prolongée +25 %) s'adaptent à l'heure du pays sélectionné, ce qui facilite les examens internationaux (IB, AP, SAT, Cambridge, JEE, IELTS) et la surveillance à distance entre continents.",
          "<strong>Liens d'examen partageables</strong> — Intégrez l'intitulé de l'examen, la durée, le temps de lecture, le fuseau horaire et les consignes du surveillant dans une URL qui ouvre le minuteur déjà configuré dans n'importe quelle autre salle.",
        ],
      },
      competitive: {
        title: "Minuteur d'examen en ligne pour les concours",
        intro:
          "FreeExamTimer est pensé comme un véritable <strong>minuteur de concours</strong> — là où chaque seconde compte et où la précision est non négociable. Voici comment il s'adapte aux examens à fort enjeu les plus passés au monde :",
        items: [
          "<strong>Minuteur SAT</strong> — Reproduisez le découpage par modules du College Board : 64 minutes pour le module 1 de Reading &amp; Writing, 35 minutes pour Math, etc.",
          "<strong>Minuteur GRE</strong> — Réglez la durée exacte de chaque section : 41 minutes par section de Verbal Reasoning, 47 minutes par section de Quantitative Reasoning.",
          "<strong>Minuteur ACT</strong> — English (45 min), Mathematics (60 min), Reading (35 min), Science (35 min) — utilisez les durées prédéfinies ou saisissez des durées exactes.",
          "<strong>Minuteur IELTS</strong> — Academic Writing Task 1 (20 min) et Task 2 (40 min), ou General Training Writing ; Reading (60 min). Un temps de lecture peut aussi être ajouté pour le Listening.",
          "<strong>Minuteur AP</strong> — Les épreuves AP varient selon la matière ; réglez précisément heures et minutes pour chaque section à réponse libre ou QCM.",
          "<strong>Minuteur IB</strong> — Utilisez la fonction temps de lecture pour la période de lecture obligatoire de 5 minutes de l'IB avant les épreuves Paper 1 ou Paper 2.",
          "<strong>Minuteur GCSE</strong> — Gère des durées de 45 minutes (épreuves courtes) à 2 h 30 (épreuves longues), avec prise en charge complète du temps supplémentaire pour les candidats SEND.",
          "<strong>Minuteur JEE</strong> — Les épreuves JEE Main et JEE Advanced durent 3 heures ; utilisez le minuteur de concours pour des entraînements en conditions réelles.",
          "<strong>Minuteur NEET</strong> — Entraînez-vous sur les épreuves NEET-UG de 3 h 20 avec des alertes automatiques à 30 et 15 minutes de la fin.",
          "<strong>Minuteur CAT</strong> — Le CAT compte 40 minutes par section (VARC, DILR, QA) ; configurez chaque section séparément.",
          "<strong>Minuteur CLAT</strong> — Simulez l'épreuve CLAT de 2 heures avec temps de lecture et consignes affichées pour des examens blancs surveillés.",
          "<strong>Minuteur UPSC</strong> — Les épreuves des Prelims durent 2 heures chacune ; pour l'entraînement à la rédaction des Mains, le lien partageable permet de synchroniser plusieurs salles d'étude.",
          "<strong>Minuteur Gaokao</strong> — Les épreuves de l'examen d'entrée à l'université chinois vont de 150 minutes (Langue &amp; littérature) à 40 minutes (matières optionnelles).",
          "<strong>Minuteur ENEM</strong> — L'ENEM brésilien dure 5 h 30 le 1er jour (Langues + Rédaction) et 5 heures le 2e jour (sciences et mathématiques). Utilisez plusieurs minuteurs selon les jours de révision.",
        ],
      },
      why: {
        title: "Pourquoi choisir une horloge d'examen dédiée ?",
        intro:
          "Les minuteurs généralistes n'offrent pas les fonctions indispensables en situation d'examen. Une <strong>horloge d'examen</strong> dédiée comme FreeExamTimer propose :",
        items: [
          "<strong>Des phases distinctes</strong> — Le temps de lecture et le temps de composition sont deux phases séparées, et non un seul compte à rebours indifférencié.",
          "<strong>Le respect des aménagements d'examen</strong> — Le calculateur de tiers-temps +25 % suit la norme appliquée par les organismes certificateurs du monde entier (par ex. JCQ au Royaume-Uni, College Board, Cambridge Assessment).",
          "<strong>Une lisibilité optimale en salle</strong> — Les chiffres à chasse fixe évitent les sautillements qui distraient les candidats ; les couleurs changent pendant les cinq dernières minutes pour signaler l'urgence.",
          "<strong>Une résistance aux plantages</strong> — L'état est enregistré dans le localStorage chaque seconde. Une actualisation accidentelle ou une micro-coupure de courant restaure automatiquement l'examen en cours.",
          "<strong>Le maintien de l'écran allumé</strong> — Empêche en option la mise en veille de l'appareil, indispensable pour les vidéoprojecteurs laissés sans surveillance pendant les longues épreuves.",
        ],
      },
      howTo: {
        title: "Comment utiliser ce minuteur d'examen en ligne gratuit",
        steps: [
          "<strong>Indiquez l'intitulé et la matière de l'épreuve</strong> — Saisissez le nom de l'épreuve (par ex. « Mathématiques – Épreuve 1 ») pour qu'il apparaisse sur l'affichage en salle.",
          "<strong>Saisissez la durée de composition</strong> — Choisissez les heures, minutes et secondes, ou cliquez sur une durée prédéfinie.",
          "<strong>Ajoutez un temps de lecture</strong> (si nécessaire) — Sélectionnez 5, 10 ou 15 minutes ; le minuteur gère automatiquement l'enchaînement.",
          "<strong>Configurez le tiers-temps</strong> — Saisissez les minutes ou cliquez sur <em>Calcul +25 %</em> pour les aménagements d'examen.",
          "<strong>Indiquez une heure de départ programmée et l'heure du pays</strong> (facultatif) — Choisissez l'heure officielle de n'importe quel grand pays (par ex. France CET, Inde IST, États-Unis Eastern, Royaume-Uni GMT/BST, Japon JST) sous Départ programmé ou Heure actuelle. L'examen démarre automatiquement lorsque l'horloge de ce pays atteint l'heure indiquée, et les candidats comme les surveillants à distance peuvent suivre les horloges dans leur propre fuseau horaire.",
          "<strong>Passez en plein écran</strong> — Appuyez sur <kbd>F</kbd> ou sur le bouton Plein écran avant l'entrée des candidats dans la salle.",
          "<strong>Cliquez sur Démarrer l'examen</strong> — Ou attendez le départ automatique. Le compte à rebours commence, les alertes retentissent aux seuils configurés et une fenêtre « POSEZ VOS STYLOS » s'affiche à la fin du temps imparti.",
        ],
      },
    },

    resetModal: {
      title: "Réinitialiser l'examen en cours ?",
      text: "Le minuteur va s'arrêter et revenir à l'état initial. Le temps écoulé et le temps supplémentaire seront remis à zéro.",
      confirm: "Réinitialiser l'examen",
      cancel: 'Annuler',
    },

    doneModal: {
      eyebrow: 'Examen terminé',
      title: 'POSEZ VOS STYLOS — LE TEMPS EST ÉCOULÉ',
      text: "Tous les candidats doivent cesser d'écrire immédiatement et rester assis en silence jusqu'au ramassage des copies.",
      dismiss: 'Compris, fermer',
    },
  },

  // Strings rendered at runtime by src/scripts/exam-ui.ts
  client: {
    phases: {
      ready: 'Prêt à démarrer',
      readyReading: 'Prêt — lecture puis composition',
      reading: 'Temps de lecture',
      writing: 'Temps de composition',
      finished: 'Examen terminé',
    },
    directives: {
      ready: "Vérifiez les informations de l'examen et cliquez sur Démarrer",
      readyReading: '{n} min de lecture avant le début de la composition',
      reading: "Lisez uniquement le sujet. N'écrivez pas sur votre copie.",
      writing: 'Vous pouvez ouvrir votre copie et commencer.',
      finished: 'Posez vos stylos. Restez assis en silence complet.',
    },
    paused: '{label} · En pause',
    pausedDirective: 'Le minuteur est en pause. Cliquez sur Reprendre pour continuer.',
    examInProgress: 'Examen en cours',
    currentPreview: 'Actuelle : {time} {tz}',
    extendedBadge: 'Prolongé +{n} min',
    resumeExam: "Reprendre l'examen",
    startAgain: 'Recommencer',
    startExam: "Démarrer l'examen",
    resume: 'Reprendre',
    restart: 'Redémarrer',
    start: 'Démarrer',
    show: 'Afficher',
    hide: 'Masquer',
    timeUpTitle: '{title} — LE TEMPS EST ÉCOULÉ',
    pensDown: 'POSEZ VOS STYLOS — LE TEMPS EST ÉCOULÉ',
    toastReadingOver: 'Le temps de lecture est terminé. La composition commence.',
    toastWarning: 'Attention : plus que {time}',
    unitMin: '{n} min',
    unitSec: '{n} s',
    toastAutoStart: 'Départ automatique programmé déclenché',
    toastCannotStart: "Impossible de démarrer l'examen",
    errFinished: "L'examen est terminé. Réinitialisez-le avant de recommencer.",
    errNoWriting: 'Veuillez définir le temps de composition avant de démarrer.',
    toastReset: 'Examen réinitialisé',
    toastTimeZone: 'Heure officielle du pays : {tz}',
    toastCannotClear: "Impossible d'effacer pendant l'examen",
    toastCleared: 'Champs du panneau effacés',
    toastDuration: 'Durée réglée sur {n} minutes',
    toastReading: 'Temps de lecture : {n} min',
    toastExtra: 'Temps supplémentaire : {n} min',
    toastCalc25: 'Tiers-temps calculé (25 %) : +{n} minutes',
    toastRuleAdded: 'Règle ajoutée aux consignes',
    toastAdded5Writing: '+5 minutes de composition ajoutées',
    toastAdded5: '+5 minutes de temps supplémentaire ajoutées',
    toastAdded15Writing: '+15 minutes de composition ajoutées',
    toastAdded25: '+{n} min (tiers-temps 25 %) ajoutées',
    toastLinkCopied: "Lien de configuration de l'examen copié dans le presse-papiers !",
    toastUrlInBar: "URL copiée dans la barre d'adresse",
    toastTestSound: "Lecture du son d'exemple : {sound}",
  },

  howTo: {
    eyebrow: 'Guide',
    title: 'Comment faire passer un examen avec ce minuteur',
    intro:
      "Ce site est uniquement une horloge d'examen. Pas de chronomètre ni de réveil — seulement les commandes dont un surveillant a besoin en salle.",
    steps: [
      {
        title: '1. Réglez le temps de composition et utilisez les durées prédéfinies',
        text: "Saisissez les heures, minutes et secondes, ou touchez une durée prédéfinie de 15 min à 3 heures. Il s'agit du temps de composition officiel, hors temps de lecture.",
      },
      {
        title: '2. Compte à rebours du temps de lecture',
        text: "Sélectionnez rapidement 5, 10 ou 15 minutes de lecture. Le minuteur identifie clairement la phase de lecture et rappelle aux candidats de ne pas écrire, avant de basculer automatiquement sur le temps de composition avec un signal sonore.",
      },
      {
        title: '3. Deux heures de fin et tiers-temps de 25 %',
        text: "Touchez « Calcul +25 % » pour calculer automatiquement le temps supplémentaire standard des aménagements d'examen. L'horloge affiche simultanément l'heure de fin standard et l'heure de fin avec tiers-temps, sans calcul mental en salle d'examen. Vous pouvez aussi ajouter +5 ou +15 minutes à tout moment.",
      },
      {
        title: '4. Consignes et règles pour les candidats',
        text: "Ajoutez les détails de l'épreuve et cliquez sur les règles rapides (Silence absolu, Pas de téléphone, Stylo noir uniquement) pour projeter des consignes claires pendant toute la durée de l'examen.",
      },
      {
        title: '5. Mode vidéoprojecteur (touche F)',
        text: "Appuyez sur F ou sur l'icône plein écran pour projeter une horloge géante à fort contraste, lisible à plus de 30 mètres. Les commandes s'estompent automatiquement pour ne pas distraire les candidats.",
      },
      {
        title: '6. Alertes, avertissements et gestion du stress',
        text: "Configurez les avertissements (30, 15, 10, 5 et 1 min) avec des cloches, gongs ou carillons générés par Web Audio. Activez « Masquer les secondes jusqu'aux 5 dernières min » dans les Paramètres pour apaiser les candidats anxieux lors des longues épreuves.",
      },
    ],
    backupTitle: 'Horloge de secours',
    backupText:
      "Ne comptez pas sur un seul appareil. Gardez une horloge murale ou un second minuteur en secours. Cette page reprend l'examen si vous l'actualisez, mais elle ne peut pas fonctionner si l'ordinateur se met en veille sans maintien de l'écran allumé, ou si l'onglet est fermé par le navigateur.",
    cta: "Ouvrir le minuteur d'examen",
  },

  faq: {
    eyebrow: 'Aide et FAQ',
    title: 'Questions fréquentes',
    intro:
      "Trouvez des réponses rapides aux questions courantes sur l'utilisation de FreeExamTimer pour les contrôles, les examens en classe et les salles de concours.",
    ctaTitle: "Prêt à lancer votre compte à rebours d'examen ?",
    ctaText: 'FreeExamTimer est 100 % gratuit, sans inscription, sans publicité, avec prise en charge complète de la projection en salle.',
    ctaButton: "Ouvrir le minuteur d'examen",
    items: [
      {
        question: 'Quelle est la meilleure application de compte à rebours pour les examens ?',
        answer:
          "FreeExamTimer fait partie des meilleures applications de compte à rebours pour les examens, car il est conçu pour les conditions réelles d'examen et la salle de classe. Contrairement aux minuteurs généralistes, il propose des fonctions dédiées : temps de lecture séparé avec bascule automatique sur le temps de composition, calcul automatique du tiers-temps +25 % pour les aménagements d'examen, double affichage de l'heure de fin, projection plein écran très lisible en salle et alertes sonores personnalisables — le tout 100 % gratuit, sans publicité ni inscription.",
      },
      {
        question: "Où trouver un minuteur pour un examen de maths ?",
        answer:
          "Vous pouvez utiliser FreeExamTimer directement dans votre navigateur comme minuteur d'examen de maths. Il propose des durées prédéfinies en un clic pour les épreuves de mathématiques courantes (45 min, 1 h, 1 h 30, 2 h et 3 h), une précision à la seconde et des chiffres à fort contraste et à chasse fixe qui ne sautillent pas pendant la résolution d'équations ou d'exercices chronométrés.",
      },
      {
        question: "Quelle est la meilleure application de compte à rebours d'examen sur PC ?",
        answer:
          "FreeExamTimer est la meilleure application web de compte à rebours d'examen pour PC Windows, Mac et Chromebook. Il fonctionne dans tout navigateur récent (Chrome, Edge, Firefox, Safari) et propose un mode d'affichage pour vidéoprojecteur (touche F pour le plein écran), des raccourcis clavier pratiques (Espace pour démarrer/mettre en pause, R pour réinitialiser, D pour le mode sombre), le maintien de l'écran allumé pour empêcher la mise en veille et une récupération automatique hors ligne en cas de plantage grâce au localStorage.",
      },
      {
        question: 'Comment créer un compte à rebours gratuit ?',
        answer:
          "Pour créer un compte à rebours gratuit avec FreeExamTimer : (1) saisissez l'intitulé et la matière de l'examen ; (2) saisissez ou sélectionnez la durée souhaitée en heures, minutes et secondes ; (3) ajoutez si besoin un temps de lecture ou un tiers-temps (+25 %) ; (4) configurez les alertes sonores dans les Paramètres ; (5) cliquez sur « Démarrer l'examen » ou appuyez sur la barre d'espace pour lancer immédiatement votre compte à rebours, sans logiciel à télécharger ni compte à créer.",
      },
      {
        question: 'Comment régler un minuteur ?',
        answer:
          "Pour régler un minuteur sur FreeExamTimer : (1) saisissez la durée dans les champs heures, minutes et secondes, ou cliquez sur une durée prédéfinie (par ex. 15 min, 30 min, 1 h, 2 h) ; (2) choisissez si besoin un temps de lecture séparé (5, 10 ou 15 minutes) et un temps supplémentaire pour les aménagements d'examen ; (3) programmez éventuellement une heure de départ pour que l'examen démarre automatiquement à une heure précise ; (4) cliquez sur « Démarrer l'examen » ou appuyez sur la barre d'espace pour lancer le compte à rebours.",
      },
      {
        question: "Quelle est la meilleure application de minuteur gratuite ?",
        answer:
          "FreeExamTimer est largement reconnu comme l'une des meilleures applications de minuteur gratuites pour les élèves, les enseignants et les surveillants d'examen. Il offre des outils d'examen professionnels 100 % gratuits, sans publicité, sans fonction payante, sans pistage et sans inscription. Il fonctionne sur PC, tablette et smartphone.",
      },
      {
        question: 'Puis-je utiliser un compte à rebours pour le SAT, le GCSE ou l’IELTS ?',
        answer:
          "Oui. FreeExamTimer est conçu pour les grands examens et concours standardisés, dont le SAT, le GCSE, l'IELTS, l'ACT, le GRE, l'AP, l'IB, le JEE et le NEET. Vous pouvez configurer la durée exacte de chaque section (par ex. 64 minutes pour SAT Reading & Writing, 60 minutes pour IELTS Writing ou Reading, ou 1 h 45 pour une épreuve de GCSE) avec prise en charge complète des temps de lecture et du tiers-temps officiel de +25 %.",
      },
      {
        question: "Un minuteur d'examen en ligne fonctionne-t-il sans télécharger d'application ?",
        answer:
          "Oui. FreeExamTimer fonctionne entièrement dans votre navigateur, sans application ni extension à télécharger ou installer. Il marche sur tout appareil doté d'un navigateur et continue de tourner normalement même si votre connexion Internet est coupée. L'état du minuteur est enregistré en continu dans le localStorage chaque seconde : actualiser la page ou rouvrir l'onglet restaure immédiatement votre examen en cours.",
      },
      {
        question: "Puis-je utiliser un minuteur d'examen en ligne gratuitement ?",
        answer:
          "Oui, FreeExamTimer est 100 % gratuit, sans abonnement, sans contenu payant ni frais cachés. Toutes les fonctions — temps de lecture, calcul du tiers-temps +25 %, projection plein écran en salle, alertes sonores et URL d'examen partageables — sont accessibles gratuitement à tous les enseignants, surveillants et élèves.",
      },
      {
        question: "Puis-je utiliser un minuteur d'examen sur mon téléphone ?",
        answer:
          "Oui. FreeExamTimer est entièrement adaptatif et optimisé pour les navigateurs mobiles sur iOS (iPhone/iPad) et Android. Il dispose d'une mise en page responsive et d'une barre de navigation mobile dédiée avec des boutons faciles à toucher pour Démarrer, Pause, Réinitialiser, Plein écran et Paramètres, ce qui permet de gérer ou de suivre votre compte à rebours d'examen depuis n'importe quel smartphone.",
      },
    ],
  },
};

export default fr;
