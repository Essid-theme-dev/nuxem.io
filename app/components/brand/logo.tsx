"use client";

import { clsx } from "clsx";
import Image from "next/image";

type LogoMarkProps = {
  width?: number;
  height?: number;
  className?: string;
};

export function LogoMark({ width = 168, height = 48, className }: LogoMarkProps) {
  return (
    <Image
      src="/logo.svg"
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
};

export function LogoLockup({ collapsed = false }: LogoLockupProps) {
  return collapsed ? (
    <LogoMark width={34} height={34} className="rounded-lg" />
  ) : (
    <LogoMark width={136} height={36} />
  );
}
