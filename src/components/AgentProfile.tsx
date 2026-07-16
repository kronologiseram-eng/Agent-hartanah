"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";
import { CLIENT_DATA } from "@/config";

export default function AgentProfile() {
  const { profile } = CLIENT_DATA;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="flex flex-col items-center text-center px-6 pt-4 pb-6"
    >
      {/* Avatar Container */}
      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-tr from-emerald-500 via-yellow-500 to-emerald-500 animate-gradient-spin">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-950">
            {/* Tag img biasa supaya mesra domain luar & local public folder */}
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Status Indicator */}
        <span className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-slate-950 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
        </span>
      </div>

      {/* Name and Badges */}
      <div className="flex items-center gap-1.5 mb-1">
        <h2 className="text-2xl font-bold text-white tracking-tight">{profile.name}</h2>
        <ShieldCheck className="w-5 h-5 text-yellow-500 fill-yellow-500/10" />
      </div>

      <p className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase mb-3">
        {profile.title}
      </p>

      <p className="text-xs text-slate-400 leading-relaxed max-w-[320px] mb-4">
        {profile.bio}
      </p>

      {/* Licensing Card */}
      <div className="flex flex-col gap-2 items-center w-full max-w-[280px]">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/5 w-full justify-center">
          <Award className="w-3.5 h-3.5 text-yellow-500" />
          <span className="text-[10px] text-slate-300 font-medium">
            <span className="text-yellow-500 font-bold">{profile.renNumber}</span> • {profile.agency}
          </span>
        </div>
        
        <span className="text-[10px] text-slate-500 flex items-center gap-1">
          📍 {profile.location}
        </span>
      </div>
    </motion.div>
  );
}
