import { type ReactNode } from "react";

const classByVariant = {
  neutral: "badge badge--neutral",
  know: "badge badge--know",
  learned: "badge badge--learned",
  aspiring: "badge badge--aspiring",
} as const;

export function Badge({
  children,
  variant = "neutral",
}: {
  children: ReactNode;
  variant?: keyof typeof classByVariant;
}) {
  return (
    <span className={classByVariant[variant]}>
      {children}
    </span>
  );
}
