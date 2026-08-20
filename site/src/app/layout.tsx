import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isadora & Associates | Advocates & Solicitors, Cyberjaya",
  description:
    "Messrs. Isadora & Associates is a premier Malaysian law firm headquartered in Cyberjaya, delivering high quality, solution-oriented legal services in Corporate, Real Estate, Litigation, IP, Syariah, and Entertainment & Sports Law. Your Legal Compass.",
  keywords: [
    "Isadora & Associates",
    "law firm Cyberjaya",
    "Malaysian law firm",
    "corporate lawyer Malaysia",
    "conveyancing lawyer Selangor",
    "syariah lawyer",
    "litigation lawyer Malaysia",
  ],
  openGraph: {
    title: "Isadora & Associates | Your Legal Compass",
    description:
      "Premier Malaysian law firm in Cyberjaya — Corporate, Real Estate, Litigation, IP, Syariah, and Entertainment & Sports Law.",
    type: "website",
    locale: "en_MY",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="min-h-full bg-white text-ink antialiased font-display">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
