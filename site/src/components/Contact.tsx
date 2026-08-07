import Image from "next/image";
import { nav, site } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-y-0 right-0 hidden w-[45%] clip-diagonal-tr sm:block">
        <Image
          src="/images/backgrounds/contact-scales.jpg"
          alt="Scales of justice"
          fill
          sizes="45vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <div className="absolute inset-y-0 right-0 hidden w-[45%] clip-diagonal-tr border-l-2 border-gold/70 sm:block" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:px-10 sm:py-36">
        <div className="max-w-lg">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-gold-light via-gold to-gold-deep">
                <span className="font-serif text-xl font-bold text-white">I</span>
              </span>
              <span>
                <span className="block font-serif text-lg font-bold tracking-wide text-gold">
                  ISADORA <span className="font-normal text-white">&amp; ASSOCIATES</span>
                </span>
                <span className="block text-[9px] tracking-[0.3em] text-white/50 uppercase">
                  Advocates &amp; Solicitors
                </span>
              </span>
            </div>

            <h2 className="font-display text-4xl font-normal leading-[1.05] text-white sm:text-5xl">
              Your Legal
            </h2>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-gold sm:text-5xl">
              Compass.
            </h2>
            <p className="mt-3 text-sm text-white/50">{site.legalName}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 space-y-5">
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-4 text-white/80 transition-colors hover:text-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center bg-gold/15 text-gold">
                  <PhoneIcon />
                </span>
                <span className="text-sm">{site.phone}</span>
              </a>
              <a
                href={`https://${site.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 transition-colors hover:text-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center bg-gold/15 text-gold">
                  <GlobeIcon />
                </span>
                <span className="text-sm">{site.url}</span>
              </a>
              <div className="flex items-start gap-4 text-white/80">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold/15 text-gold">
                  <PinIcon />
                </span>
                <span className="text-sm leading-relaxed">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="mt-10 inline-flex items-center gap-2 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-transform hover:-translate-y-0.5"
            >
              Book a Consultation
            </a>
          </Reveal>
        </div>

        <nav className="mt-20 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-10">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-xs uppercase tracking-widest text-white/40 hover:text-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-2 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
