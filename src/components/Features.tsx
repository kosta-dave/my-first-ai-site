import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  icon: LucideIcon;
  iconClassName?: string;
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
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.title}-${i}`}
              className="flex gap-3 items-start"
            >
              <Icon
                aria-hidden="true"
                className={
                  item.iconClassName ??
                  "mt-0.5 h-8 w-8 shrink-0 text-blue-700 dark:text-sky-300"
                }
              />
              <div className="flex min-w-0 flex-col gap-2">
                <span className="text-lg font-semibold text-slate-950 dark:text-white">
                  {item.title}
                </span>
                <span className="text-slate-600 dark:text-slate-300 text-base">
                  {item.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

