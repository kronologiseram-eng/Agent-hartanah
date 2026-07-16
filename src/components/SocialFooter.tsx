"use client";

import { motion } from "framer-motion";
import { CONFIG } from "@/config";

// SVG Icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface SocialFooterProps {
  animationDelay?: number;
}

export default function SocialFooter({ animationDelay = 0 }: SocialFooterProps) {
  const { socials, trustBar, developer } = CONFIG;

  const socialLinks = [
    {
      label: "WhatsApp",
      href: `https://wa.me/${CONFIG.whatsappNumber}`,
      icon: <WhatsAppIcon />,
      hoverColor: "hover:text-green-400",
      bgColor: "hover:bg-green-500/15 hover:border-green-500/30",
    },
    {
      label: "TikTok",
      href: socials.tiktok,
      icon: <TikTokIcon />,
      hoverColor: "hover:text-pink-400",
      bgColor: "hover:bg-pink-500/15 hover:border-pink-500/30",
    },
    {
      label: "Instagram",
      href: socials.instagram,
      icon: <InstagramIcon />,
      hoverColor: "hover:text-purple-400",
      bgColor: "hover:bg-purple-500/15 hover:border-purple-500/30",
    },
    {
      label: "LinkedIn",
      href: socials.linkedin,
      icon: <LinkedInIcon />,
      hoverColor: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/15 hover:border-blue-500/30",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay, ease: "easeOut" }}
      className="px-4 pb-10 pt-2"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-[10px] text-slate-600 uppercase tracking-widest">
          Ikuti Saya
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-3 mb-8">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            initial={{ opacity: 0, scale: 0, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: animationDelay + index * 0.08,
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className={`
              w-12 h-12 rounded-2xl glass-card flex items-center justify-center
              text-slate-400 transition-all duration-300 group
              ${social.hoverColor} ${social.bgColor} border-white/5
            `}
          >
            <span className="transition-transform duration-300 group-hover:scale-110">
              {social.icon}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Ratings Trust bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: animationDelay + 0.5, duration: 0.6 }}
        className="glass-card rounded-2xl p-4 mb-6 flex items-center gap-3 border-white/5"
      >
        <div className="flex -space-x-2 shrink-0">
          {trustBar.emojis.map((emoji, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center text-sm"
            >
              {emoji}
            </div>
          ))}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  className="w-3 h-3 text-yellow-400 fill-yellow-400"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            <span className="text-xs font-bold text-white ml-1">{trustBar.rating}</span>
          </div>
          <p className="text-[10px] text-slate-400 truncate">
            {trustBar.text}
          </p>
        </div>
        <div className="shrink-0 text-xl">🏆</div>
      </motion.div>

      {/* Copyright */}
      <div className="text-center space-y-1.5">
        <p className="text-[10px] text-slate-600">
          © {new Date().getFullYear()} {CONFIG.profile.name}. Hak Cipta Terpelihara.
        </p>
        <p className="text-[10px] text-slate-700">
          Dibina oleh{" "}
          <span className="text-gradient-gold font-semibold text-[10px]">
            {developer.name}
          </span>
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-[9px] text-slate-600">
            {developer.lineText}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
