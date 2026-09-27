import { menuItems, workspaces } from "../data/mock.js";
import Icon from "./Icon.jsx";

export default function Sidebar() {
  return (
    <aside className="sticky top-5 hidden h-[calc(100vh-40px)] w-[264px] shrink-0 flex-col rounded-3xl bg-white/80 p-4 shadow-[0_8px_40px_-12px_rgb(15_23_42/0.15)] ring-1 ring-white backdrop-blur-xl lg:flex">
      <div className="flex items-center gap-2.5 rounded-2xl bg-slate-900 p-3 text-white">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
        </div>
        <div>
          <p className="font-display text-[15px] font-bold leading-none">Taskflow</p>
          <p className="mt-1 text-[11px] text-white/60">v2.0 · Modern suite</p>
        </div>
      </div>

      <p className="px-3 pb-2 pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Menu</p>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`flex cursor-default items-center gap-3 rounded-xl px-3 py-2.5 text-[13.5px] font-medium ${
              item.active ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Icon d={item.icon} className="h-[18px] w-[18px] opacity-80" />
            {item.label}
            {item.badge && (
              <span className="ml-auto rounded-full bg-violet-500/20 px-2 py-0.5 text-[11px] font-bold text-white ring-1 ring-white/20">
                {item.badge}
              </span>
            )}
            {item.active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />}
          </div>
        ))}
      </nav>

      <p className="px-3 pb-2 pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Workspace</p>
      <div className="space-y-1">
        {workspaces.map((w) => (
          <div key={w.n} className="flex cursor-default items-center gap-3 rounded-xl px-3 py-2 text-[13px] text-slate-600">
            <span className={`h-2.5 w-2.5 rounded-full ${w.c}`} />
            {w.n}
            <span className="ml-auto text-xs text-slate-400">{w.count}</span>
          </div>
        ))}
      </div>

      <div className="relative mt-auto overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-violet-600 to-fuchsia-600 p-4 text-white">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15 blur-sm" />
        <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-black/15 blur-sm" />
        <p className="relative font-display text-[14px] font-bold">Go Pro ✨</p>
        <p className="relative mt-1 text-[12px] leading-relaxed text-white/75">
          Unlock AI priorities, unlimited projects & insights.
        </p>
        <div className="relative mt-3 rounded-xl bg-white py-2 text-center text-[13px] font-bold text-slate-900">
          Upgrade now
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-slate-50/80 p-2.5">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-slate-900 to-slate-700 text-[11px] font-bold text-white">
          AK
        </div>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold">Aarav Kumar</p>
          <p className="text-[11px] text-slate-500">aarav@taskflow.io</p>
        </div>
      </div>
    </aside>
  );
}
