"use client";

import { motion } from "framer-motion";
import { BadgeCheck, MapPin, Building2 } from "lucide-react";
import Image from "next/image";
import { CONFIG } from "@/config";

interface AgentProfileProps {
  animationDelay?: number;
}

const themeStyles = {
  emerald: {
    avatarGlow: "from-emerald-400 via-yellow-400 to-emerald-600",
    textTheme: "text-emerald-400",
    borderLocation: "border-emerald-500/20",
    iconLocation: "text-emerald-400",
  },
  rose: {
    avatarGlow: "from-rose-400 via-yellow-400 to-rose-600",
    textTheme: "text-rose-400",
    borderLocation: "border-rose-500/20",
    iconLocation: "text-rose-400",
  },
  blue: {
    avatarGlow: "from-blue-400 via-yellow-400 to-blue-600",
    textTheme: "text-blue-400",
    borderLocation: "border-blue-500/20",
    iconLocation: "text-blue-400",
  },
  gold: {
    avatarGlow: "from-yellow-400 via-amber-400 to-yellow-600",
    textTheme: "text-yellow-400",
    borderLocation: "border-yellow-500/20",
    iconLocation: "text-yellow-400",
  },
};

export default function AgentProfile({ animationDelay = 0 }: AgentProfileProps) {
  const { profile } = CONFIG;
  const currentTheme = themeStyles[CONFIG.theme || "emerald"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: animationDelay, ease: "easeOut" }}
      className="flex flex-col items-center text-center pt-10 pb-6 px-4"
    >
      {/* Avatar Ring + Image */}
      <div className="relative mb-5">
        <div className={`absolute -inset-1.5 rounded-full bg-gradient-to-br ${currentTheme.avatarGlow} opacity-75 blur-sm`} />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-2.5 rounded-full border-2 border-dashed border-yellow-400/40"
        />
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-yellow-400/60">
          <Image
            src={profile.avatarUrl}
            alt={`${profile.name} — ${profile.title}`}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute bottom-0.5 right-0.5 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        </div>
      </div>

      {/* Name */}
      <div className="flex items-center gap-2 mb-1.5">
        <h1 className="text-2xl font-bold tracking-tight text-white">{profile.name}</h1>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: animationDelay + 0.4, type: "spring", stiffness: 300 }}
        >
          <BadgeCheck className="w-6 h-6 text-yellow-400 fill-yellow-400/20" />
        </motion.div>
      </div>

      {/* Title */}
      <p className={`text-sm font-semibold tracking-widest uppercase ${currentTheme.textTheme} mb-3`}>
        {profile.title}
      </p>

      {/* Tagline */}
      <p className="text-xs text-slate-400 leading-relaxed max-w-xs mb-5">
        Membantu anda <span className="text-white font-medium">beli, jual & labur</span> hartanah dengan keyakinan penuh di pasaran {profile.location}.
      </p>

      {/* License Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: animationDelay + 0.5, duration: 0.5 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full mb-3 glass-card border-yellow-400/20"
      >
        <Building2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
        <span className="text-xs font-semibold text-yellow-300 tracking-wide">
          {profile.renNumber}
        </span>
        <span className="text-slate-600 text-xs">•</span>
        <span className="text-xs font-medium text-slate-300">
          {profile.agency}
        </span>
      </motion.div>

      {/* Location Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: animationDelay + 0.6, duration: 0.5 }}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card ${currentTheme.borderLocation}`}
      >
        <MapPin className={`w-3 h-3 ${currentTheme.iconLocation} shrink-0`} />
        <span className="text-xs text-slate-300 font-medium">
          {profile.location}
        </span>
      </motion.div>

      <div className="mt-6 w-full max-w-xs flex items-center gap-3">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-[10px] text-slate-600 uppercase tracking-widest">Profil</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </motion.div>
  );
}
