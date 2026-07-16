"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, BedDouble, Bath, Maximize2, Star } from "lucide-react";
import { CONFIG } from "@/config"; // Import config

interface PropertyGridProps {
  animationDelay?: number;
}

// PEMETAAN WARNA TEMA UNTUK KAD RUMAH & BUTANG
const themeStyles = {
  emerald: {
    headerBar: "bg-gradient-to-b from-emerald-400 to-emerald-600",
    textTheme: "text-emerald-400",
    btnTheme: "from-emerald-600 to-emerald-500 border-emerald-400/30 hover:shadow-emerald-500/20",
    iconTheme: "text-emerald-400",
  },
  rose: {
    headerBar: "bg-gradient-to-b from-rose-400 to-rose-600",
    textTheme: "text-rose-400",
    btnTheme: "from-rose-600 to-rose-500 border-rose-400/30 hover:shadow-rose-500/20",
    iconTheme: "text-rose-400",
  },
  blue: {
    headerBar: "bg-gradient-to-b from-blue-400 to-blue-600",
    textTheme: "text-blue-400",
    btnTheme: "from-blue-600 to-blue-500 border-blue-400/30 hover:shadow-blue-500/20",
    iconTheme: "text-blue-400",
  },
  gold: {
    headerBar: "bg-gradient-to-b from-yellow-400 to-yellow-600",
    textTheme: "text-yellow-400",
    btnTheme: "from-yellow-600 to-yellow-500 border-yellow-400/30 hover:shadow-yellow-500/20",
    iconTheme: "text-yellow-400",
  },
};

export default function PropertyGrid({ animationDelay = 0 }: PropertyGridProps) {
  const WHATSAPP_NUMBER = CONFIG.whatsappNumber;
  const currentTheme = themeStyles[CONFIG.theme || "emerald"];

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay, ease: "easeOut" }}
      className="px-4 mb-6"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <div className={`w-1.5 h-4 rounded-full ${currentTheme.headerBar}`} />
            <h2 className="text-sm font-bold text-white tracking-wide">
              Projek Hangat & Listing Terpilih
            </h2>
          </div>
          <p className="text-[11px] text-slate-500 ml-3">
            Hartanah pilihan eksklusif oleh Azlan Syafiq
          </p>
        </div>
        <div className="flex items-center gap-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-2.5 py-1">
          <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
          <span className="text-[10px] text-yellow-400 font-semibold">Terpilih</span>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-2 gap-3">
        {CONFIG.properties.map((property, index) => {
          const encodedMsg = encodeURIComponent(property.whatsappMsg);

          return (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: animationDelay + index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-card rounded-2xl overflow-hidden group border-white/5"
            >
              {/* Property Image */}
              <div className="relative h-28 overflow-hidden">
                <img
                  src={property.imageUrl}
                  alt={`${property.title} — ${property.location}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Badge */}
                {property.badge && (
                  <div
                    className={`absolute top-2 left-2 bg-gradient-to-r ${property.badgeColor || "from-emerald-500 to-teal-600"} rounded-full px-2 py-0.5`}
                  >
                    <span className="text-[9px] font-bold text-white">
                      {property.badge}
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-xs font-extrabold text-white leading-none">
                    {property.price}
                  </p>
                  {property.priceMonthly && (
                    <p className="text-[9px] text-slate-300 mt-0.5">
                      {property.priceMonthly}
                    </p>
                  )}
                </div>
              </div>

              {/* Property Info */}
              <div className="p-2.5">
                {/* Type label (Ikut warna tema) */}
                <p className={`text-[9px] ${currentTheme.textTheme} font-semibold uppercase tracking-wider mb-0.5`}>
                  {property.type}
                </p>

                <h3 className="text-xs font-bold text-white leading-tight mb-1.5 truncate">
                  {property.title}
                </h3>

                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="w-2.5 h-2.5 text-slate-500 shrink-0" />
                  <span className="text-[10px] text-slate-400 truncate">
                    {property.location}
                  </span>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/5">
                  <div className="flex items-center gap-0.5">
                    <BedDouble className="w-2.5 h-2.5 text-slate-500" />
                    <span className="text-[9px] text-slate-400">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <Bath className="w-2.5 h-2.5 text-slate-500" />
                    <span className="text-[9px] text-slate-400">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <Maximize2 className="w-2.5 h-2.5 text-slate-500" />
                    <span className="text-[9px] text-slate-400">{property.sqft} sqft</span>
                  </div>
                </div>

                {/* CTA Button (Ikut warna tema) */}
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`flex items-center justify-center gap-1.5 w-full py-1.5 rounded-xl bg-gradient-to-r ${currentTheme.btnTheme} transition-all duration-200 hover:shadow-lg`}
                >
                  <MessageCircle className="w-3 h-3 text-white" />
                  <span className="text-[10px] font-bold text-white">Tanya Unit</span>
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View All (Ikut warna tema) */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Salam%20Azlan%2C%20saya%20ingin%20melihat%20semua%20listing%20hartanah%20anda.`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl glass-card border-white/5 transition-all duration-200 hover:border-white/10`}
      >
        <span className="text-xs text-slate-400 font-medium">
          Lihat Semua Listing
        </span>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 h-3 ${currentTheme.iconTheme}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.a>
    </motion.section>
  );
}
