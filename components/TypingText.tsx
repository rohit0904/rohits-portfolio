"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Typing / rotating subtitle. Reduced-motion users get a plain rotation without typing. */
export function TypingText({ words }: { words: string[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(words[index]);
      const t = setTimeout(() => setIndex((i) => (i + 1) % words.length), 2800);
      return () => clearTimeout(t);
    }
    const word = words[index];
    let delay = deleting ? 35 : 75;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setIndex((i) => (i + 1) % words.length);
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, reduce]);

  return (
    <p className="min-h-[2.25rem] font-display text-xl font-semibold sm:text-2xl">
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" className="gradient-text">
        {text}
      </span>
      {!reduce && <span aria-hidden="true" className="ml-0.5 inline-block h-6 w-0.5 translate-y-1 animate-blink bg-brand-2" />}
    </p>
  );
}
