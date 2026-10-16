import type { LandingLocale } from "@/data/landing";

export const dataCoverageContent = {
  en: {
    eyebrow: "DATA COVERAGE",
    title: "One View Across Every Media Source",
    description:
      "Newstensity collects and analyzes data from online news, print media, TV and radio, and social media in one platform.",
    centerTitle: "Newstensity",
    centerDescription: "One view across every media source",
    centerTags: ["Online", "Print", "TV & Radio", "Social"],
    categories: [
      { title: "Online News", type: "News portals", value: "10.407", unit: "Portal", more: "+10.403 more", logos: ["Detik.com", "Kompas.com", "CNN Indonesia", "Tempo.co"] },
      { title: "Print Media", type: "Newspapers, Magazines, Tabloids", value: "239", unit: "Publications", more: "+235 more", logos: ["Republika", "Kompas", "Tempo", "Media Indonesia"] },
      { title: "TV and Radio", type: "Electronic", value: "32", unit: "Stations", more: "+28 more", logos: ["TVRI", "Metro TV", "RRI", "Suara Surabaya"] },
      { title: "Social Media", type: "Public Mention", value: "7", unit: "Platform", more: "+5 more", logos: ["Facebook", "Instagram", "TikTok"] },
    ],
  },
  id: {
    eyebrow: "CAKUPAN DATA",
    title: "Satu Tampilan untuk Semua Sumber Media",
    description:
      "Newstensity mengumpulkan dan menganalisis data dari berita online, media cetak, TV dan radio, serta media sosial dalam satu platform.",
    centerTitle: "Newstensity",
    centerDescription: "Satu tampilan untuk semua sumber media",
    centerTags: ["Online", "Cetak", "TV & Radio", "Sosial"],
    categories: [
      { title: "Berita Online", type: "Portal berita", value: "10.407", unit: "Portal", more: "+10.403 lainnya", logos: ["Detik.com", "Kompas.com", "CNN Indonesia", "Tempo.co"] },
      { title: "Media Cetak", type: "Koran, Majalah, Tabloid", value: "239", unit: "Publikasi", more: "+235 lainnya", logos: ["Republika", "Kompas", "Tempo", "Media Indonesia"] },
      { title: "TV dan Radio", type: "Elektronik", value: "32", unit: "Stasiun", more: "+28 lainnya", logos: ["TVRI", "Metro TV", "RRI", "Suara Surabaya"] },
      { title: "Media Sosial", type: "Percakapan Publik", value: "7", unit: "Platform", more: "+5 lainnya", logos: ["Facebook", "Instagram", "TikTok"] },
    ],
  },
} as const satisfies Record<LandingLocale, {
  eyebrow: string;
  title: string;
  description: string;
  centerTitle: string;
  centerDescription: string;
  centerTags: readonly string[];
  categories: readonly { title: string; type: string; value: string; unit: string; more: string; logos: readonly string[] }[];
}>;
