"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clients, type ClientLogo } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

function MarqueeRow({
  logos,
  direction,
  duration,
}: {
  logos: ClientLogo[];
  direction: "left" | "right";
  duration: number;
}) {
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
          <div key={`${logo.slug}-${i}`} className="flex h-10 shrink-0 items-center sm:h-12">
            <Image
              src={`/images/logos/clients/${logo.slug}.png`}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="h-full w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Clients() {
  const mid = Math.ceil(clients.length / 2);
  const rowA = clients.slice(0, mid);
  const rowB = clients.slice(mid);

  return (
    <section id="clients" className="relative overflow-hidden bg-paper py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <SectionHeading eyebrow="Our" emphasis="Valued Clients" center />
          <p className="mx-auto -mt-3 mb-4 max-w-lg text-sm text-ink/55">
            Trusted by industry leaders across corporate, eSports, publishing, and technology.
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
