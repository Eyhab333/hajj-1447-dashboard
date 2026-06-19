import {
  Bus,
  ClipboardCheck,
  MapPinned,
  MonitorSmartphone,
  Utensils,
  Wrench,
} from "lucide-react";
import { recommendationsData } from "../../data/reportData";

export function RecommendationsSection() {
  const icons = [
    MonitorSmartphone,
    MapPinned,
    ClipboardCheck,
    Utensils,
    Bus,
    Wrench,
  ];

  return (
    <section id="recommendations" className="reveal glass-card rounded-[2rem] p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-sm font-bold text-amber-300">
            خطة التحسين
          </p>

          <h3 className="text-3xl font-black text-white">
            توصيات تنفيذية للموسم القادم
          </h3>
        </div>

        <p className="max-w-3xl leading-8 text-slate-300">
          تم تحويل الملاحظات والمؤشرات إلى مبادرات عملية يمكن متابعتها قبل
          الموسم القادم، مع ترتيب الأولويات حسب الأثر والفجوة.
        </p>
      </div>

      <div className="reveal-stagger grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {recommendationsData.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <article
              key={item.title}
              className="reveal-item group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/35"
            >
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl transition group-hover:bg-amber-300/20" />

              <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/10">
                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>

                  <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-200">
                    {item.priority}
                  </span>
                </div>

                <h4 className="text-xl font-black text-white">{item.title}</h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {item.area}
                  </span>

                  <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                    أثر {item.impact}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}