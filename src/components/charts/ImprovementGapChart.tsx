import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";
import { improvementGapData } from "../../data/reportData";


import { wrapArabicAxisLabel } from "../../utils/chartLabels";

import { useInViewOnce } from "../../hooks/useInViewOnce";


export function ImprovementGapChart() {

  const { elementRef, hasEntered } = useInViewOnce<HTMLElement>();

  const option: EChartsOption = {
    backgroundColor: "transparent",
    animation: true,
    animationDuration: 1200,
    animationEasing: "cubicOut",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(15, 23, 42, 0.96)",
      borderColor: "rgba(251, 191, 36, 0.25)",
      textStyle: {
        color: "#f8fafc",
        fontFamily: "Tajawal",
      },
      formatter: (params) => {
        const item = Array.isArray(params) ? params[0] : params;
        const dataIndex = item.dataIndex;
        const row = improvementGapData[dataIndex];

        return `
          <div style="font-family: Tajawal; line-height: 1.8">
            <strong>${row.axis}</strong><br/>
            فجوة التحسين: ${row.gap}%<br/>
            نسبة الرضا: ${row.satisfaction}%<br/>
            الأولوية: ${row.priority}
          </div>
        `;
      },
    },

    grid: {
      top: 20,
      right: 56,
      bottom: 28,
      left: 10,
      containLabel: true,
    },

    xAxis: {
      type: "value",
      min: 0,
      max: 35,
      axisLabel: {
        formatter: "{value}%",
        color: "#94a3b8",
        fontFamily: "Tajawal",
      },
      splitLine: {
        lineStyle: {
          color: "rgba(148, 163, 184, 0.12)",
        },
      },
    },

    yAxis: {
      type: "category",
      data: improvementGapData.map((item) => item.axis),
      inverse: true,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#e2e8f0",
        fontFamily: "Tajawal",
        fontSize: 13,
        lineHeight: 18,
        interval: 0,
        formatter: (value: string) => wrapArabicAxisLabel(value, 18),
      },
    },

    series: [
      {
        name: "فجوة التحسين",
        type: "bar",
        data: improvementGapData.map((item) => item.gap),
        barWidth: 18,
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          color: "#fbbf24",
          fontFamily: "Tajawal",
          fontWeight: 700,
        },
        itemStyle: {
          borderRadius: [0, 12, 12, 0],
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "#ef4444",
              },
              {
                offset: 0.55,
                color: "#f97316",
              },
              {
                offset: 1,
                color: "#fbbf24",
              },
            ],
          },
        },
      },
    ],


    media: [
      {
        query: {
          maxWidth: 520,
        },
        option: {
          grid: {
            bottom: 10,
          },
          xAxis: {
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        },
      },
    ],

  };

  return (
    <article ref={elementRef} className="glass-card rounded-[2rem] p-5 sm:p-7">
      <div className="mb-6">
        <p className="mb-2 text-sm font-bold text-amber-300">
          فجوات التحسين
        </p>

        <h3 className="text-2xl font-black text-white">
          أين نبدأ التحسين؟
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          يوضح هذا الرسم أكبر الفجوات بين الوضع الحالي والمستهدف الكامل 100%.
        </p>
      </div>

      <div className="chart-shell h-[430px] max-w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 p-3 sm:h-[390px]">
        {hasEntered ? (
          <ReactECharts
            option={option}
            notMerge
            lazyUpdate
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02]">
            <div className="text-center">
              <div className="mx-auto mb-3 h-10 w-10 animate-pulse rounded-full bg-amber-300/20" />
              <p className="text-sm font-bold text-slate-400">
                سيتم عرض الرسم عند الوصول إليه
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}