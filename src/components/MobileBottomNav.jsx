export default function MobileBottomNav() {
  return (
    <div className="sticky bottom-4 z-10 mx-4 flex items-center justify-around rounded-3xl bg-slate-900/95 px-4 py-3 text-white shadow-2xl backdrop-blur-xl lg:hidden">
      {["⌂", "☑", "＋", "📅", "👤"].map((ico, i) => (
        <span
          key={i}
          className={`grid h-11 w-11 place-items-center rounded-2xl text-lg ${
            i === 2
              ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg -translate-y-2 ring-4 ring-[#f4f5fb]"
              : i === 0
                ? "bg-white/15"
                : "text-white/60"
          }`}
        >
          {ico}
        </span>
      ))}
    </div>
  );
}
