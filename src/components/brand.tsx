import { delay } from "@/components/motion";

type LogoProps = {
  tone?: "light" | "dark";
  /** "header": 34px de altura no mobile e 50px no desktop. "footer": sempre 50px. */
  variant?: "header" | "footer";
};

// Logo da cliente (368×78). Usado como máscara para a cor vir do site: verde-escuro ou creme.
export function Logo({ tone = "light", variant = "header" }: LogoProps) {
  const size = variant === "header" ? "h-[34px] lg:h-[50px]" : "h-[50px]";
  return (
    <span
      role="img"
      aria-label="Laura Antunes, psicóloga"
      className={`block aspect-[368/78] shrink-0 self-start ${size} ${tone === "dark" ? "bg-paper" : "bg-ink"}`}
      style={{
        maskImage: "url(/images/logo-laura-antunes.png)",
        maskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskImage: "url(/images/logo-laura-antunes.png)",
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}

// Flor do logo da cliente (arquivo próprio, 133×140), em verde. Cresce de baixo para cima ao aparecer.
export function Flower() {
  return (
    <span data-reveal="bloom" className="block h-[40px] w-[38px]">
      <span
        aria-hidden="true"
        className="block size-full bg-green"
        style={{
          maskImage: "url(/images/flor.png)",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: "url(/images/flor.png)",
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      />
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
