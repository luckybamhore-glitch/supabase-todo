import Icon from "./Icon.jsx";

export default function TaskCard({ task }) {
  const t = task;
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-white/90 p-4 shadow-[0_10px_36px_-14px_rgb(15_23_42/0.2)] ring-1 ring-white backdrop-blur-xl sm:p-5 border-l-4 ${t.accent} ${
        t.done ? "opacity-75" : ""
      }`}
    >
      <div className="flex items-start gap-3.5">
        <div
          className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 ${
            t.done ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 bg-white"
          }`}
        >
          {t.done && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ${t.tagStyle}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
              {t.tag}
            </span>
            <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ${t.priorityStyle}`}>{t.priority}</span>
            <span className="ml-auto hidden items-center gap-1.5 text-[12px] font-medium text-slate-400 sm:inline-flex">
              <Icon d="M12 8v4l3 3M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9z" className="h-4 w-4" />
              {t.time}
            </span>
          </div>
          <p className={`font-display mt-2 text-[15.5px] font-bold leading-snug ${t.done ? "text-slate-400 line-through decoration-2" : ""}`}>
            {t.title}
          </p>
          <p className="mt-0.5 truncate text-[13px] text-slate-500">{t.desc}</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex -space-x-2">
              {t.avatars.map((a, i) => (
                <span
                  key={a}
                  className={`grid h-7 w-7 place-items-center rounded-full text-[9px] font-bold text-white ring-2 ring-white ${t.avatarColors[i]}`}
                >
                  {a}
                </span>
              ))}
              <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 ring-2 ring-white">
                +
              </span>
            </div>
            <span className="text-[12px] font-medium text-slate-400 sm:hidden">{t.time}</span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-50 text-slate-400 ring-1 ring-slate-100">💬</span>
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-50 text-slate-400 ring-1 ring-slate-100">📎</span>
              <span className="hidden rounded-xl bg-slate-900 px-3.5 py-2 text-[12px] font-semibold text-white sm:block">
                {t.done ? "Undo" : "Start →"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
