import { stats } from "../data/mock.js";
import Icon from "./Icon.jsx";

export default function StatsGrid() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-3xl bg-white/80 p-4 shadow-[0_8px_30px_-12px_rgb(15_23_42/0.15)] ring-1 ring-white backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <div className={`grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${s.bg}`}>
              <Icon d={s.icon} className="h-5 w-5" />
            </div>
            <span className="text-[11px] font-medium text-slate-400">{s.sub}</span>
          </div>
          <p className="font-display mt-3 text-[26px] font-extrabold leading-none">{s.value}</p>
          <p className="mt-1 text-[12.5px] font-medium text-slate-500">{s.label}</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className={`h-full rounded-full ${s.bar} ${s.barBg}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
