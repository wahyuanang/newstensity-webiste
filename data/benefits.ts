import type { LandingLocale } from "@/data/landing";

export const benefitsContent = {
  en: {
    eyebrow: "BENEFITS",
    title: "Turn Media Data Into Better Decisions",
    description:
      "Newstensity turns complex media information into a clearer view of the stories, trends, and relationships that matter.",
    link: "Explore the benefits",
    items: [
      {
        title: "See The Bigger Picture",
        description:
          "Connect information from multiple media sources to understand the complete story behind every conversation.",
      },
      {
        title: "Stay Ahead of The Conversation",
        description:
          "Connect information from different media sources to understand the broader conversation.",
      },
      {
        title: "Make Faster Decisions",
        description:
          "Access real-time information and insights to respond quickly to developing situations.",
      },
      {
        title: "Understand The Context",
        description:
          "Go beyond individual stories by discovering relationships between people, organizations, locations, and topics.",
      },
    ],
  },
  id: {
    eyebrow: "MANFAAT",
    title: "Ubah Data Media Menjadi Keputusan yang Lebih Baik",
    description:
      "Newstensity menyederhanakan informasi media yang kompleks agar Anda dapat memahami cerita, tren, dan hubungan yang penting.",
    link: "Jelajahi manfaat",
    items: [
      {
        title: "Lihat Gambaran Besar",
        description:
          "Hubungkan informasi dari berbagai sumber media untuk memahami cerita lengkap di balik setiap percakapan.",
      },
      {
        title: "Selangkah Lebih Maju",
        description:
          "Hubungkan informasi dari berbagai sumber media untuk memahami percakapan secara menyeluruh.",
      },
      {
        title: "Ambil Keputusan Lebih Cepat",
        description:
          "Akses informasi dan insight real-time untuk merespons situasi yang berkembang dengan cepat.",
      },
      {
        title: "Pahami Konteks",
        description:
          "Temukan hubungan antara orang, organisasi, lokasi, dan topik untuk memahami lebih dari sekadar berita.",
      },
    ],
  },
} as const satisfies Record<LandingLocale, {
  eyebrow: string;
  title: string;
  description: string;
  link: string;
  items: readonly { title: string; description: string }[];
}>;
