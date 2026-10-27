"use client";

import Image from "next/image";
import { useContent } from "@/lib/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Welcome() {
  const { welcome } = useContent();

  return (
    <section className="relative overflow-hidden bg-paper py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow={welcome.eyebrow} emphasis={welcome.heading} center />
        </Reveal>
        <div className="space-y-6 text-center">
          {welcome.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p className="text-[15px] leading-[1.9] text-ink/70 sm:text-base">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal y={40} delay={0.15} className="mx-auto mt-16 max-w-4xl px-6 sm:px-10">
        <Image
          src={welcome.image}
          alt="Isadora & Associates team"
          width={1260}
          height={659}
          sizes="(max-width: 1024px) 100vw, 896px"
          className="h-auto w-full"
        />
      </Reveal>
    </section>
  );
}
