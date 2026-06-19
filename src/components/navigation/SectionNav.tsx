const navItems = [
  { href: "#kpis", label: "المؤشرات" },
  { href: "#charts", label: "التحليلات" },
  { href: "#supervisors", label: "المشرفون" },
  { href: "#recommendations", label: "التوصيات" },
];

export function SectionNav() {
  return (
    <nav className="sticky top-3 z-30 -mx-1 overflow-x-auto pb-2">
      <div className="mx-auto flex w-max min-w-full gap-2 rounded-full border border-white/10 bg-slate-950/70 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl sm:w-fit sm:min-w-0">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-amber-300 hover:text-slate-950"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}