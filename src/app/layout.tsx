import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azlan Syafiq — Perunding Hartanah Berdaftar | IQI Realty",
  description:
    "Perunding Hartanah Berdaftar di Kuala Lumpur & Selangor. Pakar dalam hartanah kediaman, pelaburan, dan subsale. Hubungi Azlan Syafiq hari ini.",
  keywords: [
    "ejen hartanah",
    "perunding hartanah",
    "rumah KL",
    "Selangor",
    "IQI Realty",
    "Azlan Syafiq",
  ],
  openGraph: {
    title: "Azlan Syafiq — Perunding Hartanah Berdaftar",
    description: "Pakar hartanah KL & Selangor. Hubungi kami sekarang.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ms">
      <body className="antialiased" style={{ background: "#020617" }}>
        {children}
      </body>
    </html>
  );
}
