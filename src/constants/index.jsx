import {
    morningIcon,
    eveningIcon,
    sleepIcon,
    wakeIcon,
    prayerIcon,
    tasbihIcon,
    quranIcon,
    prophetsIcon,
} from "../assets/icons";

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
    },
    {
        category: "أذكار المساء",
        link: "evening-adhkar",
        timeToSay: "بعد صلاة العصر حتى غروب الشمس",
        encouragement: "اختتم يومك بطمأنينة القلب ورضا الله.",
        icon: eveningIcon,
    },
    {
        category: "أذكار النوم",
        link: "sleep-adhkar",
        timeToSay: "قبل النوم مباشرة",
        encouragement: "نم وقلبك مطمئن بذكر الله.",
        icon: sleepIcon,
    },
    {
        category: "أذكار الاستيقاظ",
        link: "wake-adhkar",
        timeToSay: "عند الاستيقاظ من النوم",
        encouragement: "ابدأ صباحك بشكر الله على نعمة الحياة.",
        icon: wakeIcon,
    },
    {
        category: "أذكار بعد السلام من الصلاة المفروضة",
        link: "after-salat",
        timeToSay: "بـعد الانتــهاء من كـل صــلاة مكتــوبة كالظهــر",
        encouragement: "اِختــم صلاتـك بذكر الـلّـه لتُحفـظ وتُزاد حسنـاتك.",
        icon: prayerIcon,
    },
    {
        category: "تسابيح",
        link: "tasabih",
        timeToSay: "",
        encouragement: "التسبيح يرفع درجاتك ويثقل ميزان حسناتك.",
        icon: tasbihIcon,
    },
    {
        category: "أدعية قرآنية",
        link: "quran-duas",
        timeToSay: "",
        encouragement: "استعن بأدعية القرآن، فهي نور وهداية.",
        icon: quranIcon,
    },
    {
        category: "أدعية الأنبياء",
        link: "prophets-duas",
        timeToSay: "",
        encouragement: "اتبع أثر الأنبياء وتعلم من دعائهم.",
        icon: prophetsIcon,
    }
];