/** Lightweight CSS-only background: animated gradient blobs + a masked grid. */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="hero-grid absolute inset-0" />
      <div className="absolute -left-24 top-10 h-72 w-72 animate-blob rounded-full bg-brand-1/25 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -right-24 top-40 h-72 w-72 animate-blob rounded-full bg-brand-2/20 blur-3xl [animation-delay:-6s] sm:h-96 sm:w-96" />
    </div>
  );
}
