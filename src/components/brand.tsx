import { BotanicalMark } from "@/components/icons";
import { delay } from "@/components/motion";

type LogoProps = {
  tone?: "light" | "dark";
  /** "header": 18px no mobile e 30px no desktop. "footer": sempre 30px. */
  variant?: "header" | "footer";
};

export function Logo({ tone = "light", variant = "header" }: LogoProps) {
  const onDark = tone === "dark";
  const nameSize =
    variant === "header"
      ? "text-[18px] leading-[23px] lg:text-[30px] lg:leading-[38px]"
      : "text-[30px] leading-[38px]";
  return (
    <span className="flex items-center gap-[10px]">
      <BotanicalMark className={`shrink-0 ${onDark ? "text-paper" : "text-green"}`} />
      <span className="flex flex-col gap-px whitespace-nowrap">
        <span className={`font-serif ${nameSize} ${onDark ? "text-paper" : "text-ink"}`}>Laura Antunes</span>
        <span className={`text-[9px] leading-[11px] ${onDark ? "text-paper" : "text-green"}`}>PSICÓLOGA</span>
      </span>
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <p className="t-eyebrow" data-reveal="" style={delay(0)}>
        {eyebrow}
      </p>
      <h2 className="t-h2" data-reveal="" style={delay(100)}>
        {title}
      </h2>
    </div>
  );
}
