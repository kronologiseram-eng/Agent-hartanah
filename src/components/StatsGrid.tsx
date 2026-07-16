"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Home } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  gradient: string;
  iconColor: string;
}

const stats: StatItem[] = [
  {
    icon: <Trophy className="w-4 h-4" />,
    value: "5+",
    label: "Tahun Pengalaman",
    gradient: "from-yellow-500/20 to-yellow-600/5",
    iconColor: "text-yellow-400",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    value: "RM50M+",
    label: "Nilai Transaksi",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: <Home className="w-4 h-4" />,
    value: "150+",
    label: "Rumah Terjual",
    gradient: "from-sky-500/20 to-sky-600/5",
    iconColor: "text-sky-400",
  },
];

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
        {stats.map((stat, index) => (
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
            className={`relative overflow-hidden rounded-2xl glass-card p-3.5 flex flex-col items-center text-center cursor-default`}
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-100`}
            />

            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer opacity-50 rounded-2xl" />

            {/* Content */}
            <div className="relative z-10">
              <div
                className={`${stat.iconColor} mb-1.5 flex justify-center opacity-80`}
              >
                {stat.icon}
              </div>
              <p className="text-base font-extrabold text-white leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-[10px] text-slate-400 leading-tight font-medium">
                {stat.label}
              </p>
            </div>

            {/* Bottom accent line */}
            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full bg-gradient-to-r ${
                stat.iconColor === "text-yellow-400"
                  ? "from-yellow-400 to-yellow-600"
                  : stat.iconColor === "text-emerald-400"
                  ? "from-emerald-400 to-emerald-600"
                  : "from-sky-400 to-sky-600"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
