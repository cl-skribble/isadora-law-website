import { achievements, managingPartner } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.3}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
    <path d="M7 5H4a3 3 0 0 0 3 5M17 5h3a3 3 0 0 1-3 5" />
    <path d="M12 13v3M9 20h6M10 16h4v4h-4z" />
  </svg>
);

export function Achievements() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow="Industry" emphasis="Engagement" />
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {managingPartner.industryEngagement.map((item) => (
            <RevealItem key={item.org}>
              <div className="h-full border border-border bg-paper p-6">
                <p className="text-sm font-semibold text-ink">{item.org}</p>
                <ul className="mt-2 space-y-1">
                  {item.roles.map((role) => (
                    <li key={role} className="flex gap-2 text-xs text-ink/55">
                      <span className="text-gold-deep">—</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-24 border-t border-border pt-24">
          <Reveal>
            <SectionHeading eyebrow="Recent" emphasis="Achievements" center />
          </Reveal>

          <RevealGroup className="grid gap-8 sm:grid-cols-3">
            {achievements.map((a) => (
              <RevealItem key={a.title}>
                <div className="flex h-full flex-col items-center border border-border bg-paper px-6 py-10 text-center transition-transform hover:-translate-y-1">
                  <div className="text-gold-deep">
                    <TrophyIcon />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-gold-deep">
                    {a.org}
                  </p>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-ink">{a.title}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
