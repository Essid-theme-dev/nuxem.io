"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { publicAssetPath } from "@/app/lib/public-asset";

type LogoMarkProps = {
  width?: number;
  height?: number;
  className?: string;
};

export function LogoMark({ width = 168, height = 48, className }: LogoMarkProps) {
  return (
    <Image
      src={publicAssetPath("/logo.svg")}
      alt="Nuxem logo"
      width={width}
      height={height}
      className={clsx("shrink-0 object-contain", className)}
      priority
    />
  );
}

type LogoLockupProps = {
  collapsed?: boolean;
  tagline?: string;
};

export function LogoLockup({ collapsed = false, tagline }: LogoLockupProps) {
  if (collapsed) {
    return <LogoMark width={34} height={34} className="rounded-lg" />;
  }

  return (
    <div className={clsx("flex flex-col items-center gap-1", tagline && "text-center")}>
      <LogoMark width={136} height={36} />
      {tagline ? (
        <p className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">{tagline}</p>
      ) : null}
    </div>
  );
}
