import { motion } from "motion/react";
import { BookOpen, Mic2, LayoutGrid, Gamepad2, PenTool } from "lucide-react";
import LinkCard from "./components/LinkCard";
import FloatingActions from "./components/FloatingActions";
import type { CategoryCardData } from "./types";

const CATEGORIES: CategoryCardData[] = [
  {
    id: "islamic",
    title: "قرآن وإسلاميات",
    description: "موارد لتعليم القرآن الكريم والتربية الإسلامية للصغار.",
    icon: "BookOpen",
    links: [
      { label: "سلسلة التربية الإسلامية (eBooks)", url: "https://archive.org/details/Islamic-Education-Series-Grades-1-to-12-Set-of-12-eBooks-Dar-us-Salam/Islamic_Studies_Grade_01_www.TheChoice.one/page/n27/mode/2up" },
      { label: "قناة الأنشطة الإسلامية", url: "https://www.youtube.com/channel/UCEzDlTbKkx5rqDZJp01qHcQ" },
      { label: "كتاب الطفل المسلم (PDF)", url: "https://islamicbulletin.org/free_downloads/kids/the_children_book_1_and_2.pdf" },
      { label: "عمر وهناء (إنجليزي)", url: "https://www.youtube.com/@OmarHanaIslamicSongsforKids" },
      { label: "عمر وهناء (عربي)", url: "https://www.youtube.com/@Omarandhanaarabic" },
      { label: "برنامج سراج", url: "https://www.youtube.com/@sirajshowofficial" },
      { label: "تربية قرآنية", url: "https://quranictarbiyah.com/" },
    ],
  },
  {
    id: "listening",
    title: "محادثة واستماع",
    description: "قنوات ومواد مرئية لتطوير مهارات الاستماع والمحادثة بالعربية.",
    icon: "Mic2",
    links: [
      { label: "تدريب على المحادثة", url: "https://youtu.be/1Npp87B8rt4?si=_6RwOTV5fsQLE5Ei" },
      { label: "قناة سراج التعليمية", url: "https://www.youtube.com/@sirajshowofficial" },
      { label: "بلووي بالعربي", url: "https://www.youtube.com/@BlueyArabicOfficial" },
      { label: "قصص وتدريبات استماع", url: "https://youtu.be/ee6X13ZW_I0?si=I7KkeCSHrlrMAMJx" },
      { label: "تليتبيز بالعربي", url: "https://www.youtube.com/@TeletubbiesArabic" },
      { label: "تعلم مع زكريا", url: "https://www.youtube.com/@LearnWithZakaria" },
    ],
  },
  {
    id: "tools",
    title: "أدوات وتطبيقات",
    description: "منصات وتطبيقات تعليمية تفاعلية لدعم المسيرة الدراسية.",
    icon: "LayoutGrid",
    links: [
      { label: "مجلد المصادر (Drive)", url: "https://drive.google.com/drive/mobile/folders/1OvlsscB0K1m_HoElQpdwDqQDbRsaOFY8?usp=sharing" },
      { label: "منصة Twinkl", url: "https://www.twinkl.com/" },
      { label: "تطبيق Alifbee Kids", url: "https://apps.apple.com/us/app/alifbee-kids-learn-arabic/id1515462185" },
      { label: "عصافير (قصص مجانية)", url: "https://staging.3asafeer.com/ar/free_videos" },
      { label: "لوحة تحكم Fedu", url: "https://app.fedu.ai/dashboard" },
      { label: "ألعاب Blooket", url: "https://www.blooket.com/" },
    ],
  },
  {
    id: "interactive",
    title: "ألعاب تعليمية وتفاعلية",
    description: "ألعاب Wordwall وقنوات تلغرام تعليمية للمتابعة والممارسة.",
    icon: "Gamepad2",
    links: [
      { label: "ألعاب اللغة العربية (Wordwall)", url: "https://wordwall.net/play/52067/596/651" },
      { label: "ألعاب التربية الإسلامية", url: "https://wordwall.net/play/52108/257/905" },
      { label: "قناة خديجة (Telegram)", url: "https://t.me/khadeeja2464" },
      { label: "زاد المعلم (Telegram)", url: "https://t.me/zadalmoalem" },
      { label: "تحليل وتكوين الكلمات", url: "https://wordwall.net/play/52064/615/221" },
    ],
  },
  {
    id: "reading",
    title: "القراءة والكتابة",
    description: "كتب، أوراق عمل، ومصادر لتحسين مهارات القراءة والكتابة.",
    icon: "PenTool",
    links: [
      { label: "دار القراءة (كتب عربية)", url: "https://daarulqiraa.com/downloads-arabic-books/" },
      { label: "مكتبة ميوس", url: "https://mayous.org/library/" },
      { label: "أوراق عمل (Education.com)", url: "https://www.education.com/resources/worksheets/foreign-language/arabic/" },
      { label: "Arabic Playground", url: "https://www.arabicplayground.com/" },
      { label: "متجر Etsy للمصادر", url: "https://www.etsy.com" },
    ],
  },
];

export default function App() {
  return (
    <div className="min-h-screen pb-24" dir="rtl">
      {/* Header Section */}
      <header className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-brand-primary/5 skew-y-3 origin-top-right -z-10" />
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight"
            >
              أهلاً بكم في <span className="text-brand-primary">أكاديمية كلمة</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-600 text-lg md:text-2xl max-w-2xl mx-auto font-medium"
            >
              جمعنالك كل شيء بتحتاجوه لتسهيل الوصول للمعلومات 💛
            </motion.p>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {CATEGORIES.map((category, index) => (
            <LinkCard key={category.id} data={category} index={index} />
          ))}
        </div>
      </main>

      {/* Footer / Copyright */}
      <footer className="mt-24 text-center text-slate-400 text-sm">
        <p dir="ltr">© {new Date().getFullYear()} Kilmeh Academy. All rights reserved.</p>
      </footer>

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
