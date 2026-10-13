import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Check } from "@/components/icons";
import { delay, Words } from "@/components/motion";
import { links } from "@/lib/site";
import heroImage from "../../../public/images/hero.jpg";

const highlights = [
  "Atendimento exclusivamente on-line",
  "Escuta individualizada",
  "Acolhimento nos processos de luto",
  "Encontros iniciais de 20 minutos",
];

function Highlight({ text }: { text: string }) {
  return (
    <>
      <Check className="shrink-0 text-green" />
      <span className="text-[15px] leading-[23px] whitespace-nowrap text-ink lg:whitespace-normal">{text}</span>
    </>
  );
}

export function Hero() {
  return (
    <>
      <section id="inicio" className="bg-cream">
        <div className="px-section mx-auto flex max-w-[1440px] flex-col gap-8 pt-8 pb-10 lg:flex-row lg:items-center lg:gap-20 lg:pt-10 lg:pb-16">
          <div className="flex flex-col gap-6 lg:w-[520px] lg:shrink lg:gap-7">
            <p className="t-eyebrow" data-intro="" style={delay(0)}>
              PSICOLOGIA • ATENDIMENTO ON-LINE
            </p>
            <h1
              className="font-serif text-[42px] leading-[46px] text-ink lg:text-[68px] lg:leading-[75px]"
              data-intro="words"
              style={delay(150)}
            >
              <Words text="Há espaço para cuidar de você, mesmo em meio às perdas." />
            </h1>
            <p className="t-body" data-intro="" style={delay(700)}>
              Um espaço de escuta e acolhimento para atravessar o luto, compreender suas emoções e encontrar
              caminhos possíveis para seguir.
            </p>
            <div className="flex flex-col gap-[14px] lg:items-start">
              <a
                href={links.schedule}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                data-intro=""
                style={delay(850)}
              >
                Agendar conversa
                <ArrowUpRight />
              </a>
              <a href="#sobre" className="btn btn-outline" data-intro="" style={delay(950)}>
                Conheça meu trabalho
              </a>
              <p className="text-[13px] leading-[21px] text-muted" data-intro="" style={delay(1050)}>
                Psicoterapia on-line • Brasília e todo o Brasil
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:w-[520px] lg:shrink">
            <div
              className="relative aspect-[342/360] overflow-hidden rounded-[min(240px,calc(50vw-24px))_min(240px,calc(50vw-24px))_8px_8px] lg:aspect-[520/560] lg:rounded-[240px_240px_8px_8px]"
              data-intro="image"
              style={delay(250)}
            >
              <Image
                src={heroImage}
                alt="Arranjo de flores claras em um nicho em arco, em um ambiente sereno"
                fill
                priority
                sizes="(min-width: 1024px) 520px, calc(100vw - 48px)"
                className="object-cover"
              />
            </div>
            <div className="flex h-[18px] items-center justify-between lg:invisible" data-intro="" style={delay(1200)}>
              <p className="text-[10px] leading-[12px] text-muted">Um espaço para escuta e reflexão.</p>
              <ArrowDownRight className="text-green" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Destaques do atendimento" className="bg-sage">
        {/* Mobile: uma linha em loop infinito. A segunda cópia existe só para o loop não ter emenda. */}
        <div className="marquee overflow-hidden py-6 lg:hidden">
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={copy === 1 || undefined}>
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Highlight text={item} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <ul className="px-section mx-auto hidden max-w-[1440px] py-6 lg:grid lg:grid-cols-4 lg:gap-6">
          {highlights.map((item, i) => (
            <li key={item} className="flex items-center gap-3" data-reveal="" style={delay(i * 90)}>
              <Highlight text={item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
