import * as React from "react";
import { cn } from "@/lib/utils";

export type HoverBorderGradientButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  innerClassName?: string;
};

// Modern hover-border-gradient button: subtle gradient ring appears on hover
export function HoverBorderGradientButton({ className, innerClassName, children, ...props }: HoverBorderGradientButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full p-[1.5px] transition-all",
        "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background",
        "active:scale-[0.98]",
        className
      )}
    >
      {/* border gradient layer (hidden until hover/focus) */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full opacity-0 blur-[2px] transition-all duration-500",
          "bg-[conic-gradient(from_0deg,theme(colors.primary/60),theme(colors.accent/60),theme(colors.primary/60))]",
          "group-hover:opacity-100 group-focus:opacity-100 animate-[spin_3s_linear_infinite]"
        )}
      />
      {/* inner content */}
      <span
        className={cn(
          "relative inline-flex h-full w-full items-center justify-center rounded-full",
          "bg-background/70 dark:bg-neutral-900/60 backdrop-blur-md text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]",
          "px-6 py-3 text-base font-medium",
          // soft inner sheen
          "after:pointer-events-none after:absolute after:inset-y-0 after:left-[-40%] after:w-[40%] after:rounded-full",
          "after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent after:blur-md after:-skew-x-12",
          "after:transition-transform after:duration-700 group-hover:after:translate-x-[260%]",
          innerClassName
        )}
      >
        {children}
      </span>
    </button>
  );
}

export default HoverBorderGradientButton;
