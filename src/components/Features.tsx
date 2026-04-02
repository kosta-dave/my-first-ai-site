export type FeatureItem = {
  title: string;
  text: string;
};

export interface FeaturesProps {
  title: string;
  items: FeatureItem[];
}

export default function Features({ title, items }: FeaturesProps) {
  return (
    <section className="px-4 py-16 sm:py-24 transition-colors">
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white mb-10 text-center">
        {title}
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div key={`${item.title}-${i}`} className="flex flex-col items-start gap-2">
            <span className="text-lg font-semibold text-slate-950 dark:text-white">
              {item.title}
            </span>
            <span className="text-slate-600 dark:text-slate-300 text-base">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

