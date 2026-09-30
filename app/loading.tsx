export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="container-x flex min-h-[60dvh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-line border-t-brand-1" />
      <p className="text-sm text-muted">Loading...</p>
    </div>
  );
}
