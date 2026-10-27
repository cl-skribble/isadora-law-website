"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "@/lib/LanguageContext";
import type { ClientLogo } from "@/lib/content/types";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useSafeReducedMotion } from "@/lib/useSafeReducedMotion";

function LogoTile({ logo, hidden }: { logo: ClientLogo; hidden?: boolean }) {
  return (
    <div className="flex h-10 shrink-0 items-center sm:h-12" aria-hidden={hidden || undefined}>
      <Image
        src={`/images/logos/clients/${logo.slug}.png`}
        alt={hidden ? "" : logo.name}
        width={logo.width}
        height={logo.height}
        className="h-full w-auto object-contain opacity-60 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

function MarqueeRow({
  logos,
  direction,
  duration,
}: {
  logos: ClientLogo[];
  direction: "left" | "right";
  duration: number;
}) {
  const reduceMotion = useSafeReducedMotion();

  if (reduceMotion) {
    // Static: no infinite scroll, and no duplicated loop content to announce/read twice.
    return (
      <div className="relative overflow-hidden py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
          {logos.map((logo) => (
            <LogoTile key={logo.slug} logo={logo} />
          ))}
        </div>
      </div>
    );
  }

  const loop = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent sm:w-32" />

      <motion.div
        className="flex w-max items-center gap-12 sm:gap-16"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((logo, i) => (
          <LogoTile key={`${logo.slug}-${i}`} logo={logo} hidden={i >= logos.length} />
        ))}
      </motion.div>
    </div>
  );
}

export function Clients() {
  const { clients, clientsSection } = useContent();
  const mid = Math.ceil(clients.length / 2);
  const rowA = clients.slice(0, mid);
  const rowB = clients.slice(mid);

  return (
    <section id="clients" className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <SectionHeading eyebrow={clientsSection.eyebrow} emphasis={clientsSection.emphasis} center />
          <p className="mx-auto -mt-3 mb-4 max-w-lg text-sm text-ink/70">
            {clientsSection.subtitle}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 space-y-2">
          <MarqueeRow logos={rowA} direction="left" duration={34} />
          <MarqueeRow logos={rowB} direction="right" duration={38} />
        </div>
      </Reveal>
    </section>
  );
}
