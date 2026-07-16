"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  UserCheck,
  Home,
  Calculator,
  Sparkles,
} from "lucide-react";
import { CONFIG } from "@/config";
import AgentProfile from "@/components/AgentProfile";
import StatsGrid from "@/components/StatsGrid";
import LinkButton from "@/components/LinkButton";
import PropertyGrid from "@/components/PropertyGrid";
import SocialFooter from "@/components/SocialFooter";

const WHATSAPP_NUMBER = CONFIG.whatsappNumber;

const iconMap = {
  Calculator: <Calculator className="w-5 h-5 text-white" />,
  UserCheck: <UserCheck className="w-5 h-5 text-emerald-400" />,
  Home: <Home className="w-5 h-5 text-yellow-400" />,
};

const themeStyles = {
  emerald: {
    glow: "radial-gradient(circle, #10b981 0%, transparent 70%)",
    statusDot: "bg-emerald-500",
    borderHint: "border-emerald-500/15",
    textHint: "text-emerald-400",
  },
  rose: {
    glow: "radial-gradient(circle, #f43f5e 0%, transparent 70%)",
    statusDot: "bg-rose-500",
    borderHint: "border-rose-500/15",
    textHint: "text-rose-400",
  },
  blue: {
    glow: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
    statusDot: "bg-blue-500",
    borderHint: "border-blue-500/15",
    textHint: "text-blue-400",
  },
  gold: {
    glow: "radial-gradient(circle, #eab308 0%, transparent 70%)",
    statusDot: "bg-yellow-500",
    borderHint: "border-yellow-500/15",
    textHint: "text-yellow-400",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const currentTheme = themeStyles[CONFIG.theme || "emerald"];

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* ── Ambient background gradients ── */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-slate-950" />
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: currentTheme.glow, filter: "blur(60px)" }}
        />
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #eab308 0%, transparent 70%)", filter: "blur(70px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full opacity-10"
          style={{ background: currentTheme.glow, filter: "blur(80px)" }}
        />
      </div>

      {/* ── Main layout ── */}
      <div className="relative z-10 min-h-screen flex justify-center">
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[480px] flex flex-col"
        >
          {/* ── Top status bar ── */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center justify-between px-5 py-3"
          >
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${currentTheme.statusDot} animate-pulse`} />
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                {CONFIG.profile.statusText}
              </span>
            </div>
            <div className="flex items-center gap-1.5 glass-card rounded-full px-3 py-1">
              <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
              <span className="text-[10px] text-yellow-400 font-semibold">
                {CONFIG.profile.badgeText}
              </span>
            </div>
          </motion.div>

          <AgentProfile animationDelay={0.15} />
          <StatsGrid animationDelay={0.3} />

          {/* ── CTA Section label ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="flex items-center gap-3 px-4 mb-3"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-[10px] text-slate-600 uppercase tracking-widest">
              Khidmat Kami
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>

          {/* ── CTA Buttons ── */}
          <div className="flex flex-col gap-3 px-4 mb-7">
            {CONFIG.ctaButtons.map((btn, index) => (
              <LinkButton
                key={btn.label}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(btn.textTemplate)}`}
                icon={iconMap[btn.iconType]}
                label={btn.label}
                sublabel={btn.sublabel}
                variant={btn.variant}
                animationDelay={0.42 + index * 0.08}
                external
              />
            ))}
          </div>

          {/* ── WhatsApp Hint Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className={`mx-4 mb-6 glass-card rounded-2xl p-3.5 flex items-center gap-3 ${currentTheme.borderHint}`}
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shrink-0">
              <MessageCircle className={`w-5 h-5 ${currentTheme.textHint}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white mb-0.5">
                Balas Pantas via WhatsApp
              </p>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Lazimnya balas dalam{" "}
                <span className={`${currentTheme.textHint} font-medium`}>&lt; 15 minit</span> pada waktu bekerja
              </p>
            </div>
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0 bg-green-500 hover:bg-green-400 transition-colors duration-200 rounded-xl px-3 py-2"
            >
              <span className="text-[11px] font-bold text-white">Whatsapp</span>
            </motion.a>
          </motion.div>

          <PropertyGrid animationDelay={0.7} />
          <SocialFooter animationDelay={0.85} />
        </motion.main>
      </div>
    </div>
  );
}
