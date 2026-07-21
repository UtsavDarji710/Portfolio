export function GradientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[120px] animate-float-slow" />
      <div className="absolute -right-40 top-40 h-[32rem] w-[32rem] rounded-full bg-accent/25 blur-[120px] animate-float" />
      <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px] animate-float-slow" />
    </div>
  );
}

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-60">
      <div className="absolute left-[10%] top-[20%] h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm animate-float-slow" />
      <div className="absolute right-[15%] top-[30%] h-16 w-16 rounded-full border border-primary/20 bg-primary/5 animate-float" />
      <div className="absolute bottom-[20%] left-[20%] h-20 w-20 rotate-45 rounded-xl border border-accent/20 bg-accent/5 animate-float" />
    </div>
  );
}
