import Image from "next/image";
import { HeroContent } from "@/components/HeroContent";

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  children,
  compact = false,
  imageClassName,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
  compact?: boolean;
  imageClassName?: string;
}) {
  return (
    <section
      className={
        compact
          ? "relative isolate flex min-h-[28vh] items-center overflow-hidden bg-navy-950 text-white sm:min-h-[38vh] lg:min-h-[40vh]"
          : "relative isolate flex min-h-[52vh] items-center overflow-hidden bg-navy-950 text-white lg:min-h-[58vh]"
      }
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        quality={92}
        sizes="100vw"
        className={`object-cover object-center ${imageClassName ?? ""}`}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/50 to-navy-950/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />

      <HeroContent
        className={
          compact
            ? "container-content relative py-10 sm:py-14 lg:py-16"
            : "container-content relative pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24"
        }
      >
        <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
          <span className="h-px w-9 bg-gold-400" />
          {eyebrow}
        </span>
        <h1
          className={
            compact
              ? "mt-4 max-w-3xl text-3xl font-bold leading-[1.1] drop-shadow-md sm:text-4xl lg:text-[2.75rem]"
              : "mt-5 max-w-3xl text-4xl font-bold leading-[1.08] drop-shadow-md sm:text-5xl lg:text-6xl"
          }
        >
          {title}
        </h1>
        <p
          className={
            compact
              ? "mt-4 max-w-xl text-sm leading-relaxed text-white/85 drop-shadow sm:text-base"
              : "mt-5 max-w-xl text-base leading-relaxed text-white/85 drop-shadow sm:text-lg"
          }
        >
          {description}
        </p>
        {children && <div className={compact ? "mt-5" : "mt-7"}>{children}</div>}
      </HeroContent>
    </section>
  );
}
