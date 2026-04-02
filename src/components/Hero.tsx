import type { LucideIcon } from "lucide-react";

import { TypingWord } from "@/components/TypingWord";

export type HeroPhrase = {
  text: string;
  className?: string;
};

export interface HeroProps {
  intro: string; // Дизайн • Разработка • Поддержка
  title: string; // Современные сайты
  phrases: HeroPhrase[]; // Фразы для typing effect
  cursor?: string;
  cursorClassName?: string;
  typingMsPerChar?: number;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref?: string;
  secondaryButtonText: string;
  secondaryButtonHref?: string;
  sections: {
    icon: LucideIcon;
    iconClassName?: string;
    title: string;
    text: string;
  }[];
}

export default function Hero({
  intro,
  title,
  phrases,
  cursor = "|",
  cursorClassName = "text-blue-700/80 dark:text-sky-300/80",
  typingMsPerChar = 85,
  subtitle,
  primaryButtonText,
  primaryButtonHref = "#contact",
  secondaryButtonText,
  secondaryButtonHref = "#services",
  sections,
}: HeroProps) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100svh] px-4 py-24 sm:py-36 transition-colors overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/30 via-blue-400/25 to-indigo-400/30 blur-3xl dark:from-sky-500/15 dark:via-blue-500/15 dark:to-indigo-500/15" />
        <div className="absolute -bottom-32 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-300/30 via-sky-300/25 to-cyan-300/30 blur-3xl dark:from-blue-400/10 dark:via-sky-400/10 dark:to-cyan-400/10" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-2 text-sm text-blue-800 shadow-sm backdrop-blur dark:border-blue-500/20 dark:bg-slate-900/40 dark:text-blue-200">
          <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.15)] dark:shadow-[0_0_0_4px_rgba(59,130,246,0.10)]" />
          {intro}
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 dark:text-white mb-6 text-center tracking-tight">
          {title}{" "}
          <br className="hidden sm:block" />
          <TypingWord
            className="inline-flex items-baseline"
            phrases={phrases}
            cursor={cursor}
            cursorClassName={cursorClassName}
            typingMsPerChar={typingMsPerChar}
          />
        </h1>

        <p className="max-w-xl text-lg sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 text-center">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={primaryButtonHref}
            className="inline-flex justify-center px-8 py-4 rounded-full bg-blue-600 text-white text-base font-medium shadow-sm shadow-blue-600/25 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950"
          >
            {primaryButtonText}
          </a>
          <a
            href={secondaryButtonHref}
            className="inline-flex justify-center px-8 py-4 rounded-full bg-white/70 text-slate-900 text-base font-medium shadow-sm ring-1 ring-blue-200/70 hover:bg-white transition-colors backdrop-blur dark:bg-slate-900/40 dark:text-white dark:ring-blue-500/20 dark:hover:bg-slate-900/60"
          >
            {secondaryButtonText}
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 sm:grid-cols-3 gap-3">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white/70 ring-1 ring-blue-200/70 p-4 text-left shadow-sm backdrop-blur dark:bg-slate-900/40 dark:ring-blue-500/20"
              >
                <Icon
                  aria-hidden="true"
                  className={
                    section.iconClassName ??
                    "mb-3 h-8 w-8 text-blue-700 dark:text-sky-300"
                  }
                />
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {section.title}
                </div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {section.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}