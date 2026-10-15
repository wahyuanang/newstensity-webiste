import type { LandingLocale } from "@/data/landing";

const englishQuestions = [
  {
    question: "What is Newstensity?",
    answer:
      "Newstensity is an AI-powered media monitoring platform that helps organizations track news coverage and social media conversations in one place. It transforms large volumes of media data into actionable insights, helping businesses understand public sentiment, identify emerging trends, and protect their brand reputation.",
  },
  {
    question: "What media sources does Newstensity monitor?",
    answer:
      "Newstensity monitors a wide range of media sources, including online news, newspapers, magazines, tabloids, television, radio, and social media platforms. This integrated coverage helps you gain a broader understanding of how your brand, industry, and competitors are discussed across the media landscape.",
  },
  {
    question: "How does Newstensity use AI to analyze media data?",
    answer:
      "Newstensity uses AI to analyze media coverage, identify sentiment, detect emerging topics, and uncover patterns across large volumes of data. Combined with expert analysis, these insights help you move beyond raw media mentions to better understand the context and potential impact of public conversations.",
  },
  {
    question: "Can Newstensity help detect potential PR crises?",
    answer:
      "Yes. Newstensity helps you monitor unusual changes in media coverage, shifts in public sentiment, and emerging issues that may affect your brand reputation. These insights support earlier awareness and more informed decision-making, helping your team respond to potential PR crises more effectively.",
  },
  {
    question:
      "Can I monitor competitors and track brand reputation with Newstensity?",
    answer:
      "Yes. Newstensity helps you track brand mentions, monitor competitor coverage, and understand how your organization is perceived across news and social media. By comparing media visibility, sentiment, and conversation trends, you can identify opportunities and make more informed strategic decisions.",
  },
  {
    question: "Does Newstensity provide customized reports and analytics?",
    answer:
      "Yes. Newstensity supports media analysis and reporting tailored to your organization's needs, helping you evaluate brand reputation, PR performance, campaign outcomes, and media trends. Reporting requirements can be discussed with our team to determine the most relevant insights and metrics for your objectives.",
  },
  {
    question: "How frequently is media data updated?",
    answer:
      "Newstensity is designed to help you stay informed about developments across news and social media sources. Data availability and update frequency may vary depending on the source and monitoring coverage, giving your team timely information to support media analysis and decision-making.",
  },
  {
    question: "How can I get started with Newstensity?",
    answer:
      "Getting started is simple. Contact our team to discuss your media monitoring needs, key objectives, and preferred coverage. We can help you explore the platform's capabilities and identify an approach that aligns with your organization's goals.",
  },
] as const;

const indonesianQuestions = [
  {
    question: "Apa itu Newstensity?",
    answer:
      "Newstensity adalah platform pemantauan media berbasis AI yang membantu organisasi memantau pemberitaan dan percakapan media sosial dalam satu tempat. Platform ini mengolah data media dalam jumlah besar menjadi insight yang dapat ditindaklanjuti, sehingga bisnis dapat memahami sentimen publik, menemukan tren baru, dan menjaga reputasi merek.",
  },
  {
    question: "Sumber media apa saja yang dipantau Newstensity?",
    answer:
      "Newstensity memantau beragam sumber media, termasuk berita online, surat kabar, majalah, tabloid, televisi, radio, dan platform media sosial. Cakupan terpadu ini membantu Anda memahami bagaimana merek, industri, dan kompetitor dibicarakan di berbagai kanal media.",
  },
  {
    question: "Bagaimana Newstensity menggunakan AI untuk menganalisis data media?",
    answer:
      "Newstensity menggunakan AI untuk menganalisis pemberitaan, mengidentifikasi sentimen, mendeteksi topik yang berkembang, dan menemukan pola dari data dalam jumlah besar. Dipadukan dengan analisis ahli, insight ini membantu Anda memahami konteks dan potensi dampak percakapan publik, bukan hanya jumlah pemberitaan.",
  },
  {
    question: "Apakah Newstensity dapat membantu mendeteksi potensi krisis PR?",
    answer:
      "Ya. Newstensity membantu memantau perubahan pemberitaan yang tidak biasa, pergeseran sentimen publik, dan isu baru yang dapat memengaruhi reputasi merek. Insight ini mendukung deteksi lebih awal dan pengambilan keputusan yang lebih terarah agar tim Anda dapat merespons potensi krisis PR dengan lebih efektif.",
  },
  {
    question:
      "Apakah saya dapat memantau kompetitor dan reputasi merek dengan Newstensity?",
    answer:
      "Ya. Newstensity membantu melacak penyebutan merek, memantau pemberitaan kompetitor, dan memahami persepsi terhadap organisasi Anda di media berita maupun sosial. Dengan membandingkan visibilitas media, sentimen, dan tren percakapan, Anda dapat menemukan peluang dan mengambil keputusan strategis dengan lebih baik.",
  },
  {
    question: "Apakah Newstensity menyediakan laporan dan analitik khusus?",
    answer:
      "Ya. Newstensity mendukung analisis dan pelaporan media yang disesuaikan dengan kebutuhan organisasi, termasuk untuk mengevaluasi reputasi merek, kinerja PR, hasil kampanye, dan tren media. Kebutuhan laporan dapat didiskusikan bersama tim kami untuk menentukan insight dan metrik yang paling relevan dengan tujuan Anda.",
  },
  {
    question: "Seberapa sering data media diperbarui?",
    answer:
      "Newstensity dirancang untuk membantu Anda mengikuti perkembangan dari sumber berita dan media sosial. Ketersediaan dan frekuensi pembaruan data dapat berbeda sesuai sumber dan cakupan pemantauan, sehingga tim Anda mendapat informasi terkini untuk mendukung analisis media dan pengambilan keputusan.",
  },
  {
    question: "Bagaimana cara mulai menggunakan Newstensity?",
    answer:
      "Mulai menggunakan Newstensity sangat mudah. Hubungi tim kami untuk mendiskusikan kebutuhan pemantauan media, tujuan utama, dan cakupan yang Anda inginkan. Kami akan membantu Anda memahami kemampuan platform dan menentukan pendekatan yang sesuai dengan tujuan organisasi.",
  },
] as const;

export const faqContent = {
  en: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    helpText: "Still haven't found the answer?",
    contactLabel: "Contact our team",
    questions: englishQuestions,
  },
  id: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang Sering Diajukan",
    helpText: "Belum menemukan jawaban yang Anda cari?",
    contactLabel: "Hubungi tim kami",
    questions: indonesianQuestions,
  },
} as const satisfies Record<
  LandingLocale,
  {
    eyebrow: string;
    title: string;
    helpText: string;
    contactLabel: string;
    questions: readonly { question: string; answer: string }[];
  }
>;
