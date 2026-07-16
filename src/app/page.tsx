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

      {/* ─── Floating WhatsApp FAB ─── */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Salam%20Azlan%2C%20saya%20ingin%20bertanya%20tentang%20hartanah.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi via WhatsApp"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 1.2,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full bg-green-500 shadow-lg shadow-green-500/40 flex items-center justify-center glow-emerald"
        style={{ boxShadow: "0 0 24px 4px rgba(34,197,94,0.4)" }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Ping ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping" />
      </motion.a>
    </div>
  );
}
