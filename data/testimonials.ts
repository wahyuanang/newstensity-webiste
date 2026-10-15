import type { LandingLocale } from "@/data/landing";

const stories = [
  {
    id: "shahril-koto",
    quote:
      "Cakupan news monitoring dari Binokular menjangkau area kerja Astra Motor yang tersebar di seluruh Indonesia",
    name: "Shahril Koto",
    organization: "Astra Motor",
  },
  {
    id: "bima-aditiawan-putra",
    quote:
      "Untuk pelayanan end user sangat responsif dalam membantu kebutuhan kami.",
    name: "Bima Aditiawan Putra",
    organization:
      "PT Taman Wisata Candi Borobudur, Prambanan dan Ratu Boko",
  },
  {
    id: "rida-kusrida",
    quote: "GOOD SERVICE, INFORMATIVE, AND UPDATE",
    name: "Rida Kusrida",
    organization: "PT CIPUTRA SENTRA (MAL CIPUTRA JAKARTA)",
  },
] as const;

export const testimonialsContent = {
  en: {
    eyebrow: "TESTIMONIALS",
    title: "Stories from Our Users",
    description:
      "Hear directly from the people using Newstensity to stay on top of the media, discover what matters, and get a clearer view of the conversations shaping their work.",
    stories,
    carouselLabel: "Customer testimonials",
    goToSlide: "Go to testimonial",
  },
  id: {
    eyebrow: "TESTIMONI",
    title: "Cerita dari Pengguna Kami",
    description:
      "Dengarkan langsung pengalaman pengguna Newstensity dalam memantau media, menemukan hal penting, dan memahami percakapan yang memengaruhi pekerjaan mereka.",
    stories,
    carouselLabel: "Testimoni pelanggan",
    goToSlide: "Lihat testimoni",
  },
} as const satisfies Record<LandingLocale, {
  eyebrow: string;
  title: string;
  description: string;
  stories: readonly {
    id: string;
    quote: string;
    name: string;
    organization: string;
  }[];
  carouselLabel: string;
  goToSlide: string;
}>;
