import { whyUs } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const icons = [
  (
    <svg key="a" viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <rect x="3" y="3" width="18" height="13" rx="1" />
      <path d="M8 21h8M12 16v5" />
      <path d="M7 12l3-3 3 2 4-5" />
    </svg>
  ),
  (
    <svg key="b" viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z" />
    </svg>
  ),
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow="Why" emphasis="Isadora & Associates?" dark />
        </Reveal>

        <div className="grid gap-12 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <div className="text-gold">{icons[i]}</div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
