"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Menu, X } from "lucide-react";
import { LINKEDIN_URL, navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Close the drawer on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={`${profile.name} – home`} className="flex items-center gap-2.5 font-display text-lg font-bold">
          <span className="gradient-bg inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm text-white">{profile.initials}</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "relative inline-flex min-h-11 items-center px-3.5 text-sm font-medium transition-colors",
                isActive(link.href) ? "text-fg" : "text-muted hover:text-fg",
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span layoutId="nav-indicator" className="gradient-bg absolute inset-x-3 bottom-1.5 h-0.5 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface/60 transition-colors hover:border-brand-1/60 sm:inline-flex"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface/60 lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[70] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
              className="absolute right-0 top-0 flex h-dvh w-[min(85vw,20rem)] flex-col gap-2 border-l border-line bg-bg p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-lg font-bold">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center rounded-xl px-4 text-base font-medium",
                      isActive(link.href) ? "gradient-bg text-white" : "text-fg hover:bg-surface",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost mt-auto"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
              </a>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
