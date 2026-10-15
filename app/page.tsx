import { ArrowUpRight, Newspaper, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <FadeIn className="mx-auto w-full max-w-3xl text-center">
        <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
          <Newspaper aria-hidden="true" size={26} />
        </div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600">
          <Sparkles aria-hidden="true" size={15} /> Next.js starter is ready
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          Build something <span className="text-slate-500">worth reading.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Fondasi praktis untuk landing page Newstensity. Mulai kembangkan ide dan sesuaikan tampilannya di sini.
        </p>
        <a href="https://nextjs.org/docs" className="mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
          Mulai bangun <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </FadeIn>
    </main>
  );
}
