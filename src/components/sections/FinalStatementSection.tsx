import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

const statementWords = [
  { text: "الخلاصة:", tone: "gold" },
  { text: "العنصر", tone: "green" },
  { text: "البشري", tone: "green" },
  { text: "ممتاز", tone: "green" },
  { text: "جدًا،", tone: "green" },
  { text: "والمرحلة", tone: "normal" },
  { text: "القادمة", tone: "normal" },
  { text: "تحتاج", tone: "normal" },
  { text: "تركيزًا", tone: "normal" },
  { text: "مباشرًا", tone: "normal" },
  { text: "على", tone: "normal" },
  { text: "التقنية،", tone: "gold" },
  { text: "التشغيل", tone: "gold" },
  { text: "الميداني،", tone: "gold" },
  { text: "والخدمات", tone: "gold" },
  { text: "اللوجستية.", tone: "gold" },
];

function getWordClass(tone: string) {
  if (tone === "gold") return "gold-gradient-text";
  if (tone === "green") return "green-gradient-text";
  return "text-white";
}

export function FinalStatementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const words = section.querySelectorAll(".final-word");
      const badge = section.querySelector(".final-badge");
      const glow = section.querySelector(".final-glow");

      gsap.fromTo(
        badge,
        {
          y: 18,
          opacity: 0,
          scale: 0.94,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        words,
        {
          y: 28,
          opacity: 0,
          filter: "blur(10px)",
          rotateX: 35,
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          rotateX: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.045,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        glow,
        {
          opacity: 0,
          scale: 0.75,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center sm:p-10"
    >
      <div className="final-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="final-badge mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200">
          <Sparkles className="h-4 w-4" />
          الخلاصة التنفيذية
        </div>

        <p className="[perspective:1000px] text-3xl font-black leading-[1.9] sm:text-4xl lg:text-5xl">
          {statementWords.map((word, index) => (
            <span
              key={`${word.text}-${index}`}
              className={`final-word inline-block ${getWordClass(word.tone)}`}
            >
              {word.text}
              {index < statementWords.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}