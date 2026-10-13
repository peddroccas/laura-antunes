import Image from "next/image";
import { delay } from "@/components/motion";
import { credentials } from "@/lib/site";
import aboutDesktop from "../../../public/images/sobre-desktop.jpg";
import aboutMobile from "../../../public/images/sobre-mobile.jpg";

export function About() {
  return (
    <section id="sobre" className="bg-cream">
      <div className="px-section mx-auto flex max-w-[1440px] flex-col gap-8 py-16 lg:flex-row lg:items-center lg:gap-24 lg:py-24">
        <div className="flex flex-col gap-3 lg:w-[520px] lg:shrink">
          {/* O Figma usa imagens diferentes no mobile e no desktop */}
          <div className="relative aspect-[342/320] overflow-hidden rounded-[8px] lg:hidden" data-reveal="image">
            <Image
              src={aboutMobile}
              alt="Arranjo de flores sobre uma mesa de madeira em uma sala clara"
              fill
              sizes="calc(100vw - 48px)"
              className="object-cover"
            />
          </div>
          <div className="relative hidden aspect-[520/450] overflow-hidden rounded-[8px] lg:block" data-reveal="image">
            <Image
              src={aboutDesktop}
              alt="Laura Antunes, psicóloga, sorrindo"
              fill
              sizes="520px"
              className="object-cover object-[50%_22.3%]"
            />
          </div>
          <p className="text-[11px] leading-[13px] text-muted lg:hidden" data-reveal="fade">
            Um espaço pensado para acolher.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:w-[632px] lg:shrink">
          <p className="t-eyebrow" data-reveal="" style={delay(0)}>
            SOBRE MIM
          </p>
          <h2 className="t-h2" data-reveal="" style={delay(100)}>
            Um espaço para você ser acolhido por inteiro.
          </h2>
          <p className="t-body" data-reveal="" style={delay(200)}>
            Sou Laura Antunes, psicóloga, e acompanho pessoas que estão atravessando processos de luto e diferentes
            experiências de perda. Meu trabalho é oferecer um espaço de escuta, cuidado e reflexão, respeitando a
            história, o tempo e as necessidades de cada pessoa.
          </p>
          <p className="t-body" data-reveal="" style={delay(280)}>
            Por meio da psicoterapia de orientação analítica junguiana, busco compreender, junto a cada pessoa, os
            significados de suas experiências e os caminhos possíveis para lidar com suas emoções e transformações.
          </p>
          <hr className="h-px border-0 bg-rule" data-reveal="line" style={delay(360)} />
          <div className="flex flex-col gap-2" data-reveal="" style={delay(440)}>
            <p className="font-serif text-[24px] leading-[31px] text-ink">Laura Antunes</p>
            <p className="t-small">{credentials}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
