import type { LandingLocale } from "@/data/landing";

export const whyNewstensityContent = {
  en: {
    eyebrow: "WHY NEWSTENSITY",
    title: "What Makes Newstensity Different?",
    description:
      "Built to bring together more data, faster analysis, and deeper connections across the media landscape.",
    items: [
      {
        title: "Pioneer in Unified Media Intelligence",
        description:
          "Bring mainstream and social media data together in one place, with social media monitoring coming soon.",
      },
      {
        title: "Unlimited Data & Media",
        description:
          "Stream 20,000+ data points daily from an extensive network of credible print and online media sources.",
      },
      {
        title: "Real-Time, Proactive Crisis Detection",
        description:
          "Get media updates within 10 minutes and spot crisis topics early, so you can respond proactively.",
      },
      {
        title: "AI-Powered, Human-Verified Accuracy",
        description:
          "AI accelerates media analysis and reporting, while human oversight ensures quality, accuracy, and reliable insights.",
      },
      {
        title: "Smart Mapping & Deeper Insights",
        description:
          "Uncover connected entities, key influencers, and competitors, with journalist insights, ESG, and AI reports.",
      },
    ],
  },
  id: {
    eyebrow: "MENGAPA NEWSTENSITY",
    title: "Apa yang Membuat Newstensity Berbeda?",
    description:
      "Dirancang untuk menggabungkan lebih banyak data, analisis yang lebih cepat, dan hubungan yang lebih mendalam di lanskap media.",
    items: [
      {
        title: "Pelopor Intelijen Media Terpadu",
        description:
          "Satukan data media arus utama dan sosial dalam satu tempat. Pemantauan media sosial segera hadir.",
      },
      {
        title: "Data & Media Tanpa Batas",
        description:
          "Akses lebih dari 20.000 titik data setiap hari dari jaringan luas sumber media cetak dan online tepercaya.",
      },
      {
        title: "Deteksi Krisis Real-Time dan Proaktif",
        description:
          "Dapatkan pembaruan media dalam 10 menit dan temukan topik krisis lebih awal agar dapat merespons secara proaktif.",
      },
      {
        title: "Akurasi AI dengan Verifikasi Manusia",
        description:
          "AI mempercepat analisis dan pelaporan media, sementara pengawasan manusia menjaga kualitas, akurasi, dan keandalan insight.",
      },
      {
        title: "Pemetaan Cerdas & Insight Mendalam",
        description:
          "Temukan entitas yang terhubung, influencer utama, dan kompetitor, dilengkapi insight jurnalis, ESG, dan laporan AI.",
      },
    ],
  },
} as const satisfies Record<LandingLocale, {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly { title: string; description: string }[];
}>;
