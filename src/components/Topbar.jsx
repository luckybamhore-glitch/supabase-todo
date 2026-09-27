import Icon from "./Icon.jsx";

export default function Topbar() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-white backdrop-blur-xl">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-[18px] w-[18px] text-slate-400">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <p className="text-[13.5px] text-slate-400">
          Search tasks, projects, people…
          <span className="ml-2 rounded-md bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500">⌘K</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative grid h-[46px] w-[46px] place-items-center rounded-2xl bg-white/80 text-slate-600 shadow-sm ring-1 ring-white backdrop-blur-xl">
          <Icon d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </div>
        <div className="grid h-[46px] w-[46px] place-items-center rounded-2xl bg-white/80 text-slate-600 shadow-sm ring-1 ring-white backdrop-blur-xl">
          <Icon d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-slate-900 py-2 pl-4 pr-2 text-white shadow-xl shadow-slate-900/25">
          <span className="text-[13.5px] font-semibold">+ New Task</span>
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/15 text-lg leading-none">＋</span>
        </div>
      </div>
    </div>
  );
}
