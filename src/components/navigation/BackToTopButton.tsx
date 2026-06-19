import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 520);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="الرجوع إلى أعلى الصفحة"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/30 bg-amber-300 text-slate-950 shadow-2xl shadow-amber-950/30 transition hover:-translate-y-1 hover:bg-amber-200"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}