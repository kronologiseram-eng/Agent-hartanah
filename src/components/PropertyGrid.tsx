"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, BedDouble, Bath, Maximize2, Star } from "lucide-react";

interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  price: string;
  priceMonthly?: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  badge?: string;
  badgeColor?: string;
  whatsappMsg: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Semi-D 2 Tingkat",
    type: "Rumah Semi-Detached",
    location: "Shah Alam, Selangor",
    price: "RM 850,000",
    priceMonthly: "~RM 3,800/bln",
    beds: 4,
    baths: 3,
    sqft: 2200,
    imageUrl:
      "https://images.pexels.com/photos/31737859/pexels-photo-31737859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    badge: "Panas 🔥",
    badgeColor: "from-orange-500 to-red-500",
    whatsappMsg:
      "Salam%20Azlan%2C%20saya%20berminat%20dengan%20Semi-D%202%20Tingkat%20di%20Shah%20Alam%20(RM%20850%2C000).%20Boleh%20dapatkan%20maklumat%20lanjut%3F",
  },
  {
    id: 2,
    title: "Kondominium Mewah",
    type: "Kondominium",
    location: "KLCC, Kuala Lumpur",
    price: "RM 1,200,000",
    priceMonthly: "~RM 5,300/bln",
    beds: 3,
    baths: 2,
    sqft: 1450,
    imageUrl:
      "https://images.pexels.com/photos/26108669/pexels-photo-26108669.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    badge: "Eksklusif ✦",
    badgeColor: "from-yellow-500 to-amber-600",
    whatsappMsg:
      "Salam%20Azlan%2C%20saya%20berminat%20dengan%20Kondominium%20Mewah%20di%20KLCC%20(RM%201%2C200%2C000).%20Boleh%20dapatkan%20maklumat%20lanjut%3F",
  },
  {
    id: 3,
    title: "Apartment Idaman",
    type: "Apartment",
    location: "Petaling Jaya, Selangor",
    price: "RM 450,000",
    priceMonthly: "~RM 2,000/bln",
    beds: 3,
    baths: 2,
    sqft: 980,
    imageUrl:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    badge: "Mampu Milik",
    badgeColor: "from-emerald-500 to-teal-600",
    whatsappMsg:
      "Salam%20Azlan%2C%20saya%20berminat%20dengan%20Apartment%20Idaman%20di%20Petaling%20Jaya%20(RM%20450%2C000).%20Boleh%20dapatkan%20maklumat%20lanjut%3F",
  },
  {
    id: 4,
    title: "Townhouse Premium",
    type: "Townhouse",
    location: "Subang Jaya, Selangor",
    price: "RM 680,000",
    priceMonthly: "~RM 3,100/bln",
    beds: 4,
    baths: 3,
    sqft: 1800,
    imageUrl:
      "https://images.pexels.com/photos/36903868/pexels-photo-36903868.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    badge: "Baru Siap",
    badgeColor: "from-sky-500 to-blue-600",
    whatsappMsg:
      "Salam%20Azlan%2C%20saya%20berminat%20dengan%20Townhouse%20Premium%20di%20Subang%20Jaya%20(RM%20680%2C000).%20Boleh%20dapatkan%20maklumat%20lanjut%3F",
  },
];

interface PropertyGridProps {
  animationDelay?: number;
}

export default function PropertyGrid({ animationDelay = 0 }: PropertyGridProps) {
  const WHATSAPP_NUMBER = "60123456789";

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
            <div className="w-1 h-4 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600" />
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
        {properties.map((property, index) => (
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
            className="glass-card rounded-2xl overflow-hidden group"
          >
            {/* Property Image */}
            <div className="relative h-28 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={property.imageUrl}
                alt={`${property.title} — ${property.location}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Badge */}
              {property.badge && (
                <div
                  className={`absolute top-2 left-2 bg-gradient-to-r ${property.badgeColor} rounded-full px-2 py-0.5`}
                >
                  <span className="text-[9px] font-bold text-white">
                    {property.badge}
                  </span>
                </div>
              )}

              {/* Price overlay */}
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
              {/* Type label */}
              <p className="text-[9px] text-emerald-400 font-semibold uppercase tracking-wider mb-0.5">
                {property.type}
              </p>

              {/* Title */}
              <h3 className="text-xs font-bold text-white leading-tight mb-1.5">
                {property.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-1 mb-2">
                <MapPin className="w-2.5 h-2.5 text-slate-500 shrink-0" />
                <span className="text-[10px] text-slate-400 truncate">
                  {property.location}
                </span>
              </div>

              {/* Specs row */}
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

              {/* CTA Button */}
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${property.whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-1.5 w-full py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 border border-emerald-400/30 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <MessageCircle className="w-3 h-3 text-white" />
                <span className="text-[10px] font-bold text-white">Tanya Unit</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All link */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Salam%20Azlan%2C%20saya%20ingin%20melihat%20semua%20listing%20hartanah%20anda.`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl glass-card border-emerald-500/15 transition-all duration-200 hover:border-emerald-500/30"
      >
        <span className="text-xs text-slate-400 font-medium">
          Lihat Semua Listing
        </span>
        <svg
          viewBox="0 0 24 24"
          className="w-3 h-3 text-emerald-400"
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
