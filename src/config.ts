// src/config.ts

export const CONFIG = {
  // ─── TEMA WARNA UTAMA ───
  // Pilihan: "emerald" (Hijau) | "rose" (Pink) | "blue" (Biru) | "gold" (Emas)
  theme: "emerald" as "emerald" | "rose" | "blue" | "gold",

  // ─── NOMBOR TELEFON (Hanya masukkan digit sahaja) ───
  whatsappNumber: "60123456789", 

  // ─── MAKLUMAT PEMASANG (DEVELOPER) ───
  developer: {
    name: "AZRI SAFWAN WEB STUDIO",
    lineText: "Lesen REN aktif & sah di bawah LPPEH Malaysia"
  },

  // ─── PROFIL AGEN ───
  profile: {
    name: "Azlan Syafiq",
    title: "Perunding Hartanah Berdaftar",
    bio: "Membantu anda beli, jual & labur hartanah dengan keyakinan penuh di pasaran KL & Selangor.",
    renNumber: "REN 54321",
    agency: "IQI Realty Sdn Bhd",
    location: "Kuala Lumpur & Selangor",
    avatarUrl: "/agent-hartanah.png", // Letak gambar di public/
    badgeText: "Ejen Teratas IQI 2024",
    statusText: "Dalam Talian",
  },

  // ─── STATISTIK GRID ───
  stats: [
    {
      iconType: "Trophy" as const,
      value: "5+",
      label: "Tahun Pengalaman",
      colorType: "yellow" as const, // yellow | emerald | sky
    },
    {
      iconType: "TrendingUp" as const,
      value: "RM50M+",
      label: "Nilai Transaksi",
      colorType: "emerald" as const,
    },
    {
      iconType: "Home" as const,
      value: "150+",
      label: "Rumah Terjual",
      colorType: "sky" as const,
    },
  ],

  // ─── CTA BUTTONS (BUTANG LINK TENGAH) ───
  ctaButtons: [
    {
      label: "Semak Kelayakan Loan",
      sublabel: "Percuma & tanpa komitmen • via WhatsApp",
      textTemplate: "Salam Azlan, saya ingin semak kelayakan loan saya. Boleh bantu?",
      iconType: "Calculator" as const,
      variant: "primary" as const, // primary | secondary | ghost
    },
    {
      label: "Konsultasi Jual/Beli Rumah",
      sublabel: "Dapatkan nasihat profesional percuma",
      textTemplate: "Salam Azlan, saya ingin konsultasi mengenai jual/beli rumah.",
      iconType: "UserCheck" as const,
      variant: "secondary" as const,
    },
    {
      label: "Senarai Rumah Mampu Milik 2026",
      sublabel: "Projek baru & subsidi kerajaan tersedia",
      textTemplate: "Salam Azlan, saya nak tahu tentang senarai rumah mampu milik 2026.",
      iconType: "Home" as const,
      variant: "ghost" as const,
    },
  ],

  // ─── LISTING HARTANAH (PROPERTIES) ───
  properties: [
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
      imageUrl: "https://images.pexels.com/photos/31737859/pexels-photo-31737859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      badge: "Panas 🔥",
      badgeColor: "from-orange-500 to-red-500",
      whatsappMsg: "Salam Azlan, saya berminat dengan Semi-D 2 Tingkat di Shah Alam (RM 850,000). Boleh dapatkan maklumat lanjut?",
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
      imageUrl: "https://images.pexels.com/photos/26108669/pexels-photo-26108669.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      badge: "Eksklusif ✦",
      badgeColor: "from-yellow-500 to-amber-600",
      whatsappMsg: "Salam Azlan, saya berminat dengan Kondominium Mewah di KLCC (RM 1,200,000). Boleh dapatkan maklumat lanjut?",
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
      imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      badge: "Mampu Milik",
      badgeColor: "from-emerald-500 to-teal-600",
      whatsappMsg: "Salam Azlan, saya berminat dengan Apartment Idaman di Petaling Jaya (RM 450,000). Boleh dapatkan maklumat lanjut?",
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
      imageUrl: "https://images.pexels.com/photos/36903868/pexels-photo-36903868.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      badge: "Baru Siap",
      badgeColor: "from-sky-500 to-blue-600",
      whatsappMsg: "Salam Azlan, saya berminat dengan Townhouse Premium di Subang Jaya (RM 680,000). Boleh dapatkan maklumat lanjut?",
    },
  ],

  // ─── MEDIA SOSIAL ───
  socials: {
    tiktok: "https://tiktok.com/@azlansyafiq",
    instagram: "https://instagram.com/azlansyafiq",
    linkedin: "https://linkedin.com/in/azlansyafiq",
  },

  // ─── ULASAN / RATINGS FOOTER ───
  trustBar: {
    rating: "5.0",
    text: "Dipercayai 150+ pembeli & pelabur hartanah",
    emojis: ["🧑", "👩", "👨"],
  }
};
