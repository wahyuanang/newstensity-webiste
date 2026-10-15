import type { LandingLocale } from "@/data/landing";

export const howItWorksContent = {
  en: {
    eyebrow: "HOW IT WORKS",
    title: "How Newstensity Turns Data Into Insight",
    description:
      "Media data is collected, processed, and analyzed to help you discover the stories, trends, and connections behind the numbers.",
    action: "Discuss With Us",
    steps: [
      {
        title: "Data collection",
        tag: "Unified",
        description: "Collect media from multiple sources.",
      },
      {
        title: "Processing",
        tag: "Clean",
        description: "Clean raw data for analysis.",
      },
      {
        title: "Analysis",
        tag: "Trends",
        description: "Identify trends and sentiment.",
      },
      {
        title: "Insights",
        tag: "Actionable",
        description: "Turn analysis into actionable reports.",
      },
    ],
  },
  id: {
    eyebrow: "CARA KERJA",
    title: "Bagaimana Newstensity Mengubah Data Menjadi Insight",
    description:
      "Data media dikumpulkan, diproses, dan dianalisis untuk membantu Anda menemukan cerita, tren, dan hubungan di balik angka.",
    action: "Diskusikan dengan Kami",
    steps: [
      {
        title: "Pengumpulan data",
        tag: "Terpadu",
        description: "Kumpulkan media dari berbagai sumber.",
      },
      {
        title: "Pemrosesan",
        tag: "Bersih",
        description: "Bersihkan data mentah untuk dianalisis.",
      },
      {
        title: "Analisis",
        tag: "Tren",
        description: "Temukan tren dan sentimen.",
      },
      {
        title: "Insight",
        tag: "Siap ditindaklanjuti",
        description: "Ubah analisis menjadi laporan yang dapat ditindaklanjuti.",
      },
    ],
  },
} as const satisfies Record<LandingLocale, {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  steps: readonly { title: string; tag: string; description: string }[];
}>;
