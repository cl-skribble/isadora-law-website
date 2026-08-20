"use client";

import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { useContent } from "@/lib/LanguageContext";
import type { Service } from "@/lib/content/types";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={clsx("h-5 w-5 shrink-0 transition-transform duration-300", open && "rotate-180")}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export function Services() {
  const { services, servicesSection } = useContent();
  const [openSlug, setOpenSlug] = useState<string | null>(services[0].slug);

  return (
    <section id="services" className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow={servicesSection.eyebrow} emphasis={servicesSection.emphasis} center />
          <p className="mx-auto -mt-3 mb-4 max-w-lg text-center text-sm text-ink/70">
            {servicesSection.intro}
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {services.map((service, i) => (
            <ServiceRow
              key={service.slug}
              service={service}
              index={i}
              isOpen={openSlug === service.slug}
              onToggle={() => setOpenSlug((cur) => (cur === service.slug ? null : service.slug))}
              keyServicesLabel={servicesSection.keyServicesLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
  isOpen,
  onToggle,
  keyServicesLabel,
}: {
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  keyServicesLabel: string;
}) {
  const isSyariah = service.slug === "syariah-law";

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-center gap-4 py-6 text-left transition-colors hover:bg-paper sm:gap-6 sm:py-7"
      >
        <span
          className={clsx(
            "font-display text-lg font-bold shrink-0 w-9 text-center sm:text-xl",
            isOpen ? "text-gold" : "text-ink/25"
          )}
        >
          0{index + 1}
        </span>
        <span className="flex-1">
          <span className="block font-display text-base font-bold text-ink sm:text-lg">
            {service.name}
          </span>
          <span className="mt-0.5 block text-[13px] text-ink/70 sm:text-sm">{service.summary}</span>
        </span>
        <span className={clsx("hidden sm:block", isOpen ? "text-gold" : "text-ink/30")}>
          <ChevronIcon open={isOpen} />
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="relative grid gap-0 overflow-hidden bg-ink sm:grid-cols-[1fr_1.4fr]">
            {isSyariah && (
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: "url('/images/patterns/islamic-geometric.png')",
                  backgroundSize: "200px",
                  backgroundRepeat: "repeat",
                }}
              />
            )}

            <div className="relative h-56 sm:h-auto">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:bg-gradient-to-r" />
            </div>

            <div className="relative px-6 py-8 sm:px-10 sm:py-10">
              <p className="text-sm leading-[1.85] text-white/70">{service.description}</p>

              <div className="mt-7 h-px w-full bg-white/10" />

              <p className="mt-6 mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {keyServicesLabel}
              </p>
              <div className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {service.keyServices.map((k) => (
                  <div key={k} className="flex items-start gap-2.5 text-[13px] text-white/75">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span>{k}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
