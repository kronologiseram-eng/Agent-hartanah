"use client";

import { motion } from "framer-motion";
import { Bed, Bath, LayoutGrid, MessageCircle, Star } from "lucide-react";
import { CLIENT_DATA } from "@/config";

export default function PropertyGrid() {
  const { properties, whatsappNumber } = CLIENT_DATA;

  return (
    <div className="px-4 mb-8">
      {/* Header Seksyen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="flex items-center justify-between mb-4"
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 bg-emerald-500 rounded-full" />
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
            Projek Hangat & Listing Terpilih
          </h3>
        </div>
        <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-500/20">
          <Star className="w-2.5 h-2.5 text-yellow-500 fill-yellow-500" />
          <span className="text-[9px] text-yellow-500 font-bold">Terpilih</span>
        </div>
      </motion.div>

      {/* Grid Kad Rumah */}
      <div className="grid grid-cols-2 gap-3">
        {properties.map((property, idx) => {
          // Buat teks mesej whatsapp automatik mengikut nama rumah & harga
          const messageText = `Salam, saya berminat nak tanya tentang unit ${property.title} di ${property.location} yang berharga ${property.price}.`;
          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

          return (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col border-white/5"
            >
              {/* Bekas Gambar */}
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {/* Tag Lencana (Panas/Eksklusif) */}
                {property.tag && (
                  <span className="absolute top-2 left-2 text-[8px] font-extrabold text-white bg-emerald-500/95 backdrop-blur-sm px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {property.tag}
                  </span>
                )}
              </div>

              {/* Kandungan Butiran Rumah */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div className="mb-2">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                    {property.location.split(",")[0]}
                  </p>
                  <h4 className="text-[11px] font-extrabold text-white truncate leading-snug">
                    {property.title}
                  </h4>
                  <div className="flex items-baseline gap-1 mt-1.5">
                    <span className="text-[11px] font-black text-white">{property.price}</span>
                    <span className="text-[8px] text-emerald-400 font-medium">
                      {property.monthlyPrice}
                    </span>
                  </div>
                </div>

                {/* Spesifikasi Bilik & Sqft */}
                <div className="grid grid-cols-3 gap-1 py-1.5 border-t border-b border-white/5 mb-3 text-slate-500">
                  <div className="flex items-center gap-1 justify-center">
                    <Bed className="w-2.5 h-2.5" />
                    <span className="text-[8px] font-bold">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1 justify-center">
                    <Bath className="w-2.5 h-2.5" />
                    <span className="text-[8px] font-bold">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1 justify-center">
                    <LayoutGrid className="w-2.5 h-2.5" />
                    <span className="text-[8px] font-bold">{property.sqft}</span>
                  </div>
                </div>

                {/* Butang WhatsApp Tanya Unit */}
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 flex items-center justify-center gap-1.5 transition-colors duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-400" />
                  <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-wider">
                    Tanya Unit
                  </span>
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
