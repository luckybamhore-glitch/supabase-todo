import { tasks } from "../data/mock.js";
import TaskCard from "./TaskCard.jsx";

export default function TaskList() {
  return (
    <div className="mt-4 space-y-3">
      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-slate-400">
        Today&apos;s focus — {tasks.length} tasks
      </p>
      {tasks.map((t) => (
        <TaskCard key={t.id} task={t} />
      ))}

      <div className="grid place-items-center rounded-3xl border-2 border-dashed border-slate-300/80 bg-white/40 py-5 text-[13.5px] font-semibold text-slate-400 backdrop-blur">
        <span>
          <span className="mr-2 inline-grid h-6 w-6 place-items-center rounded-full bg-slate-900 align-middle text-sm text-white">
            +
          </span>
          Add a new task — press <span className="rounded bg-slate-900/5 px-1.5 py-0.5 font-mono text-[12px]">N</span>
        </span>
      </div>
    </div>
  );
}
