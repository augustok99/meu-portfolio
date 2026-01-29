import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Footer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-8 py-10", className)} {...props} />;
}

export function FooterContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("grid gap-8 sm:grid-cols-2 md:grid-cols-4", className)}
      {...props}
    />
  );
}

export function FooterColumn({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
}

export function FooterBottom({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm",
        "sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
      {...props}
    />
  );
}
