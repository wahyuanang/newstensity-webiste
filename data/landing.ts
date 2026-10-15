export const landingContent = {
  en: {
    hero: {
      eyebrow: "Product",
      title: "Turn media conversations into",
      titleAccent: "meaningful action.",
      description:
        "Monitor coverage, understand sentiment, and find the issues that matter to your organization in one workspace.",
      primaryAction: "Explore Platform",
      secondaryAction: "Request Demo",
      cards: {
        summary: {
          src: "/images/Card Bounce 1.png",
          alt: "AI Summary: an overview of media coverage",
        },
        reporter: {
          src: "/images/Card Bounce 2.png",
          alt: "Top Reporter: the reporter with the most coverage",
        },
        alert: {
          src: "/images/Card Bounce 4.png",
          alt: "Spike Alert: a warning about a rise in negative sentiment",
        },
        mentions: {
          src: "/images/Frame 427319157.png",
          alt: "Mention by Day: a comparison of daily mentions",
        },
      },
      dashboardAlt: "Preview of the Newstensity media analysis dashboard",
      dashboardDarkAlt:
        "Preview of the Newstensity media analysis dashboard in dark mode",
    },
    solutions: {
      eyebrow: "PROBLEM & SOLUTIONS",
      title: "The Media Moves Fast. Your Intelligence Should Too.",
      description:
        "Media conversations move quickly across news sites, social platforms, and digital channels. Our platform transforms real-time data into actionable insights through AI-powered analysis, helping you detect trends, monitor sentiment, and respond to important developments faster.",
      button: "Learn More",
      carouselLabel: "Problem and solution examples",
      stats: [
        { value: "20K +", label: "Data/Day" },
        { value: "12K +", label: "Media Searching" },
        { value: "10 min", label: "Realtime Data" },
      ],
      imageAlt:
        "Is this news actually valid? Illustration of unverified news sources.",
    },
    navigation: {
      label: "Main navigation",
      product: "Product",
      solutions: "Solutions",
      login: "Login",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Change language",
      languageNames: { id: "Bahasa Indonesia", en: "English" },
    },
    footer: {
      title: "Ready to transform media into intelligence?",
      description:
        "Request a personalized demo and see how Newstensity helps your organization understand the media landscape.",
      requestDemo: "Request a demo",
      navigation: "Footer navigation",
      terms: "Terms of service",
      privacy: "Privacy policy",
      copyrightLabel: "Copyright",
      copyright: "All rights reserved.",
    },
    metadata: {
      title: "Newstensity | Media Intelligence",
      description:
        "Understand media conversations and turn news into actionable intelligence.",
    },
  },
  id: {
    hero: {
      eyebrow: "Product",
      title: "Ubah percakapan media menjadi",
      titleAccent: "langkah bermakna.",
      description:
        "Pantau pemberitaan, pahami sentimen, dan temukan isu yang penting bagi organisasi Anda dalam satu ruang kerja.",
      primaryAction: "Jelajahi Platform",
      secondaryAction: "Minta Demo",
      cards: {
        summary: {
          src: "/images/Card Bounce 1.png",
          alt: "AI Summary: ringkasan liputan media",
        },
        reporter: {
          src: "/images/Card Bounce 2.png",
          alt: "Top Reporter: reporter dengan liputan terbanyak",
        },
        alert: {
          src: "/images/Card Bounce 4.png",
          alt: "Spike Alert: peringatan lonjakan sentimen negatif",
        },
        mentions: {
          src: "/images/Frame 427319157.png",
          alt: "Mention by Day: perbandingan jumlah penyebutan",
        },
      },
      dashboardAlt: "Pratinjau dashboard analisis media Newstensity",
      dashboardDarkAlt:
        "Pratinjau dashboard analisis media Newstensity dalam mode gelap",
    },
    solutions: {
      eyebrow: "MASALAH & SOLUSI",
      title: "Media Bergerak Cepat. Intelijen Anda Juga Harus.",
      description:
        "Percakapan media bergerak cepat di situs berita, platform sosial, dan kanal digital. Platform kami mengubah data real-time menjadi insight yang dapat ditindaklanjuti melalui analisis berbasis AI, membantu Anda menemukan tren, memantau sentimen, dan merespons perkembangan penting dengan lebih cepat.",
      button: "Pelajari Lebih Lanjut",
      carouselLabel: "Contoh masalah dan solusi",
      stats: [
        { value: "20K +", label: "Data/Hari" },
        { value: "12K +", label: "Pencarian Media" },
        { value: "10 mnt", label: "Data Real-time" },
      ],
      imageAlt:
        "Apakah berita ini benar? Ilustrasi sumber berita yang belum terverifikasi.",
    },
    navigation: {
      label: "Navigasi utama",
      product: "Produk",
      solutions: "Solusi",
      login: "Masuk",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      switchLanguage: "Ganti bahasa",
      languageNames: { id: "Bahasa Indonesia", en: "English" },
    },
    footer: {
      title: "Siap mengubah media menjadi intelijen?",
      description:
        "Minta demo personal dan temukan bagaimana Newstensity membantu organisasi memahami lanskap media.",
      requestDemo: "Minta demo",
      navigation: "Navigasi footer",
      terms: "Ketentuan layanan",
      privacy: "Kebijakan privasi",
      copyrightLabel: "Hak cipta",
      copyright: "Hak cipta dilindungi.",
    },
    metadata: {
      title: "Newstensity | Intelijen Media",
      description:
        "Pahami percakapan media dan ubah berita menjadi intelijen yang dapat ditindaklanjuti.",
    },
  },
} as const;

export type LandingLocale = keyof typeof landingContent;
