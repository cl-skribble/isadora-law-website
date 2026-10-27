"use client";

import { useContent } from "@/lib/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function About() {
  const { about } = useContent();

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* corner accents echoing the profile's diagonal motif */}
      <div className="absolute -top-1 left-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black sm:h-56 sm:w-56" />
      <div className="absolute left-0 top-0 h-40 w-px bg-gold/60 sm:h-56" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow={about.eyebrow} emphasis={about.heading} />
        </Reveal>

        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p className="text-[15px] leading-[1.9] text-ink/70 sm:text-base">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 border-l-2 border-gold pl-6 font-display text-lg font-semibold text-ink sm:text-xl">
            {about.pullQuote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
