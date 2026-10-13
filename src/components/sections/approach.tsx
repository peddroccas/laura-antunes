import { SectionHeading } from "@/components/brand";
import { ArrowUpRight, Check } from "@/components/icons";
import { links } from "@/lib/site";

const differentials = [
  {
    title: "Escuta sem julgamentos",
    description:
      "Um espaço para falar sobre sentimentos, dúvidas e experiências com respeito à singularidade de cada pessoa.",
  },
  {
    title: "Respeito ao seu tempo",
    description:
      "O acompanhamento considera que cada pessoa vive suas experiências de maneira própria, sem impor prazos ou expectativas.",
  },
  {
    title: "Atendimento on-line",
    description:
      "Possibilidade de realizar os encontros de forma remota, com mais flexibilidade para organizar a rotina.",
  },
  {
    title: "Olhar atento à individualidade",
    description:
      "O cuidado é construído a partir da história, das necessidades e das questões apresentadas por cada pessoa.",
  },
];

const steps = [
  {
    title: "Primeiro contato",
    description: "A pessoa entra em contato para tirar dúvidas e conhecer melhor o trabalho de Laura.",
  },
  {
    title: "Conversa inicial",
    description:
      "É oferecido um encontro inicial gratuito de 20 minutos, para conhecer a proposta de atendimento e compreender as necessidades apresentadas.",
  },
  {
    title: "Continuidade do cuidado",
    description:
      "Caso faça sentido para ambas as partes, são conversados os próximos passos para o acompanhamento psicológico.",
  },
];

const situations = [
  {
    title: "A perda de alguém importante",
    description: "Um espaço para processar emoções, lembranças e o impacto da ausência.",
  },
  {
    title: "Mudanças significativas na vida",
    description: "Acompanhamento para compreender novas fases, incertezas e decisões importantes.",
  },
  {
    title: "Compreender sentimentos relacionados a uma perda",
    description: "Um espaço para dar nome ao que se sente e encontrar formas de lidar com a dor.",
  },
  {
    title: "Luto antecipatório",
    description: "Acolhimento para quem enfrenta a possibilidade de uma perda futura com cuidado e respeito.",
  },
  {
    title: "Espaço profissional de escuta e reflexão",
    description: "Um lugar para conversar sobre o que está acontecendo, sem pressa e sem julgamentos.",
  },
];

export function Differentials() {
  return (
    <section aria-label="Diferenciais" className="bg-sage">
      <div className="px-section mx-auto flex max-w-[1440px] flex-col gap-10 py-16 lg:py-24">
        <SectionHeading eyebrow="DIFERENCIAIS" title="Um cuidado que respeita a sua história." />
        <ul className="flex flex-col gap-4">
          {differentials.map((item) => (
            <li key={item.title} className="flex items-start gap-[18px] rounded-2xl bg-cream p-7">
              <Check className="shrink-0 text-green" />
              <div className="flex min-w-0 flex-col gap-2">
                <h3 className="t-card-title">{item.title}</h3>
                <p className="t-small">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-cream">
      <div className="px-section mx-auto flex max-w-[1440px] flex-col gap-10 py-16 lg:py-24">
        <SectionHeading eyebrow="COMO FUNCIONA" title="Começar pode ser mais simples do que parece." />
        <ol className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:items-start lg:gap-12">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-5 border-t border-rule pt-[23px]">
              <span className="font-serif text-[36px] leading-[46px] text-green">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-[25px] leading-[32px] text-ink">{step.title}</h3>
              <p className="t-body">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ForWhom() {
  return (
    <section aria-label="Para quem" className="bg-sand">
      <div className="px-section mx-auto flex max-w-[1440px] flex-col gap-10 py-16 lg:py-24">
        <SectionHeading eyebrow="PARA QUEM" title="Você não precisa encontrar todas as palavras antes de começar." />
        <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-6 lg:items-start lg:gap-x-4 lg:gap-y-10">
          {situations.map((item, index) => (
            <li
              key={item.title}
              className={`flex flex-col gap-3 rounded-2xl bg-cream p-7 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <h3 className="t-card-title">{item.title}</h3>
              <p className="t-body">{item.description}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 lg:items-start">
          <p className="t-body">
            Se você sente que precisa de um espaço para conversar, pode conhecer melhor meu trabalho e tirar suas
            dúvidas.
          </p>
          <a href={links.questions} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Entrar em contato
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
