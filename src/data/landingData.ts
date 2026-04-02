import {
  Palette,
  Code2,
  Megaphone,
  Headset,
  CalendarClock,
  Gauge,
  LifeBuoy,
  Sparkles,
  Smartphone,
  Zap,
  HeartHandshake,
} from "lucide-react";

import type { AboutProps } from "@/components/About";
import type { CTAProps } from "@/components/CTA";
import type { FeaturesProps } from "@/components/Features";
import type { HeroProps } from "@/components/Hero";
import type { ServicesProps } from "@/components/Services";

export const landingPageClassName =
  "min-h-screen w-full font-sans bg-gradient-to-b from-sky-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950 flex flex-col";

export const landingData: {
  hero: HeroProps;
  about: AboutProps;
  services: ServicesProps;
  features: FeaturesProps;
  cta: CTAProps;
} = {
  hero: {
    intro: "Дизайн • Разработка • Поддержка",
    title: "Современные сайты",
    phrases: [
      {
        text: "для вашего бизнеса",
        className: "text-blue-700 dark:text-sky-300",
      },
      {
        text: "для привлечения клиентов",
        className: "text-indigo-600 dark:text-indigo-300",
      },
      {
        text: "для роста продаж онлайн",
        className: "text-cyan-600 dark:text-cyan-300",
      },
    ],
    cursor: "|",
    cursorClassName: "text-blue-700/80 dark:text-sky-300/80",
    typingMsPerChar: 85,
    subtitle:
      "Разрабатываем стильные, быстрые и адаптивные сайты под ключ — с упором на конверсию и доверие к бренду.",
    primaryButtonText: "Запросить консультацию",
    primaryButtonHref: "#contact",
    secondaryButtonText: "Посмотреть услуги",
    secondaryButtonHref: "#services",
    sections: [
      {
        icon: CalendarClock,
        iconClassName: "mb-3 h-8 w-8 text-blue-700 dark:text-sky-300",
        title: "Сроки",
        text: "Лендинг — от 7 дней",
      },
      {
        icon: Gauge,
        iconClassName: "mb-3 h-8 w-8 text-indigo-600 dark:text-indigo-300",
        title: "Производительность",
        text: "Быстрая загрузка и SEO‑база",
      },
      {
        icon: LifeBuoy,
        iconClassName: "mb-3 h-8 w-8 text-cyan-600 dark:text-cyan-300",
        title: "Поддержка",
        text: "Развитие после запуска",
      },
    ],
  },
  about: {
    title: "О нас",
    text: "Мы — команда профессионалов, увлечённых веб‑разработкой. Создаём эстетичные сайты, которые помогают бизнесу привлекать клиентов и выглядеть современно. Дизайн, разработка, сопровождение — всё под одной крышей.",
  },
  services: {
    title: "Наши услуги",
    items: [
      {
        icon: Palette,
        iconClassName: "mb-4 h-16 w-16 text-blue-700 dark:text-sky-300",
        title: "Дизайн сайтов",
        text: "Современный адаптивный дизайн, отражающий идею вашего бренда.",
      },
      {
        icon: Code2,
        iconClassName: "mb-4 h-16 w-16 text-indigo-600 dark:text-indigo-300",
        title: "Разработка",
        text: "Верстка и программирование, быстрый и современный стек технологий.",
      },
      {
        icon: Megaphone,
        iconClassName: "mb-4 h-16 w-16 text-cyan-600 dark:text-cyan-300",
        title: "Продвижение",
        text: "Техническая оптимизация и базовая SEO‑поддержка для роста.",
      },
      {
        icon: Headset,
        iconClassName: "mb-4 h-16 w-16 text-sky-700 dark:text-blue-300",
        title: "Сопровождение",
        text: "Долгосрочная поддержка и развитие вашего сайта.",
      },
    ],
  },
  features: {
    title: "Почему выбирают нас",
    items: [
      {
        icon: Sparkles,
        iconClassName:
          "mt-0.5 h-8 w-8 shrink-0 text-blue-700 dark:text-sky-300",
        title: "Минимализм & Эстетика",
        text: "Сдержанный, современный внешний вид без лишних деталей.",
      },
      {
        icon: Smartphone,
        iconClassName:
          "mt-0.5 h-8 w-8 shrink-0 text-indigo-600 dark:text-indigo-300",
        title: "Адаптивность",
        text: "Ваш сайт отлично выглядит на любом устройстве.",
      },
      {
        icon: Zap,
        iconClassName:
          "mt-0.5 h-8 w-8 shrink-0 text-cyan-600 dark:text-cyan-300",
        title: "Скорость разработки",
        text: "Быстро запускаем проекты, не жертвуя качеством.",
      },
      {
        icon: HeartHandshake,
        iconClassName:
          "mt-0.5 h-8 w-8 shrink-0 text-sky-700 dark:text-blue-300",
        title: "Человеческий подход",
        text: "Внимание к деталям и дружелюбная коммуникация.",
      },
    ],
  },
  cta: {
    id: "contact",
    title: "Готовы обсудить проект?",
    text: "Напишите нам и мы поможем сделать первый шаг к новому сайту.",
    buttonText: "Связаться",
    buttonHref: "mailto:hello@yourstudio.ru",
  },
};
