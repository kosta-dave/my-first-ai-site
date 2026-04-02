export interface CTAProps {
  title: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  id?: string;
}

export default function CTA({
  title,
  text,
  buttonText,
  buttonHref,
  id = "contact",
}: CTAProps) {
  return (
    <section
      id={id}
      className="px-4 py-16 sm:py-24 transition-colors flex flex-col items-center"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white mb-4 text-center">
        {title}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 text-center">
        {text}
      </p>
      <a
        href={buttonHref}
        className="inline-flex justify-center px-8 py-4 rounded-full bg-blue-600 text-white text-base font-medium shadow-sm shadow-blue-600/25 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950"
      >
        {buttonText}
      </a>
    </section>
  );
}

