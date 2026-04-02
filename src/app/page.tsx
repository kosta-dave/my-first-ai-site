import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-b from-sky-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950 flex flex-col">
      {/* Первый экран */}
      <Hero
        intro="Дизайн • Разработка • Поддержка"
        title="Современные сайты"
        phrases={[
          { text: "для вашего бизнеса", className: "text-blue-700 dark:text-sky-300" },
          {
            text: "для привлечения клиентов",
            className: "text-indigo-600 dark:text-indigo-300",
          },
          { text: "для роста продаж онлайн", className: "text-cyan-600 dark:text-cyan-300" },
        ]}
        cursor="|"
        cursorClassName="text-blue-700/80 dark:text-sky-300/80"
        typingMsPerChar={85}
        subtitle="Разрабатываем стильные, быстрые и адаптивные сайты под ключ — с упором на конверсию и доверие к бренду."
        primaryButtonText="Запросить консультацию"
        primaryButtonHref="#contact"
        secondaryButtonText="Посмотреть услуги"
        secondaryButtonHref="#services"
        sections={[
          { title: "Сроки", text: "Лендинг — от 7 дней" },
          { title: "Производительность", text: "Быстрая загрузка и SEO‑база" },
          { title: "Поддержка", text: "Развитие после запуска" },
        ]}
      />

      {/* О нас */}
      <About
        title="О нас"
        text={
          "Мы — команда профессионалов, увлечённых веб‑разработкой. Создаём эстетичные сайты, которые помогают бизнесу привлекать клиентов и выглядеть современно. Дизайн, разработка, сопровождение — всё под одной крышей."
        }
      />

      {/* Услуги */}
      <Services
        title="Наши услуги"
        items={[
          {
            icon: "🎨",
            title: "Дизайн сайтов",
            text: "Современный адаптивный дизайн, отражающий идею вашего бренда.",
          },
          {
            icon: "💻",
            title: "Разработка",
            text: "Верстка и программирование, быстрый и современный стек технологий.",
          },
          {
            icon: "📈",
            title: "Продвижение",
            text: "Техническая оптимизация и базовая SEO‑поддержка для роста.",
          },
          {
            icon: "🤝",
            title: "Сопровождение",
            text: "Долгосрочная поддержка и развитие вашего сайта.",
          },
        ]}
      />

      {/* Преимущества */}
      <Features
        title="Почему выбирают нас"
        items={[
          {
            title: "Минимализм & Эстетика",
            text: "Сдержанный, современный внешний вид без лишних деталей.",
          },
          {
            title: "Адаптивность",
            text: "Ваш сайт отлично выглядит на любом устройстве.",
          },
          {
            title: "Скорость разработки",
            text: "Быстро запускаем проекты, не жертвуя качеством.",
          },
          {
            title: "Человеческий подход",
            text: "Внимание к деталям и дружелюбная коммуникация.",
          },
        ]}
      />

      {/* Призыв к действию */}
      <CTA
        id="contact"
        title="Готовы обсудить проект?"
        text="Напишите нам и мы поможем сделать первый шаг к новому сайту."
        buttonText="Связаться"
        buttonHref="mailto:hello@yourstudio.ru"
      />
    </div>
  );
}
