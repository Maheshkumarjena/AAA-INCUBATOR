import * as React from "react";
import { cn } from "@/lib/utils";

export type MagicBorderButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  innerClassName?: string;
};

export function MagicBorderButton({ className, innerClassName, children, ...props }: MagicBorderButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none",
        "focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        "transition-transform active:scale-[0.98] hover:shadow-[0_0_30px_rgba(57,59,178,0.35)]",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          "relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full",
          "bg-slate-950 px-5 py-1 text-base font-medium text-white backdrop-blur-3xl",
          // sheen
          "after:pointer-events-none after:absolute after:inset-y-0 after:left-[-40%] after:w-[40%] after:rounded-full",
          "after:bg-gradient-to-r after:from-transparent after:via-white/35 after:to-transparent after:blur-md after:-skew-x-12",
          "after:transition-transform after:duration-700 group-hover:after:translate-x-[260%]",
          innerClassName
        )}
      >
        {children}
      </span>
    </button>
  );
}

export default MagicBorderButton;
