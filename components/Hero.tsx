"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Briefcase, Download, Linkedin, Mail } from "lucide-react";
import { LINKEDIN_URL, RESUME_PATH, heroBadges, profile, stats } from "@/data/portfolio";
import { Badge } from "./Badge";
import { HeroBackground } from "./HeroBackground";
import { ProfileImage } from "./ProfileImage";
import { StatCounter } from "./StatCounter";
import { TypingText } from "./TypingText";

export function Hero() {
  const reduce = useReducedMotion();
  const words = profile.name.split(" ");

  return (
    <section aria-labelledby="hero-title" className="relative isolate">
      <HeroBackground />
      <div className="container-x grid min-h-dvh content-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-8">
        <div>
          <Badge variant="live" className="mb-6">
            {profile.availability}
          </Badge>

          <h1 id="hero-title" className="font-display text-[clamp(2.75rem,9vw,5rem)] font-bold leading-[1.05] tracking-tight">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true" className="flex flex-wrap gap-x-4">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={i === words.length - 1 ? "gradient-text" : undefined}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <div className="mt-4">
            <TypingText words={profile.rotatingTitles} />
          </div>

          <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">{profile.heroIntro}</p>

          <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:flex sm:flex-wrap">
            <Link href="/experience" className="btn btn-primary">
              <Briefcase className="h-4 w-4" aria-hidden="true" /> View Experience
            </Link>
            <a href={RESUME_PATH} download className="btn btn-ghost">
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Linkedin className="h-4 w-4" aria-hidden="true" /> Connect on LinkedIn
            </a>
            <Link href="/contact" className="btn btn-ghost">
              <Mail className="h-4 w-4" aria-hidden="true" /> Contact Me
            </Link>
          </div>
        </div>

        {/* Profile photo with gradient ring, glow, floating animation and badges */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto w-full max-w-[min(20rem,80vw)] lg:max-w-[26rem]"
        >
          <div className="relative animate-float">
            <div aria-hidden="true" className="gradient-bg absolute -inset-1.5 rounded-[2.25rem] opacity-80 blur-md" />
            <div className="gradient-bg relative rounded-[2.1rem] p-1">
              <ProfileImage priority sizes="(max-width: 1024px) 80vw, 416px" />
            </div>
            <div className="glass absolute -left-1 bottom-6 flex animate-float-slow items-center gap-2 rounded-2xl px-3.5 py-2 text-sm font-semibold shadow-lg sm:-left-6">
              <BadgeCheck className="h-4 w-4 text-brand-1" aria-hidden="true" /> {heroBadges[0]}
            </div>
            <div className="glass absolute -right-1 top-6 animate-float-slow rounded-2xl px-3.5 py-2 text-sm font-semibold shadow-lg [animation-delay:-3s] sm:-right-6">
              {heroBadges[1]}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-x pb-12 sm:pb-16">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <StatCounter {...stat} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
