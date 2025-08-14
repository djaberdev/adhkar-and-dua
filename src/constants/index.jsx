import {
    morningIcon,
    eveningIcon,
    sleepIcon,
    wakeIcon,
    prayerIcon,
    tasbeehIcon,
    quranIcon,
    prophetsIcon,
} from "../assets/icons";

import {
    morningBG,
    eveningBG,
    sleepBG,
    prayerBG,
    quranBG,
    prophetsBG,
    wakeBG,
    tasbeehBG
} from "../assets/cards-background";

export const hijriMonths = [
    "محرم",
    "صفر",
    "ربيع الأول",
    "ربيع الثاني",
    "جمادى الأولى",
    "جمادى الثانية",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذو القعدة",
    "ذو الحجة"
];

export const categories = [
    {
        category: "أذكار الصباح",
        link: "morning-adhkar",
        timeToSay: "بعد صلاة الفجر حتى شروق الشمس",
        encouragement: "ابدأ يومك بذكر الله، ليمنحك راحة وطمأنينة.",
        icon: morningIcon,
        bg: morningBG,
    },
    {
        category: "أذكار المساء",
        link: "evening-adhkar",
        timeToSay: "بعد صلاة العصر حتى غروب الشمس",
        encouragement: "اختتم يومك بطمأنينة القلب ورضا الله.",
        icon: eveningIcon,
        bg: eveningBG,
    },
    {
        category: "أذكار النوم",
        link: "sleep-adhkar",
        timeToSay: "قبل النوم مباشرة",
        encouragement: "نم وقلبك مطمئن بذكر الله.",
        icon: sleepIcon,
        bg: sleepBG,
    },
    {
        category: "أذكار الاستيقاظ",
        link: "wake-adhkar",
        timeToSay: "عند الاستيقاظ من النوم",
        encouragement: "ابدأ صباحك بشكر الله على نعمة الحياة.",
        icon: wakeIcon,
        bg: wakeBG,
    },
    {
        category: "أذكار بعد السلام من الصلاة المفروضة",
        link: "after-salat",
        timeToSay: "بـعد الانتــهاء من كـل صــلاة مكتــوبة كالظهــر",
        encouragement: "اِختــم صلاتـك بذكر الـلّـه لتُحفـظ وتُزاد حسنـاتك.",
        icon: prayerIcon,
        bg: prayerBG,
    },
    {
        category: "تسابيح",
        link: "tasabih",
        timeToSay: "",
        encouragement: "التسبيح يرفع درجاتك ويثقل ميزان حسناتك.",
        icon: tasbeehIcon,
        bg: tasbeehBG,
    },
    {
        category: "أدعية قرآنية",
        link: "quran-duas",
        timeToSay: "",
        encouragement: "استعن بأدعية القرآن، فهي نور وهداية.",
        icon: quranIcon,
        bg: quranBG,
    },
    {
        category: "أدعية الأنبياء",
        link: "prophets-duas",
        timeToSay: "",
        encouragement: "اتبع أثر الأنبياء وتعلم من دعائهم.",
        icon: prophetsIcon,
        bg: prophetsBG,
    }
];