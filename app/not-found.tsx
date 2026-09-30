import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70dvh] flex-col items-center justify-center text-center">
      <p className="gradient-text font-display text-8xl font-bold">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold">This page does not exist</h1>
      <p className="mt-3 max-w-md text-muted">The link may be broken or the page may have moved. Head back to the homepage to keep exploring.</p>
      <Link href="/" className="btn btn-primary mt-8">
        <Home className="h-4 w-4" aria-hidden="true" /> Back to home
      </Link>
    </section>
  );
}
