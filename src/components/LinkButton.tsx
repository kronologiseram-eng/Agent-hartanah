"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface LinkButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  sublabel?: string;
  variant?: ButtonVariant;
  animationDelay?: number;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-emerald-600 to-emerald-500 border border-emerald-400/40 glow-emerald text-white",
  secondary:
    "glass-button text-white hover:border-white/20",
  ghost:
    "glass-button text-white border-yellow-400/20 hover:border-yellow-400/40",
};

const iconContainerStyles: Record<ButtonVariant, string> = {
  primary: "bg-white/15 text-white",
  secondary: "bg-white/8 text-emerald-400",
  ghost: "bg-yellow-400/10 text-yellow-400",
};

export default function LinkButton({
  href,
  icon,
  label,
  sublabel,
  variant = "secondary",
  animationDelay = 0,
  external = true,
}: LinkButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: animationDelay, ease: "easeOut" }}
      whileHover={{ scale: 1.025, y: -2 }}
      whileTap={{ scale: 0.975 }}
      className={`
        flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl
        transition-all duration-300 cursor-pointer group relative overflow-hidden
        ${variantStyles[variant]}
      `}
    >
      {/* Hover shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 shimmer rounded-2xl" />
      </div>

      {/* Icon */}
      <div
        className={`
          relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0
          transition-transform duration-300 group-hover:scale-110
          ${iconContainerStyles[variant]}
        `}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="relative z-10 flex-1 text-left">
        <p className="text-sm font-semibold text-white leading-snug">{label}</p>
        {sublabel && (
          <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{sublabel}</p>
        )}
      </div>

      {/* Arrow */}
      <div className="relative z-10 w-7 h-7 rounded-full bg-white/8 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-white/15">
        <svg
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  );
}
