import { filters } from "../data/mock.js";

export default function FilterBar() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-2">
        {filters.map((p) => (
          <span
            key={p.l}
            className={`rounded-full px-4 py-2 text-[12.5px] font-semibold ring-1 ${
              p.on
                ? "bg-slate-900 text-white ring-slate-900 shadow-lg"
                : "bg-white/70 text-slate-600 ring-white backdrop-blur-xl"
            }`}
          >
            {p.l}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[12.5px] font-medium text-slate-500">
        <span className="rounded-full bg-white/70 px-3 py-2 ring-1 ring-white">Sort: Priority ↓</span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/70 ring-1 ring-white">☰</span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-900 text-white">▦</span>
      </div>
    </div>
  );
}
