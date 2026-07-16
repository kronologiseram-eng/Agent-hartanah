"use client";

import { motion } from "framer-motion";
import { CLIENT_DATA } from "@/config";

export default function StatsGrid() {
  const { stats } = CLIENT_DATA;

  const statItems = [
    { value: stats.experience.value, label: stats.experience.label },
    { value: stats.transactions.value, label: stats.transactions.label },
    { value: stats.sold.value, label: stats.sold.label },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-3 gap-3 px-4 mb-6"
    >
      {statItems.map((stat, i) => (
        <div
          key={i}
          className="glass-card rounded-2xl p-3 text-center flex flex-col justify-center border-white/5"
        >
          <span className="text-lg font-extrabold text-white tracking-tight mb-0.5 block">
            {stat.value}
          </span>
          <span className="text-[9px] text-slate-500 font-medium uppercase tracking-wider block leading-tight">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
