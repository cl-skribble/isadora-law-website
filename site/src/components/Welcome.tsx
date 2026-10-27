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

      <Reveal y={40} delay={0.15} className="mx-auto mt-16 max-w-5xl px-6 sm:px-10">
        <div className="relative">
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full bg-black sm:-bottom-6 sm:-right-6" />
          <div className="relative w-full border border-border bg-white p-5 sm:p-10 md:p-14">
            <Image
              src={welcome.image}
              alt="Isadora & Associates team"
              width={1260}
              height={659}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
