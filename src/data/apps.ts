export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  targetAge: string;
  category: string;
  icon: string;
  highlights: string[];
  gradient: string;
  badgeBg: string;
  playStoreUrl: string;
  privacyUrl: string;
  packageName: string;
  paidPackageName: string;
  isAvailable: boolean;
}

export const CONTACT_EMAIL = "heinstein.app@gmail.com";
export const ADMOB_PUBLISHER_ID = "pub-9091345489987614";
export const WEB3FORMS_ACCESS_KEY = "8f4667d9-219d-4487-984d-9af4bfcdb3b0";
export const MAX_DAILY_FEEDBACK = 5;
export const FEEDBACK_COOLDOWN_SECONDS = 60;

export const APPS: AppItem[] = [
  {
    id: "fokus-mit-betty",
    name: "Fokus mit Betty",
    tagline: "Konzentration, Achtsamkeit & Schulte-Tische",
    description: "Steigert spielerisch die Aufmerksamkeitsspanne und das Sehfeld von Kindern – angelehnt an das bewährte Prinzip klassischer Schulte-Tabellen, Gorbov-Rot-Schwarz-Übungen und geführter Betty-Atempausen.",
    targetAge: "Ab 6 Jahren",
    category: "Konzentration & Fokus",
    icon: "/images/apps/fokus_mit_betty.png",
    highlights: [
      "Schulte-Zahlentische (3×3 bis 7×7) zur Blickspanne-Erweiterung",
      "Gorbov Rot-Schwarz-Tabellen für höchste Konzentrationsdisziplin",
      "Geführte Atem- und Entspannungsphasen mit Betty",
      "Ablenkungsfreie Übungseinheiten ohne Werbeunterbrechungen während des Trainings"
    ],
    gradient: "from-teal-500 to-emerald-600",
    badgeBg: "bg-teal-50 text-teal-800 border-teal-200",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.heinstein.fokusmitbetty",
    privacyUrl: "/datenschutz/fokus-mit-betty",
    packageName: "com.heinstein.fokusmitbetty",
    paidPackageName: "com.heinstein.fokusmitbettypaid",
    isAvailable: false
  },
  {
    id: "rechnen-mit-betty",
    name: "Rechne mit Betty",
    tagline: "Spielerisches Kopfrechnen & Mathe-Abenteuer",
    description: "Macht Zahlen zu echten Freunden! Ob Plus, Minus, Malnehmen oder Geteilt: Zusammen mit Hündin Betty trainieren Kinder Kopfrechnen und bauen spielerisch Selbstvertrauen in Mathematik auf.",
    targetAge: "Vorschule & Grundschule",
    category: "Mathematik & Logik",
    icon: "/images/apps/rechnen_mit_betty.png",
    highlights: [
      "Alle 4 Grundrechenarten (+, −, ×, ÷) didaktisch aufgebaut",
      "Zahlenräume 10, 20, 100 und 1000 frei wählbar",
      "Motivierendes Knochen-Sammelsystem & Streaks",
      "Sofortiges, kindgerechtes und ermutigendes Feedback"
    ],
    gradient: "from-orange-500 to-amber-600",
    badgeBg: "bg-orange-50 text-orange-800 border-orange-200",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.heinstein.rechnemitbetty",
    privacyUrl: "/datenschutz/rechnen-mit-betty",
    packageName: "com.heinstein.rechnemitbetty",
    paidPackageName: "com.heinstein.rechnemitbettypaid",
    isAvailable: true
  },
  {
    id: "englisch-mit-betty",
    name: "Englisch mit Betty",
    tagline: "Vokabeltrainer & spielerische Spracherkundung",
    description: "Der ideale und angstfreie Einstieg in die englische Sprache. Mit liebevollen Illustrationen, kindgerechter Audio-Aussprache und abwechslungsreichen Mini-Rätseln.",
    targetAge: "Grundschule (ab 6 Jahren)",
    category: "Sprachen lernen",
    icon: "/images/apps/englisch_mit_betty.png",
    highlights: [
      "Kindgerechte Themenwelten: Tiere, Farben, Zahlen & Schule",
      "Klare, muttersprachliche Audio-Ausgabe für jedes Wort",
      "Wiederholungs-Logik für nachhaltiges Vokabel-Behalten",
      "Entspanntes Lernen im eigenen Lerntempo ohne Zeitdruck"
    ],
    gradient: "from-sky-500 to-blue-600",
    badgeBg: "bg-sky-50 text-sky-800 border-sky-200",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.heinstein.lernemitbetty",
    privacyUrl: "/datenschutz/englisch-mit-betty",
    packageName: "com.heinstein.lernemitbetty",
    paidPackageName: "com.heinstein.lernemitbettypaid",
    isAvailable: true
  },
  {
    id: "betty-slice",
    name: "Betty's Slice",
    tagline: "Reaktions- & Geschicklichkeitsspiel mit Pfoten-Action",
    description: "Flinke Pfoten gefragt! Ein rasantes, gewaltfreies Geschicklichkeitsspiel für die ganze Familie. Verbessert die Hand-Auge-Koordination mit viel Witz und guter Laune.",
    targetAge: "Für die ganze Familie (ab 4 Jahren)",
    category: "Geschicklichkeit & Spiel",
    icon: "/images/apps/betty_slice.png",
    highlights: [
      "Intuitive Touch- & Wisch-Steuerung für flinke Reflexe",
      "Fröhliche, 100 % gewaltfreie Spielatmosphäre",
      "Gemeinsamer Familienspaß & Highscore-Jagd",
      "Keine lästigen Paywalls oder unfaire In-App-Käufe"
    ],
    gradient: "from-amber-500 to-rose-500",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.heinstein.bettyslice",
    privacyUrl: "/datenschutz/betty-slice",
    packageName: "com.heinstein.bettyslice",
    paidPackageName: "com.heinstein.bettyslicepaid",
    isAvailable: false
  },
  {
    id: "uhrzeit-mit-betty",
    name: "Wie spät ist es, Betty?",
    tagline: "Interaktive Lernuhr & Zeitgefühl verstehen",
    description: "Macht das Uhrzeitlernen zum Kinderspiel! Mit liebevoll gestalteten analogen und digitalen Ziffernblättern, drehbaren Zeigern, 24-Stunden-System und gesprochener Uhrzeit.",
    targetAge: "Vorschule & Grundschule (5–9 Jahre)",
    category: "Uhrzeit & Didaktik",
    icon: "/images/apps/uhrzeit_mit_betty.png",
    highlights: [
      "Interaktive Lernuhr mit frei drehbaren Stunden- und Minutenzeigern",
      "Didaktischer Stufen-Lernpfad von vollen Stunden bis zur Minutengenauigkeit",
      "24-Stunden-Ziffernblatt zum intuitiven Verstehen von Tag & Nacht",
      "Bettys liebevolle Vorlesestimme liest jede Uhrzeit auf Knopfdruck vor"
    ],
    gradient: "from-cyan-500 to-teal-600",
    badgeBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
    playStoreUrl: "https://play.google.com/store/apps/details?id=de.benjaminheinz.wiespaetistesbetty",
    privacyUrl: "/datenschutz/uhrzeit-mit-betty",
    packageName: "de.benjaminheinz.wiespaetistesbetty",
    paidPackageName: "de.benjaminheinz.wiespaetistesbettypro",
    isAvailable: false
  },
  {
    id: "gassi-mit-betty",
    name: "Gassi mit Betty: Zahlenstrahl",
    tagline: "Zahlenstrahl, Nachbarzahlen & Bettys Spaziergang",
    description: "Auf Entdeckungsreise durch den Zahlenraum! Mit Betty hüpfen Kinder über den interaktiven Zahlenstrahl, lösen Nachbarzahlen-Rätsel und füllen ihre Schatzkammer mit goldenen Knochen.",
    targetAge: "Grundschule (1.–4. Klasse)",
    category: "Mathematik & Zahlenraum",
    icon: "/images/apps/gassi_mit_betty.png",
    highlights: [
      "Interaktiver Zahlenstrahl für Zahlenräume 0–10, 0–20, 0–100 und 0–1.000",
      "Bettys Sprung-Trajektorien visualisieren Plus- und Minus-Schritte",
      "Nachbarzahlen-Rätsel mit Vorgänger und Nachfolger kinderleicht knacken",
      "Bettys Schatzkammer mit Trophäen, Knochen-Belohnungen und Erfolgen"
    ],
    gradient: "from-emerald-500 to-green-600",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.heinstein.gassimitbetty",
    privacyUrl: "/datenschutz/gassi-mit-betty",
    packageName: "com.heinstein.gassimitbetty",
    paidPackageName: "com.heinstein.gassimitbettypro",
    isAvailable: false
  }
];

export const SAFETY_POINTS = [
  {
    icon: "shield",
    title: "100 % Lokale Lernstände",
    description: "Alle Lernfortschritte und Spielstände bleiben lokal auf deinem Gerät gespeichert – ohne Benutzerkonto, ohne Cloud. Werbefreie Pro-Versionen sind 100 % offline."
  },
  {
    icon: "baby",
    title: "Google Play Familienprogramm & COPPA",
    description: "Entwickelt nach den strengsten Google Play Familienschutz-Richtlinien: Kein Werbe-ID-Tracking, keine personalisierte Werbung, Rating G."
  },
  {
    icon: "sparkles",
    title: "Pädagogisch wertvoll",
    description: "Konzipiert, um Selbstvertrauen, Neugier und Konzentration zu stärken – ohne Überreizung, laute Schockeffekte oder unfairen Druck."
  },
  {
    icon: "heart",
    title: "Mit Liebe gestaltet",
    description: "Warmes Aquarell-Design, kindgerechte Typografie und Hündin Betty als treue, ermutigende Lernbegleiterin."
  }
];
