export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-300/50 via-fuchsia-200/50 to-sky-200/60 blur-3xl" />
      <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl" />
      <div className="absolute top-64 -right-20 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="bg-grid absolute inset-0" />
    </div>
  );
}
