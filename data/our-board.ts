import type { LandingLocale } from "@/data/landing";

export const ourBoardContent = {
  en: {
    eyebrow: "OUR BOARD",
    title: "The People Behind Newstensity",
    description:
      "Meet the leaders guiding Newstensity's vision, growth, and direction in media intelligence, driving innovation and shaping the future of how organizations understand the media landscape.",
    profiles: [
      {
        name: "Teguh Budi Santoso",
        role: "COO",
        image: "/images/Card Bounce 2.png",
        bio: "Started career as journalist since 1999, TBS - his famously known nickname, is full with editorial experience in almost all areas of reportage. Started from Entertainment news, Political events, Sports, Economy and Information Technology. At the end of his career at Detik.com, he was trusted to handle their content development business core. Then, he started a new challenge to initiate Binokular until now On 2016, he was became co-founder of Tirto.ID",
      },
      {
        name: "Nur Samsi",
        role: "CTO",
        image: "/images/Card Bounce 1.png",
        bio: "He graduated from Computer Polytechnic IPB. He started his carrier in Detik.com. In a short period, he had become a leading programmer. To pursue and gain more experience, he then worked in various multinational companies in software development and deployment. He spent most of his time working on foreign projects, until he returned to raise Binokular.",
      },
      {
        name: "Sapto Anggoro",
        role: "CEO",
        image: "/images/Frame 427319157.png",
        bio: "Starting his career as a young journalist in Surabaya Post, he moved to Jakarta as a journalist at Republika and continued his career at Detik.com. He became a key journalist and deputy chief journalist, then sharpened his business skills as GM of Sales and Director of Operations (2011). With an extensive network and experience in business and organizational activities, he served as Secretary General of APJII from 2012 to 2015. In 2016, he co-founded Tirto.ID.",
      },
    ],
    profileLabel: "Show profile",
    profileImageLabel: "Profile photo placeholder",
  },
  id: {
    eyebrow: "JAJARAN DIREKSI",
    title: "Sosok di Balik Newstensity",
    description:
      "Kenali para pemimpin yang mengarahkan visi, pertumbuhan, dan pengembangan Newstensity di bidang intelijen media, mendorong inovasi dan membentuk cara organisasi memahami lanskap media.",
    profiles: [
      {
        name: "Teguh Budi Santoso",
        role: "COO",
        image: "/images/Card Bounce 2.png",
        bio: "Memulai karier sebagai jurnalis pada 1999, TBS—nama panggilan yang dikenal luas—memiliki pengalaman editorial di hampir seluruh bidang liputan, mulai dari hiburan, politik, olahraga, ekonomi, hingga teknologi informasi. Di akhir kariernya di Detik.com, ia dipercaya menangani bisnis inti pengembangan konten. Ia kemudian memulai tantangan baru dengan merintis Binokular. Pada 2016, ia turut mendirikan Tirto.ID.",
      },
      {
        name: "Nur Samsi",
        role: "CTO",
        image: "/images/Card Bounce 1.png",
        bio: "Ia merupakan lulusan Politeknik Komputer IPB dan memulai karier di Detik.com. Dalam waktu singkat, ia menjadi programmer andalan. Untuk menambah pengalaman, ia bekerja di berbagai perusahaan multinasional dalam pengembangan dan implementasi perangkat lunak. Setelah banyak mengerjakan proyek luar negeri, ia kembali untuk membesarkan Binokular.",
      },
      {
        name: "Sapto Anggoro",
        role: "CEO",
        image: "/images/Frame 427319157.png",
        bio: "Memulai karier sebagai jurnalis muda di Surabaya Post, ia kemudian pindah ke Jakarta sebagai jurnalis di Republika dan melanjutkan karier di Detik.com. Ia menjadi jurnalis utama dan wakil pemimpin redaksi, lalu mengembangkan keahlian bisnis sebagai GM Sales dan Director of Operations (2011). Dengan jaringan luas serta pengalaman di bidang bisnis dan organisasi, ia menjabat Sekretaris Jenderal APJII dari 2012 hingga 2015. Pada 2016, ia turut mendirikan Tirto.ID.",
      },
    ],
    profileLabel: "Tampilkan profil",
    profileImageLabel: "Placeholder foto profil",
  },
} as const satisfies Record<LandingLocale, {
  eyebrow: string;
  title: string;
  description: string;
  profiles: readonly { name: string; role: string; bio: string; image: string }[];
  profileLabel: string;
  profileImageLabel: string;
}>;
