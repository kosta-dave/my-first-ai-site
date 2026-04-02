export interface AboutProps {
  title: string;
  text: string;
}

export default function About({ title, text }: AboutProps) {
  return (
    <section className="px-4 py-16 sm:py-24 flex flex-col items-center transition-colors">
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white mb-4 text-center">
        {title}
      </h2>
      <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-lg text-center">
        {text}
      </p>
    </section>
  );
}

