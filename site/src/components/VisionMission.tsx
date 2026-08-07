import { visionMission } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.4}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.4}>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <div className="space-y-16">
          <Reveal>
            <div className="flex items-start gap-6">
              <div className="mt-1 text-gold-deep">
                <TargetIcon />
              </div>
              <div>
                <span className="inline-block bg-ink px-6 py-2 font-display text-xl font-extrabold tracking-wide text-white">
                  VISION
                </span>
                <div className="mt-4 h-1 w-16 bg-gold" />
                <p className="mt-5 text-[15px] leading-[1.9] text-ink/70 sm:text-base">
                  {visionMission.vision}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-start gap-6">
              <div className="mt-1 text-gold-deep">
                <EyeIcon />
              </div>
              <div>
                <span className="inline-block bg-ink px-6 py-2 font-display text-xl font-extrabold tracking-wide text-white">
                  MISSION
                </span>
                <div className="mt-4 h-1 w-16 bg-gold" />
                <p className="mt-5 text-[15px] leading-[1.9] text-ink/70 sm:text-base">
                  {visionMission.mission}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
