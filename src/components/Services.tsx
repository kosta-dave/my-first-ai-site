export type ServiceItem = {
  icon: string;
  title: string;
  text: string;
};

export interface ServicesProps {
  title: string;
  items: ServiceItem[];
}

export default function Services({ title, items }: ServicesProps) {
  return (
    <section id="services" className="px-4 py-16 sm:py-24 transition-colors">
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white mb-10 text-center">
        {title}
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className="flex flex-col items-center rounded-2xl bg-white/70 dark:bg-slate-900/40 p-6 text-center shadow-sm hover:shadow-md transition-all ring-1 ring-blue-200/70 dark:ring-blue-500/20"
          >
            <span className="text-3xl mb-3">{item.icon}</span>
            <h3 className="font-semibold text-lg text-slate-950 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

