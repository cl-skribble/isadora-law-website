"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "@/lib/LanguageContext";

export function Hero() {
  const { logo, hero } = useContent();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* Background photo, right side, diagonal-clipped */}
      <div className="absolute inset-y-0 right-0 w-full sm:w-[62%] clip-diagonal-tr">
        <Image
          src="/images/backgrounds/hero-scales-gavel.jpg"
          alt="Scales of justice and gavel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>
      <div className="absolute inset-y-0 right-0 w-full sm:w-[62%] clip-diagonal-tr border-l-2 border-gold/70 pointer-events-none" />

      {/* Faint gold texture on left */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-gold-light via-gold to-gold-deep">
              <span className="font-serif text-2xl font-bold text-white">I</span>
            </span>
            <span className="h-10 w-px bg-white/30" />
            <span>
              <span className="block font-serif text-xl font-bold tracking-wide text-gold">
                ISADORA <span className="font-normal text-white">&amp; ASSOCIATES</span>
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-white/60 uppercase">
                {logo.subtitle}
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold"
          >
            {hero.established}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl"
          >
            {hero.headingLine1}
            <br />
            <span className="text-gold">{hero.headingLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/70"
          >
            {hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(226,189,72,0.6)]"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:border-gold hover:text-gold"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 sm:left-10 sm:translate-x-0"
      >
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">{hero.scroll}</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
