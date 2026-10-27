"use client";

import Image from "next/image";
import { useContent } from "@/lib/LanguageContext";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export function ManagingPartner() {
  const { managingPartner } = useContent();

  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-3 -z-10 border border-gold/40" />
              <div className="relative aspect-[10/19] w-full overflow-hidden bg-black">
                <Image
                  src={managingPartner.image}
                  alt={managingPartner.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-sm text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-white">{managingPartner.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-gold">
                {managingPartner.title}
              </p>
              <p className="mt-3 text-xs text-white/50">{managingPartner.credentials}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm leading-[1.9] text-white/70">{managingPartner.bio}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h4 className="mt-12 mb-6 font-display text-lg font-bold text-white">
              {managingPartner.pillarsHeading}
            </h4>
          </Reveal>

          <RevealGroup className="space-y-6">
            {managingPartner.pillars.map((pillar) => (
              <RevealItem key={pillar.title}>
                <div className="border-l-2 border-gold py-1 pl-6">
                  <h5 className="text-sm font-bold text-gold">{pillar.title}</h5>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">{pillar.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <h4 className="mt-14 mb-6 font-display text-lg font-bold text-white">
              {managingPartner.industryEngagementHeading}
            </h4>
          </Reveal>
          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {managingPartner.industryEngagement.map((item) => (
              <RevealItem key={item.org}>
                <div className="h-full border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[13px] font-semibold text-white/90">{item.org}</p>
                  <ul className="mt-2 space-y-1">
                    {item.roles.map((role) => (
                      <li key={role} className="flex gap-2 text-xs text-white/50">
                        <span className="text-gold">—</span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
