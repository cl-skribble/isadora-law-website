"use client";

import { clsx } from "clsx";
import { coreValues } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

function HexCard({
  title,
  description,
  dark,
  delay,
}: {
  title: string;
  description: string;
  dark: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04 }}
      className={clsx(
        "clip-hex flex aspect-[1/1.05] w-full flex-col items-center justify-center px-6 text-center sm:px-8",
        dark ? "bg-ink text-white" : "bg-gold text-ink"
      )}
    >
      <h3 className="font-display text-sm font-bold sm:text-base">{title}</h3>
      <p
        className={clsx(
          "mt-3 hidden text-[11px] leading-relaxed sm:block",
          dark ? "text-white/65" : "text-ink/70"
        )}
      >
        {description}
      </p>
    </motion.div>
  );
}

export function CoreValues() {
  const [v1, v2, v3, v4, v5, v6] = coreValues;
  const top = [v1, v2, v3];
  const bottom = [v4, v5, v6];
  const topDark = [false, true, false];
  const bottomDark = [true, false, true];

  return (
    <section className="relative overflow-hidden bg-paper py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow="Core" emphasis="Values" center />
        </Reveal>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {top.map((v, i) => (
            <HexCard key={v.title} title={v.title} description={v.description} dark={topDark[i]} delay={i * 0.08} />
          ))}
          <div className="col-span-2 h-0 sm:hidden" />
          {bottom.map((v, i) => (
            <div key={v.title} className="sm:-mt-10">
              <HexCard title={v.title} description={v.description} dark={bottomDark[i]} delay={0.24 + i * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
