"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { CLIENT_DATA } from "@/config";

export default function SocialFooter() {
  const { socials, whatsappNumber } = CLIENT_DATA;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.85, duration: 0.5 }}
      className="mt-auto py-8 px-6 flex flex-col items-center gap-5 border-t border-white/5"
    >
      {/* Ikon Media Sosial */}
      <div className="flex items-center gap-3">
        {/* TikTok Icon (Custom SVG) */}
        {socials.tiktok && (
          <motion.a
            href={socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/10 transition-colors duration-200"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.74-.22-.22-.4-.47-.58-.73v6.56c.02 1.94-.48 3.93-1.63 5.48-1.5 2.03-4.14 3.12-6.61 2.76-2.54-.36-4.8-2.22-5.46-4.75-.81-3.13.78-6.66 3.86-7.66.93-.3 1.92-.38 2.89-.28v4.18c-.85-.22-1.8-.14-2.53.37-.92.65-1.28 1.91-1.01 2.99.35 1.41 1.79 2.41 3.24 2.19 1.4-.21 2.45-1.48 2.42-2.91V0l-.04.02z" />
            </svg>
          </motion.a>
        )}

        {/* Instagram Icon */}
        {socials.instagram && (
          <motion.a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/10 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </motion.a>
        )}

        {/* LinkedIn Icon */}
        {socials.linkedin && (
          <motion.a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/10 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
        )}

        {/* WhatsApp Direct Chat */}
        <motion.a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/10 transition-colors duration-200"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Teks Hak Cipta */}
      <div className="text-center">
        <p className="text-[9px] text-slate-600 font-medium tracking-wider uppercase">
          © {new Date().getFullYear()} {CLIENT_DATA.profile.name}. {socials.copyrightText}
        </p>
      </div>
    </motion.footer>
  );
}
