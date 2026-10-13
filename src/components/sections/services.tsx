import type { ComponentType, SVGProps } from "react";
import { BotanicalMarkLarge, Cloud, MessagesSquare, ScanFace, Sprout } from "@/components/icons";
import { SectionHeading } from "@/components/brand";

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  wide?: boolean;
};

const services: Service[] = [
  {
    icon: Cloud,
    title: "Psicoterapia para processos de luto",
    description:
      "Acompanhamento psicológico para pessoas que enfrentam a perda de alguém querido ou outras experiências significativas de perda.",
  },
  {
    icon: MessagesSquare,
    title: "Psicoterapia de orientação analítica junguiana",
    description:
      "Um espaço de escuta e reflexão voltado à compreensão das experiências, emoções, conflitos e transformações pessoais.",
  },
  {
    icon: ScanFace,
    title: "Acompanhamento do luto antecipatório",
    description:
      "Acolhimento psicológico para pessoas que enfrentam a possibilidade de uma perda futura, respeitando a complexidade e a singularidade dessa experiência.",
  },
  {
    icon: Sprout,
    title: "Palestras, workshops e consultoria",
    description:
      "Atividades voltadas a empresas, equipes de saúde e outros grupos interessados em aprofundar a compreensão sobre luto, cuidado emocional e acolhimento.",
    wide: true,
  },
];

export function Services() {
  return (
    <>
      <section id="servicos" className="bg-sand">
        <div className="px-section mx-auto flex max-w-[1440px] flex-col gap-10 py-16 lg:py-24">
          <div className="flex flex-col gap-4">
            <SectionHeading eyebrow="SERVIÇOS" title="Cuidado psicológico para diferentes momentos da vida." />
            <p className="t-body">
              Cada experiência é única. Conheça as possibilidades de acompanhamento e encontre informações para
              compreender qual modalidade pode fazer sentido para você ou sua organização.
            </p>
          </div>
          <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:items-start">
            {services.map(({ icon: Icon, title, description, wide }) => (
              <li
                key={title}
                className={`flex flex-col gap-5 rounded-2xl bg-cream p-7 ${wide ? "lg:col-span-3" : ""}`}
              >
                <Icon className="text-green" />
                <h3 className="t-card-title">{title}</h3>
                {/* -0.01px: no navegador o texto passa 0,8px da largura e quebraria em 2 linhas (no Figma é 1) */}
                <p className={`t-body ${wide ? "lg:tracking-[-0.01px]" : ""}`}>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Reflexão" className="bg-cream">
        <div className="px-section mx-auto flex max-w-[1440px] flex-col items-center gap-6 py-16 lg:py-24">
          <BotanicalMarkLarge className="text-green" />
          <p className="t-quote max-w-[760px]">
            Nem toda transformação começa com respostas. Às vezes, começa com um espaço para ser ouvido.
          </p>
        </div>
      </section>
    </>
  );
}
