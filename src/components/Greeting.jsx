export default function Greeting() {
  return (
    <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[12px] font-medium text-slate-600 shadow-sm ring-1 ring-white backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Saturday, September 27 · 4 tasks today
        </div>
        <h1 className="font-display mt-3 text-[30px] font-extrabold leading-[1.05] tracking-tight sm:text-[36px]">
          Good morning, Aarav 👋
        </h1>
        <p className="mt-1.5 max-w-[480px] text-[13.5px] leading-relaxed text-slate-500">
          You&apos;re making great progress. <span className="font-semibold text-slate-700">3 of 8 tasks</span> done — keep
          the momentum going.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-2xl bg-white/70 p-1 shadow-sm ring-1 ring-white backdrop-blur-xl">
          {["Day", "Week", "Month"].map((t, i) => (
            <span
              key={t}
              className={`rounded-xl px-3.5 py-2 text-[12.5px] font-semibold ${
                i === 1 ? "bg-slate-900 text-white shadow" : "text-slate-500"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
