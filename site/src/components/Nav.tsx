"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { useLanguage } from "@/lib/LanguageContext";

function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={clsx("flex items-center gap-1 text-xs font-semibold uppercase tracking-widest", className)}>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={clsx("px-1.5 py-1 transition-colors", language === "en" ? "text-gold" : "text-white/40 hover:text-white/70")}
      >
        EN
      </button>
      <span className="text-white/20">/</span>
      <button
        type="button"
        onClick={() => setLanguage("ms")}
        aria-pressed={language === "ms"}
        className={clsx("px-1.5 py-1 transition-colors", language === "ms" ? "text-gold" : "text-white/40 hover:text-white/70")}
      >
        BM
      </button>
    </div>
  );
}

export function Nav() {
  const { content } = useLanguage();
  const { nav, site, logo } = content;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/95 backdrop-blur shadow-[0_1px_0_0_rgba(226,189,72,0.25)]" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center bg-gradient-to-br from-gold-light via-gold to-gold-deep">
            <span className="font-serif text-lg font-bold text-white">I</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-bold tracking-wide text-white">
              ISADORA <span className="font-normal text-white/70">&amp; ASSOCIATES</span>
            </span>
            <span className="mt-1 text-[9px] tracking-[0.25em] text-gold uppercase">
              {logo.subtitle}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="whitespace-nowrap text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <LanguageToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap border border-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-black"
          >
            {site.phone}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="h-[1.5px] w-6 bg-white"
          />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-[1.5px] w-6 bg-white" />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="h-[1.5px] w-6 bg-white"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-black lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 text-base text-white/90 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between gap-4 pt-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 border border-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold"
                >
                  {site.phone}
                </a>
                <LanguageToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
