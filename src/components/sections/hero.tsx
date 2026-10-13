import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Check } from "@/components/icons";
import { links } from "@/lib/site";
import heroImage from "../../../public/images/hero.jpg";

const highlights = [
  "Atendimento exclusivamente on-line",
  "Escuta individualizada",
  "Acolhimento nos processos de luto",
  "Encontros iniciais de 20 minutos",
];

export function Hero() {
  return (
    <>
      <section id="inicio" className="bg-cream">
        <div className="px-section mx-auto flex max-w-[1440px] flex-col gap-8 pt-8 pb-10 lg:flex-row lg:items-center lg:gap-20 lg:pt-10 lg:pb-16">
          <div className="flex flex-col gap-6 lg:w-[520px] lg:shrink lg:gap-7">
            <p className="t-eyebrow">PSICOLOGIA • ATENDIMENTO ON-LINE</p>
            <h1 className="font-serif text-[42px] leading-[46px] text-ink lg:text-[68px] lg:leading-[75px]">
              Há espaço para cuidar de você, mesmo em meio às perdas.
            </h1>
            <p className="t-body">
              Um espaço de escuta e acolhimento para atravessar o luto, compreender suas emoções e encontrar
              caminhos possíveis para seguir.
            </p>
            <div className="flex flex-col gap-[14px] lg:items-start">
              <a href={links.schedule} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Agendar conversa
                <ArrowUpRight />
              </a>
              <a href="#sobre" className="btn btn-outline">
                Conheça meu trabalho
              </a>
              <p className="text-[13px] leading-[21px] text-muted">
                Psicoterapia on-line • Brasília e todo o Brasil
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:w-[520px] lg:shrink">
            <div className="relative aspect-[342/360] overflow-hidden rounded-[min(240px,calc(50vw-24px))_min(240px,calc(50vw-24px))_8px_8px] lg:aspect-[520/560] lg:rounded-[240px_240px_8px_8px]">
              <Image
                src={heroImage}
                alt="Arranjo de flores claras em um nicho em arco, em um ambiente sereno"
                fill
                priority
                sizes="(min-width: 1024px) 520px, calc(100vw - 48px)"
                className="object-cover"
              />
            </div>
            <div className="flex h-[18px] items-center justify-between lg:invisible">
              <p className="text-[10px] leading-[12px] text-muted">Um espaço conceitual para escuta e reflexão.</p>
              <ArrowDownRight className="text-green" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Destaques do atendimento" className="bg-sage">
        <ul className="px-section mx-auto flex max-w-[1440px] flex-col gap-4 py-6 lg:grid lg:grid-cols-4 lg:gap-6">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <Check className="shrink-0 text-green" />
              <span className="text-[15px] leading-[23px] text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
