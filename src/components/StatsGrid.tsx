"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Home } from "lucide-react";
import { CONFIG } from "@/config";

// Pemetaan Ikon secara selamat
const iconMap = {
  Trophy: <Trophy className="w-4 h-4" />,
  TrendingUp: <TrendingUp className="w-4 h-4" />,
  Home: <Home className="w-4 h-4" />,
};

const colorStyles = {
  yellow: {
    gradient: "from-yellow-500/20 to-yellow-600/5",
    iconColor: "text-yellow-400",
    accent: "from-yellow-400 to-yellow-600",
  },
  emerald: {
    gradient: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
    accent: "from-emerald-400 to-emerald-600",
  },
  sky: {
    gradient: "from-sky-500/20 to-sky-600/5",
    iconColor: "text-sky-400",
    accent: "from-sky-400 to-sky-600",
  },
};

interface StatsGridProps {
  animationDelay?: number;
}

export default function StatsGrid({ animationDelay = 0 }: StatsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay, ease: "easeOut" }}
      className="px-4 mb-6"
    >
      <div className="grid grid-cols-3 gap-2.5">
        {CONFIG.stats.map((stat, index) => {
          const color = colorStyles[stat.colorType];

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: animationDelay + index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 18,
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="relative overflow-hidden rounded-2xl glass-card p-3.5 flex flex-col items-center text-center cursor-default border-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-100`} />
              <div className="absolute inset-0 shimmer opacity-50 rounded-2xl" />

              <div className="relative z-10">
                <div className={`${color.iconColor} mb-1.5 flex justify-center opacity-80`}>
                  {iconMap[stat.iconType]}
                </div>
                <p className="text-base font-extrabold text-white leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] text-slate-400 leading-tight font-medium">
                  {stat.label}
                </p>
              </div>

              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full bg-gradient-to-r ${color.accent}`} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
