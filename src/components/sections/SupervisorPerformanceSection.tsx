import { Award, ShieldCheck, Star, TrendingUp } from "lucide-react";
import { supervisorPerformanceData } from "../../data/reportData";

export function SupervisorPerformanceSection() {
  const average = 99.4;

  return (
    <section
      id="supervisors"
      className="reveal glass-card rounded-[2rem] p-6 sm:p-8"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="mb-2 text-sm font-bold text-emerald-300">
            أداء المشرفين
          </p>

          <h3 className="text-3xl font-black text-white">
            نقطة القوة الأكبر في التقرير
          </h3>

          <p className="mt-3 max-w-3xl leading-8 text-slate-300">
            نتائج تقييم مشرفي المجموعات تعكس مستوى عالٍ جدًا من الثقة،
            التواجد، وضوح التعليمات، وسرعة الاستجابة.
          </p>
        </div>

        <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-emerald-200">متوسط الرضا الإيجابي</p>
              <p className="mt-1 text-5xl font-black green-gradient-text">
                {average}%
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-300/15">
              <Award className="h-8 w-8 text-emerald-200" />
            </div>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-950/70">
            <div
              className="h-full rounded-full bg-gradient-to-l from-emerald-300 via-emerald-500 to-amber-300"
              style={{ width: `${average}%` }}
            />
          </div>
        </div>
      </div>

      <div className="reveal-stagger grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {supervisorPerformanceData.map((item, index) => {
          const icons = [ShieldCheck, TrendingUp, Star];
          const Icon = icons[index % icons.length];

          return (
            <article
              key={item.axis}
              className="reveal-item rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300/10">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </div>

                <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-sm font-bold text-emerald-200">
                  {item.satisfaction}%
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-white">
                {item.axis}
              </h4>

              <p className="mt-2 leading-7 text-slate-400">{item.note}</p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-950/70">
                <div
                  className="h-full rounded-full bg-gradient-to-l from-emerald-300 to-amber-300"
                  style={{ width: `${item.satisfaction}%` }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}