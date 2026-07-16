"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  UserCheck,
  Home,
  Calculator,
  Sparkles,
} from "lucide-react";
import AgentProfile from "@/components/AgentProfile";
import StatsGrid from "@/components/StatsGrid";
import LinkButton from "@/components/LinkButton";
import PropertyGrid from "@/components/PropertyGrid";
import SocialFooter from "@/components/SocialFooter";

const WHATSAPP_NUMBER = "60123456789";

const ctaButtons = [
  {
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Salam%20Azlan%2C%20saya%20ingin%20semak%20kelayakan%20loan%20saya.%20Boleh%20bantu%3F`,
    icon: <Calculator className="w-5 h-5 text-white" />,
    label: "Semak Kelayakan Loan",
    sublabel: "Percuma & tanpa komitmen • via WhatsApp",
    variant: "primary" as const,
  },
  {
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Salam%20Azlan%2C%20saya%20ingin%20konsultasi%20mengenai%20jual%2Fbeli%20rumah.`,
    icon: <UserCheck className="w-5 h-5 text-emerald-400" />,
    label: "Konsultasi Jual/Beli Rumah",
    sublabel: "Dapatkan nasihat profesional percuma",
    variant: "secondary" as const,
  },
  {
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Salam%20Azlan%2C%20saya%20nak%20tahu%20tentang%20senarai%20rumah%20mampu%20milik%202026.`,
    icon: <Home className="w-5 h-5 text-yellow-400" />,
    label: "Senarai Rumah Mampu Milik 2026",
    sublabel: "Projek baru & subsidi kerajaan tersedia",
    variant: "ghost" as const,
  },
];

// Stagger container variants
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
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* ─── Ambient background gradients ─── */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        {/* Deep background */}
        <div className="absolute inset-0 bg-slate-950" />

        {/* Emerald radial top-left */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #10b981 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Gold radial top-right */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #eab308 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Emerald radial bottom-right */}
        <div
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #10b981 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Subtle center gold glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, #f59e0b 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ─── Main layout: centered 480px column ─── */}
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
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                Dalam Talian
              </span>
            </div>
            <div className="flex items-center gap-1.5 glass-card rounded-full px-3 py-1">
              <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
              <span className="text-[10px] text-yellow-400 font-semibold">
                Ejen Teratas IQI 2024
              </span>
            </div>
          </motion.div>

          {/* ── Agent Profile ── */}
          <AgentProfile animationDelay={0.15} />

          {/* ── Stats Grid ── */}
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
            {ctaButtons.map((btn, index) => (
              <LinkButton
                key={btn.label}
                href={btn.href}
                icon={btn.icon}
                label={btn.label}
                sublabel={btn.sublabel}
                variant={btn.variant}
                animationDelay={0.42 + index * 0.08}
                external
              />
            ))}
          </div>

          {/* ── WhatsApp floating hint ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="mx-4 mb-6 glass-card rounded-2xl p-3.5 flex items-center gap-3 border-emerald-500/15"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white mb-0.5">
                Balas Pantas via WhatsApp
              </p>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Lazimnya balas dalam{" "}
                <span className="text-emerald-400 font-medium">
                  &lt; 15 minit
                </span>{" "}
                pada waktu bekerja
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

          {/* ── Property Grid ── */}
          <PropertyGrid animationDelay={0.7} />

          {/* ── Social Footer ── */}
          <SocialFooter animationDelay={0.85} />
        </motion.main>
      </div>
    </div>
  );
}
