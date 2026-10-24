import type { AppItem } from './apps';

export const APPS_EN: AppItem[] = [
  {
    id: "fokus-mit-betty",
    name: "Focus with Betty",
    tagline: "Concentration, Mindfulness & Schulte Tables",
    description: "Playfully boosts children's attention span and visual field – inspired by proven Schulte tables, Gorbov Red-Black exercises, and guided breathing pauses with Betty.",
    targetAge: "Ages 6+",
    category: "Focus & Concentration",
    icon: "/images/apps/fokus_mit_betty.png",
    highlights: [
      "Schulte number tables (3×3 to 7×7) for expanding visual span",
      "Gorbov Red-Black tables for peak concentration discipline",
      "Guided breathing and relaxation moments with Betty",
      "Distraction-free exercises without ad interruptions during practice"
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
    name: "Count on Betty",
    tagline: "Playful Mental Math & Arithmetic Adventures",
    description: "Turn numbers into best friends! Addition, subtraction, multiplication, and division: Together with Betty the poodle, kids build real math confidence.",
    targetAge: "Preschool & Elementary",
    category: "Math & Logic",
    icon: "/images/apps/rechnen_mit_betty.png",
    highlights: [
      "All 4 basic operations (+, −, ×, ÷) structured step-by-step",
      "Selectable number ranges from 10, 20, 100 up to 1000",
      "Motivating bone-collecting system & streaks",
      "Instant, encouraging, and child-friendly feedback"
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
    name: "Learn English with Betty",
    tagline: "Vocabulary Trainer with Book Scanner & Speech",
    description: "The motivating, anxiety-free vocabulary trainer for children. Featuring smart textbook page scanning (OCR), native speech recognition, and encouraging feedback.",
    targetAge: "Elementary School (Grades 1–6)",
    category: "Language Learning",
    icon: "/images/apps/englisch_mit_betty.png",
    highlights: [
      "Smart textbook page scanner (OCR) converts word lists in seconds",
      "Child-safe on-device speech training for confident pronunciation",
      "3 engaging practice modes: Flashcards, Typing & Speech",
      "Daily golden bones & 3 protective streak shields"
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
    tagline: "Family Reaction & Dexterity Game with Paw Action",
    description: "Quick paws wanted! A fast-paced, non-violent dexterity game for the whole family that sharpens hand-eye coordination with humor and fun.",
    targetAge: "For the Whole Family (Ages 4+)",
    category: "Dexterity & Arcade",
    icon: "/images/apps/betty_slice.png",
    highlights: [
      "Intuitive swipe & touch controls for rapid reflexes",
      "Cheerful, 100% non-violent family gaming atmosphere",
      "Fun high-score chasing for parents and kids alike",
      "No annoying paywalls or unfair in-app purchases"
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
    name: "What Time Is It, Betty?",
    tagline: "Interactive Clock & Time Learning Adventure",
    description: "Telling time made playful and easy! Featuring beautiful analog and digital dials, rotatable hands, 24-hour day/night system, and friendly voice readout.",
    targetAge: "Preschool & Elementary (Ages 5–9)",
    category: "Time & Clock Learning",
    icon: "/images/apps/uhrzeit_mit_betty.png",
    highlights: [
      "Interactive clock face with freely draggable hour and minute hands",
      "Step-by-step adventure path from full hours to minute precision",
      "24-hour dual dial for intuitive day and night comprehension",
      "Betty's encouraging voice reads aloud any set time on demand"
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
    name: "Walk with Betty: Number Line",
    tagline: "Number Lines, Neighbors & Walkies with Betty",
    description: "An exciting journey through number space! Leap across interactive number lines with Betty, master neighbor numbers, and fill your treasury with golden bones.",
    targetAge: "Elementary School (Grades 1–4)",
    category: "Math & Number Space",
    icon: "/images/apps/gassi_mit_betty.png",
    highlights: [
      "Interactive number lines for ranges 0–10, 0–20, 0–100, and 0–1,000",
      "Betty's leap trajectories visualize addition and subtraction steps",
      "Neighbor number puzzles (predecessor and successor) solved easily",
      "Betty's treasury with trophies, golden bone rewards, and achievements"
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

export const SAFETY_POINTS_EN = [
  {
    icon: "shield",
    title: "100% Local Learning Data",
    description: "All learning progress and high scores remain stored exclusively on your device – no user account, no cloud lock-in. Ad-free versions work 100% offline."
  },
  {
    icon: "baby",
    title: "Google Play Family Program & COPPA",
    description: "Built strictly according to Google Play Family guidelines: No advertising ID tracking, no personalized ads, Rating G."
  },
  {
    icon: "sparkles",
    title: "Pedagogically Valuable",
    description: "Designed to nurture self-confidence, curiosity, and focus – without sensory overload, sudden scares, or unfair pressure."
  },
  {
    icon: "heart",
    title: "Crafted with Love",
    description: "Warm watercolor design, child-friendly typography, and Betty the poodle as a patient, encouraging companion."
  }
];
