import Image from "next/image";
import { team } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow="Our" emphasis="Team" center />
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {team.map((member, i) => (
            <Reveal key={member.slug} delay={i * 0.08} className="group">
              <div className="relative mx-auto h-40 w-36 sm:h-44 sm:w-40">
                <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gold clip-hex transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
                <div className="relative h-full w-full overflow-hidden clip-hex bg-ink">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="200px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-display text-sm font-bold text-ink sm:text-base">{member.name}</h3>
                <p className="mt-1 text-xs font-medium italic text-gold-deep sm:text-sm">{member.title}</p>
                <p className="mx-auto mt-2 max-w-[200px] text-[11px] leading-relaxed text-ink/55 sm:text-xs">
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
