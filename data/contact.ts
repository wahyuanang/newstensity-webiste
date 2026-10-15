import type { LandingLocale } from "@/data/landing";

export const contactContent = {
  en: {
    title: "Ready to Get Started?",
    description:
      "Explore raw data pipeline diagnostics, customizable inter-entity relationships, and predictive alert configurations designed to support your organization.",
    fields: {
      name: "Name*",
      email: "Email*",
      phone: "Phone Number*",
      company: "Company*",
      source: "How did you hear about us? *",
      message: "Message",
    },
    placeholders: {
      name: "Your Name",
      email: "Email Address",
      phone: "+62 081213",
      company: "Company Name",
      source: "Select an option",
    },
    sources: [
      "Search engine",
      "Social media",
      "Event or webinar",
      "Colleague or referral",
      "Other",
    ],
    submit: "Submit",
    dashboard: {
      title: "Media Intelligence Dashboard",
      subtitle: "Real-time monitoring across 500+ sources",
      live: "Live",
      period: "Last 24 hours",
      mentions: "Mentions",
      sources: "Sources",
      sentiment: "Sentiment",
      alerts: "Alerts",
      positive: "Positive",
      high: "High",
      trend: "Trend momentum",
      topSources: "Top sources",
      yesterday: "vs yesterday",
      online: "online + broadcast",
      netScore: "net score",
      needsReview: "needs review",
    },
  },
  id: {
    title: "Siap Memulai?",
    description:
      "Jelajahi analisis alur data, hubungan antarentitas yang dapat disesuaikan, dan konfigurasi peringatan prediktif untuk mendukung organisasi Anda.",
    fields: {
      name: "Nama*",
      email: "Email*",
      phone: "Nomor Telepon*",
      company: "Perusahaan*",
      source: "Dari mana Anda mengetahui kami? *",
      message: "Pesan",
    },
    placeholders: {
      name: "Nama Anda",
      email: "Alamat Email",
      phone: "+62 081213",
      company: "Nama Perusahaan",
      source: "Pilih salah satu",
    },
    sources: [
      "Mesin pencari",
      "Media sosial",
      "Acara atau webinar",
      "Kolega atau rekomendasi",
      "Lainnya",
    ],
    submit: "Kirim",
    dashboard: {
      title: "Dasbor Intelijen Media",
      subtitle: "Pemantauan real-time dari 500+ sumber",
      live: "Live",
      period: "24 jam terakhir",
      mentions: "Penyebutan",
      sources: "Sumber",
      sentiment: "Sentimen",
      alerts: "Peringatan",
      positive: "Positif",
      high: "Tinggi",
      trend: "Tren percakapan",
      topSources: "Sumber teratas",
      yesterday: "vs kemarin",
      online: "online + siaran",
      netScore: "skor bersih",
      needsReview: "perlu ditinjau",
    },
  },
} as const satisfies Record<
  LandingLocale,
  {
    title: string;
    description: string;
    fields: Record<string, string>;
    placeholders: Record<string, string>;
    sources: readonly string[];
    submit: string;
    dashboard: Record<string, string>;
  }
>;
