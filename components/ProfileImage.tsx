"use client";

import { useState } from "react";
import Image from "next/image";
import { PROFILE_IMAGE_PATH, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  priority?: boolean;
  className?: string;
  sizes?: string;
}

/**
 * Profile photo with an elegant initials fallback.
 * // Replace /public/profile.jpg with your photo (recommended 800x800, square)
 */
export function ProfileImage({ priority = false, className, sizes = "(max-width: 768px) 80vw, 420px" }: ProfileImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative aspect-square w-full overflow-hidden rounded-[2rem] bg-surface", className)}>
      {failed ? (
        <div
          role="img"
          aria-label={`${profile.name} avatar`}
          className="gradient-bg flex h-full w-full items-center justify-center"
        >
          <span className="font-display text-[clamp(3.5rem,14vw,6rem)] font-bold text-white">{profile.initials}</span>
        </div>
      ) : (
        <Image
          src={PROFILE_IMAGE_PATH}
          alt={`Portrait of ${profile.name}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
