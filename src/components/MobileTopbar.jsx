import Icon from "./Icon.jsx";

export default function MobileTopbar() {
  return (
    <div className="relative z-10 flex items-center justify-between px-5 pt-5 lg:hidden">
      <div className="flex items-center gap-2.5">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
        </div>
        <div>
          <p className="font-display text-[15px] font-bold leading-none">Taskflow</p>
          <p className="text-[11px] text-slate-500">Stay in flow</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200">
          <Icon d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
        </div>
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 p-[2px]">
          <div className="grid h-full w-full place-items-center rounded-full bg-white text-xs font-bold">AK</div>
        </div>
      </div>
    </div>
  );
}
