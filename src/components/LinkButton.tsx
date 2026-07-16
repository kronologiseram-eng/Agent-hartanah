"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface LinkButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  variant?: "primary" | "secondary" | "ghost";
  animationDelay?: number;
  external?: boolean;
}

export default function LinkButton({
  href,
  icon,
  label,
  sublabel,
  variant = "secondary",
  animationDelay = 0,
  external = false,
}: LinkButtonProps) {
  // Pilihan styling mengikut warna tema butang
  const variantClasses = {
    primary: "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/20 border-t border-white/20",
    secondary: "glass-card text-white border-white/5 hover:border-white/10 hover:bg-white/[0.02]",
    ghost: "glass-card text-white border-white/5 hover:border-white/10 hover:bg-white/[0.01]",
  };

  const glowEffect = variant === "primary" ? { boxShadow: "0 0 20px 2px rgba(16,185,129,0.3)" } : {};

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: animationDelay }}
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.985 }}
      style={glowEffect}
      className={`w-full p-3.5 rounded-2xl flex items-center gap-3.5 transition-all duration-200 cursor-pointer ${variantClasses[variant]}`}
    >
      {/* Container Ikon */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
        variant === "primary" ? "bg-white/15" : "bg-slate-900/60 border border-white/5"
      }`}>
        {icon}
      </div>

      {/* Teks */}
      <div className="flex-1 min-w-0 text-left">
        <p className="text-xs font-bold leading-snug tracking-tight truncate">{label}</p>
        {sublabel && (
          <p className={`text-[10px] leading-relaxed mt-0.5 truncate ${
            variant === "primary" ? "text-emerald-100" : "text-slate-400"
          }`}>
            {sublabel}
          </p>
        )}
      </div>

      {/* Anak Panah Kanan */}
      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
        variant === "primary" ? "text-white" : "text-slate-500"
      }`} />
    </motion.a>
  );
}
