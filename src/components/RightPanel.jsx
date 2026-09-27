import { tags, upcoming } from "../data/mock.js";

function ProgressCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-5 text-white shadow-xl">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-600/40 blur-2xl" />
      <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-fuchsia-600/30 blur-2xl" />
      <div className="relative flex items-center justify-between">
        <p className="text-[13px] font-semibold text-white/70">Daily progress</p>
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold ring-1 ring-white/15">
          🔥 12 day streak
        </span>
      </div>
      <div className="relative mx-auto mt-2 h-[150px] w-[150px]">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="314"
            strokeDashoffset="85"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#e879f9" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="font-display text-[26px] font-extrabold leading-none">73%</p>
            <p className="mt-1 text-[11px] text-white/60">6/8 done</p>
          </div>
        </div>
      </div>
      <div className="relative mt-2 grid grid-cols-7 gap-1.5">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <div key={i} className="text-center">
            <div
              className={`mx-auto h-9 rounded-lg ${
                i < 5
                  ? "bg-gradient-to-b from-violet-500 to-fuchsia-500"
                  : i === 5
                    ? "bg-white/15 ring-1 ring-white/25"
                    : "bg-white/5 ring-1 ring-white/10"
              }`}
            />
            <p className="mt-1 text-[10px] font-semibold text-white/50">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function UpcomingCard() {
  return (
    <div className="rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-white backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <p className="font-display text-[14px] font-bold">Upcoming</p>
        <span className="text-[12px] font-semibold text-violet-600">View all →</span>
      </div>
      <div className="mt-3 space-y-2.5">
        {upcoming.map((u) => (
          <div key={u.title} className="flex items-center gap-3 rounded-2xl bg-slate-50/80 p-2.5 ring-1 ring-slate-100">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-center shadow-sm ring-1 ring-slate-100">
              <div>
                <p className="text-[14px] font-extrabold leading-none">{u.d}</p>
                <p className="text-[9px] font-bold text-slate-400">{u.m}</p>
              </div>
            </div>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold">{u.title}</p>
              <p className="flex items-center gap-1.5 text-[11.5px] text-slate-500">
                <span className={`h-1.5 w-1.5 rounded-full ${u.color}`} />
                {u.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TagsCard() {
  return (
    <div className="rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-white backdrop-blur-xl">
      <p className="font-display text-[14px] font-bold">Tags</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className={`rounded-full px-3 py-1.5 text-[12px] font-semibold ring-1 ${
              t.startsWith("+")
                ? "border-dashed bg-transparent text-slate-400 ring-slate-300"
                : "bg-slate-50 text-slate-600 ring-slate-200"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-gradient-to-br from-sky-50 to-violet-50 p-3.5 ring-1 ring-violet-100">
        <p className="text-[12.5px] font-bold">💡 Focus tip</p>
        <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
          Batch similar tasks together — you finish 23% faster in flow mode.
        </p>
      </div>
    </div>
  );
}

export default function RightPanel() {
  return (
    <aside
      className="sticky top-5 hidden h-[calc(100vh-40px)] w-[300px] shrink-0 flex-col gap-4 overflow-y-auto xl:flex"
      style={{ scrollbarWidth: "none" }}
    >
      <ProgressCard />
      <UpcomingCard />
      <TagsCard />
    </aside>
  );
}
