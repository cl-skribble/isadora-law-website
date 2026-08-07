import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow: string;
  emphasis: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, emphasis, dark, center, className }: SectionHeadingProps) {
  return (
    <div className={clsx("mb-8", center && "text-center", className)}>
      <h2
        className={clsx(
          "font-display text-4xl sm:text-5xl leading-[1.05] font-normal",
          dark ? "text-white" : "text-ink"
        )}
      >
        {eyebrow}
      </h2>
      <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] font-extrabold text-gold">
        {emphasis}
      </h2>
      <div className={clsx("mt-5 h-1 w-16 bg-gold", center && "mx-auto")} />
    </div>
  );
}
