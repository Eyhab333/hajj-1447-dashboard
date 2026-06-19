import {
  ArrowDown,
  BarChart3,
  CalendarDays,
  Gauge,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { PilgrimSatisfactionChart } from "./components/charts/PilgrimSatisfactionChart";
import { ImprovementGapChart } from "./components/charts/ImprovementGapChart";
import { WorkSystemChart } from "./components/charts/WorkSystemChart";
import { SupervisorPerformanceSection } from "./components/sections/SupervisorPerformanceSection";
import { RecommendationsSection } from "./components/sections/RecommendationsSection";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { SectionNav } from "./components/navigation/SectionNav";
import { BackToTopButton } from "./components/navigation/BackToTopButton";
import { AnimatedNumber } from "./components/ui/AnimatedNumber";
import { FinalStatementSection } from "./components/sections/FinalStatementSection";

const kpis = [
  {
    label: "إجمالي الحجاج المستهدفين",
    value: "2,300",
    end: 2300,
    animated: true,
    hint: "حاج مستهدف",
    icon: Users,
  },
  {
    label: "استجابات رضا الحجاج",
    value: "999",
    end: 999,
    animated: true,
    hint: "استجابة مكتملة",
    icon: BarChart3,
  },
  {
    label: "نسبة مشاركة الحجاج",
    value: "43.4%",
    animated: false,
    hint: "من إجمالي المستهدفين",
    icon: TrendingUp,
  },
  {
    label: "الرضا العام عن الشركة",
    value: "95.9%",
    animated: false,
    hint: "مؤشر إيجابي مرتفع",
    icon: ShieldCheck,
  },
  {
    label: "متوسط رضا أداء المشرفين",
    value: "99.4%",
    animated: false,
    hint: "نقطة قوة رئيسية",
    icon: Gauge,
  },
  {
    label: "أكبر فجوة تحسين",
    value: "29.8%",
    animated: false,
    hint: "خدمات مزدلفة",
    icon: ArrowDown,
  },
];

export default function App() {
  useScrollReveal();

  return (
    <main className="min-h-screen text-slate-50">
      <section className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/30 bg-amber-300/10">
                <Sparkles className="h-6 w-6 text-amber-300" />
              </div>

              <div>
                <p className="text-sm text-slate-400">Dashboard</p>
                <h1 className="text-lg font-extrabold text-white sm:text-xl">
                  موسم حج 1447هـ
                </h1>
              </div>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 sm:flex">
              <CalendarDays className="h-4 w-4 text-emerald-300" />
              التقرير النهائي
            </div>
          </header>

          <SectionNav />

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-7">
              <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-200">
                لوحة مؤشرات تفاعلية مبنية على بيانات التقرير
              </div>

              <div className="space-y-5">
                <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  لوحة مؤشرات{" "}
                  <span className="gold-gradient-text">التقرير النهائي</span>{" "}
                  لموسم حج 1447هـ
                </h2>

                <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  عرض إداري سريع يختصر نتائج الرضا، أداء المشرفين، منظومة
                  العمل، وفجوات التحسين في صفحة واحدة واضحة وقابلة للمشاركة.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#kpis"
                  className="rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  عرض المؤشرات
                </a>

                <a
                  href="#recommendations"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  أولويات التحسين
                </a>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                <p className="mb-3 text-sm font-bold text-amber-300">
                  الخلاصة التنفيذية
                </p>

                <h3 className="mb-4 text-2xl font-black text-white">
                  الأداء العام قوي، والتحسين المطلوب تشغيلي وتقني.
                </h3>

                <p className="leading-8 text-slate-300">
                  التقرير يظهر قوة واضحة في أداء المشرفين والتواصل والإرشاد،
                  مع احتياج واضح لتحسين خدمات مزدلفة، التطبيق، التسكين،
                  الإعاشة، وبعض الجوانب اللوجستية.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-emerald-400/10 p-4">
                    <p className="text-4xl font-black leading-none green-gradient-text sm:text-3xl">
                      99.4%
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      رضا أداء المشرفين
                    </p>
                  </div>

                  <div className="rounded-2xl bg-amber-400/10 p-4">
                    <p className="text-4xl font-black leading-none gold-gradient-text sm:text-3xl">
                      29.8%
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      أكبر فجوة تحسين
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section
            id="kpis"
            className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {kpis.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="reveal-item glass-card rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-6 w-6 text-amber-300" />
                    </div>

                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                      مؤشر
                    </span>
                  </div>

                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-2 text-4xl font-black text-white">
                    {item.animated && item.end ? (
                      <AnimatedNumber end={item.end} />
                    ) : (
                      item.value
                    )}
                  </p>
                  <p className="mt-2 text-sm text-emerald-200">{item.hint}</p>
                </article>
              );
            })}
          </section>





          <section
            id="charts"
            className="grid min-w-0 max-w-full gap-6 overflow-hidden"
          >
            <div className="reveal min-w-0 max-w-full overflow-hidden">
              <PilgrimSatisfactionChart />
            </div>

            <div className="grid min-w-0 max-w-full gap-6 overflow-hidden xl:grid-cols-2">
              <div className="reveal min-w-0 max-w-full overflow-hidden">
                <ImprovementGapChart />
              </div>

              <div className="reveal min-w-0 max-w-full overflow-hidden">
                <WorkSystemChart />
              </div>
            </div>
          </section>



          <SupervisorPerformanceSection />

          <RecommendationsSection />

          <FinalStatementSection />
        </div>
      </section>

      {/* <BackToTopButton /> */}
      <BackToTopButton />
    </main>
  );
}