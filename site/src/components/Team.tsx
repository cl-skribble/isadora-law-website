"use client";

import Image from "next/image";
import { useContent } from "@/lib/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Team() {
  const { team, teamSection } = useContent();

  return (
    <section id="team" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow={teamSection.eyebrow} emphasis={teamSection.emphasis} center />
        </Reveal>

        <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {team.map((member, i) => (
            <Reveal key={member.slug} delay={i * 0.08} className="group">
              <div className="relative overflow-hidden border border-border bg-paper">
                <span className="absolute left-0 top-0 z-10 h-8 w-8 bg-ink" />
                <span className="absolute left-2 top-1 z-10 font-display text-sm font-bold text-gold">
                  0{i + 1}
                </span>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                    className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              </div>
              <div className="mt-5">
                <h3 className="font-display text-base font-bold leading-snug text-ink sm:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium italic text-gold-deep sm:text-sm">
                  {member.title}
                </p>
                <p className="mt-2.5 text-[11px] leading-relaxed text-ink/70 sm:text-xs">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
