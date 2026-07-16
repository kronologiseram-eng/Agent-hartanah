// src/config.ts

export const CLIENT_DATA = {
  // ─── INFO PROFIL EJEN ───
  profile: {
    name: "Azlan Syafiq",
    title: "Perunding Hartanah Berdaftar",
    bio: "Membantu anda beli, jual & labur hartanah dengan keyakinan penuh di pasaran KL & Selangor.",
    renNumber: "REN 54321",
    agency: "IQI Realty Sdn Bhd",
    location: "Kuala Lumpur & Selangor",
    avatarUrl: "/azlan.jpg", // Pastikan gambar azlan.jpg ada dalam folder public/
    badgeText: "Ejen Teratas IQI 2024",
    statusText: "Dalam Talian",
  },

  // ─── NOMBOR TELEFON (Satu tempat sahaja!) ───
  whatsappNumber: "60123456789", // Format wajib: 60123456789 (tanpa tanda '+')

  // ─── STATISTIK (STATS GRID) ───
  stats: {
    experience: {
      value: "5+",
      label: "Tahun Pengalaman",
    },
    transactions: {
      value: "RM50M+",
      label: "Nilai Transaksi",
    },
    sold: {
      value: "150+",
      label: "Rumah Terjual",
    },
  },

  // ─── BUTANG PAUTAN UTAMA (CTA) ───
  ctaButtons: [
    {
      label: "Semak Kelayakan Loan",
      sublabel: "Percuma & tanpa komitmen • via WhatsApp",
      textTemplate: "Salam Azlan, saya ingin semak kelayakan loan saya. Boleh bantu?", // Mesej auto-text WhatsApp
      icon: "Calculator", // Kita akan gunakan ini sebagai rujukan di page.tsx
      variant: "primary" as const,
    },
    {
      label: "Konsultasi Jual/Beli Rumah",
      sublabel: "Dapatkan nasihat profesional percuma",
      textTemplate: "Salam Azlan, saya ingin konsultasi mengenai jual/beli rumah.",
      icon: "UserCheck",
      variant: "secondary" as const,
    },
    {
      label: "Senarai Rumah Mampu Milik 2026",
      sublabel: "Projek baru & subsidi kerajaan tersedia",
      textTemplate: "Salam Azlan, saya nak tahu tentang senarai rumah mampu milik 2026.",
      icon: "Home",
      variant: "ghost" as const,
    },
  ],

  // ─── LISTING HARTANAH (PROPERTY GRID) ───
  properties: [
    {
      title: "Semi-D 2 Tingkat",
      location: "Shah Alam, Selangor",
      price: "RM 850,000",
      monthlyPrice: "~RM 3,800/bln",
      imageUrl: "/rumah1.jpg", // Gambar diletakkan dalam folder public/
      tag: "Panas 🔥",
      beds: 4,
      baths: 3,
      sqft: 2200,
    },
    {
      title: "Kondominium Mewah",
      location: "KLCC, Kuala Lumpur",
      price: "RM 1,200,000",
      monthlyPrice: "~RM 5,300/bln",
      imageUrl: "/rumah2.jpg",
      tag: "Eksklusif 🌟",
      beds: 3,
      baths: 2,
      sqft: 1450,
    },
    {
      title: "Apartment Idaman",
      location: "Petaling Jaya, Selangor",
      price: "RM 450,000",
      monthlyPrice: "~RM 2,000/bln",
      imageUrl: "/rumah3.jpg",
      tag: "Mampu Milik",
      beds: 3,
      baths: 2,
      sqft: 980,
    },
    {
      title: "Townhouse Premium",
      location: "Subang Jaya, Selangor",
      price: "RM 680,000",
      monthlyPrice: "~RM 3,100/bln",
      imageUrl: "/rumah4.jpg",
      tag: "Baru Siap",
      beds: 4,
      baths: 3,
      sqft: 1800,
    },
  ],

  // ─── SOSIAL MEDIA & FOOTER ───
  socials: {
    tiktok: "https://tiktok.com/@ejenazlan",
    instagram: "https://instagram.com/ejenazlan",
    linkedin: "https://linkedin.com/in/ejenazlan",
    copyrightText: "Hak Cipta Terpelihara. Dibina oleh DevIntrovert",
  },
};
