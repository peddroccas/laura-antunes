import { Logo } from "@/components/brand";
import { ArrowUpRight, BotanicalMarkLarge, Mail, Minus, Plus } from "@/components/icons";
import { contact, credentials, links } from "@/lib/site";

const faq = [
  {
    question: "Como funciona a psicoterapia on-line?",
    answer:
      "A psicoterapia on-line acontece por videochamada, em um ambiente reservado e com conexão estável. O formato permite mais flexibilidade para combinar horários e realizar os encontros de forma remota.",
  },
  {
    question: "Como posso agendar uma conversa inicial?",
    answer:
      "Você pode entrar em contato por e-mail ou WhatsApp para consultar disponibilidade. Não é necessário contar sua história nesse primeiro contato; o objetivo é tirar dúvidas e combinar o próximo passo.",
  },
  {
    question: "A primeira conversa é gratuita?",
    // O Figma traz textos diferentes para esta resposta no desktop e no mobile.
    answer:
      "Sim. O encontro inicial é gratuito e dura 20 minutos. Ele serve para conhecer a proposta de atendimento, conversar sobre as necessidades apresentadas e avaliar se o trabalho pode fazer sentido para você.",
    answerMobile:
      "Sim. O encontro inicial é gratuito e dura 20 minutos. Ele serve para conhecer a proposta de atendimento e compreender as necessidades apresentadas.",
  },
  {
    question: "Quanto tempo dura a conversa inicial?",
    answer:
      "A conversa inicial gratuita dura 20 minutos. Esse tempo é usado para apresentar o trabalho, responder dúvidas e avaliar se o atendimento pode ser um bom caminho para você.",
  },
  {
    question: "Quais questões podem ser trabalhadas na psicoterapia?",
    answer:
      "O trabalho pode abordar processos de luto, perdas significativas, mudanças na vida, dificuldades para compreender emoções e transformações pessoais. O foco é construir um espaço de escuta e reflexão individualizado.",
  },
  {
    question: "Como funciona o acompanhamento de pessoas que estão vivendo um luto?",
    answer:
      "O acompanhamento busca oferecer um espaço de escuta, acolhimento e reflexão para compreender as emoções, lembranças e impactos da perda. O trabalho respeita o tempo e a singularidade de cada pessoa.",
  },
  {
    question: "Como funciona o atendimento para empresas e equipes?",
    answer:
      "São oferecidas palestras, workshops e consultoria para empresas, equipes de saúde e grupos interessados em aprofundar a compreensão sobre luto, cuidado emocional e acolhimento.",
  },
  {
    question: "Como posso entrar em contato para saber mais?",
    answer:
      "Você pode entrar em contato por e-mail ou WhatsApp para tirar dúvidas sobre o trabalho, combinar a conversa inicial e entender melhor como o atendimento funciona.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="bg-sage">
      <div className="px-section mx-auto flex max-w-[1440px] flex-col gap-8 py-16 lg:py-24">
        <div className="flex flex-col gap-5 lg:w-[350px]">
          <p className="t-eyebrow">DÚVIDAS FREQUENTES</p>
          <h2 className="t-h2">Antes do primeiro encontro.</h2>
          <p className="t-body">
            É natural ter perguntas. Aqui estão algumas informações para ajudar você a dar o primeiro passo.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {faq.map((item) => (
            <details key={item.question} open className="group rounded-[8px] bg-cream px-6 py-[22px]">
              <summary className="flex cursor-pointer list-none items-center gap-[18px] [&::-webkit-details-marker]:hidden">
                <span className="flex-1 text-[15px] font-medium leading-[23px] text-ink">{item.question}</span>
                <Minus className="hidden shrink-0 text-green group-open:block" />
                <Plus className="shrink-0 text-green group-open:hidden" />
              </summary>
              {item.answerMobile ? (
                <>
                  <p className="t-body mt-[18px] lg:hidden">{item.answerMobile}</p>
                  <p className="t-body mt-[18px] hidden lg:block">{item.answer}</p>
                </>
              ) : (
                <p className="t-body mt-[18px]">{item.answer}</p>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section aria-label="Próximo passo" className="bg-cream">
      <div className="px-section mx-auto flex max-w-[1440px] flex-col items-center gap-6 py-16 text-center lg:py-24">
        <BotanicalMarkLarge className="text-green" />
        <p className="t-eyebrow">PRÓXIMO PASSO</p>
        <h2 className="t-quote max-w-[760px]">Você pode começar pelo primeiro passo.</h2>
        <p className="max-w-[760px] text-[16px] leading-[27px] text-muted">
          Se deseja conhecer melhor meu trabalho ou entender como funciona o acompanhamento, entre em contato. Será
          um prazer conversar com você.
        </p>
        <a
          href={links.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-full lg:w-auto"
        >
          Conversar pelo WhatsApp
          <ArrowUpRight />
        </a>
        <p className="text-[13px] leading-[21px] text-muted">Encontro inicial gratuito de 20 minutos.</p>
      </div>
    </section>
  );
}

const footerNav = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Atendimentos", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas frequentes", href: "#duvidas" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="px-section mx-auto flex max-w-[1440px] flex-col gap-10 py-16 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-6">
          <div className="flex flex-col gap-5 lg:w-[498px] lg:shrink">
            <Logo tone="dark" variant="footer" />
            <p className="text-[13px] leading-[23px]">{credentials}</p>
          </div>

          <div className="flex flex-col gap-4 lg:w-[380px] lg:shrink">
            <p className="font-serif text-[24px] leading-[31px]">Vamos conversar</p>
            <a href={links.email} className="link flex items-center gap-[10px] text-[13px] leading-[16px]">
              <Mail className="shrink-0" />
              {contact.email}
            </a>
            <a
              href={links.schedule}
              target="_blank"
              rel="noopener noreferrer"
              className="link flex items-center gap-[10px] text-[13px] leading-[16px]"
            >
              <Mail className="shrink-0" />
              {contact.phoneLabel}
            </a>
            <p className="text-[13px] leading-[23px]">{contact.hours}</p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link flex items-center gap-[10px] text-[13px] leading-[16px]"
            >
              <Mail className="shrink-0" />
              {contact.instagramHandle}
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link break-all text-[13px] leading-[23px]"
            >
              {contact.instagramUrl}
            </a>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-4 lg:w-[170px] lg:shrink-0">
            <p className="font-serif text-[24px] leading-[31px]">Explore</p>
            {footerNav.map((item) => (
              <a key={item.href} href={item.href} className="link text-[13px] leading-[16px] hover:underline">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-5 border-t border-rule-dark pt-[27px]">
          <p className="text-[13px] leading-[23px]">
            Este site é um projeto demonstrativo. Nome, perfil, imagens e informações de atendimento são
            ilustrativos. Antes da publicação, inserir dados profissionais, registro, abordagem e contatos reais
            devidamente verificados.
          </p>
          <p className="text-[13px] leading-[23px]">
            Este canal não atende emergências. Em risco imediato, procure um serviço de urgência ou ligue 192
            (SAMU). Para apoio emocional, o CVV atende pelo 188, 24 horas.
          </p>
          <div className="flex flex-col gap-3 text-[11px] leading-[13px] lg:flex-row lg:justify-between">
            <p>© 2026 Laura Antunes · Projeto conceitual</p>
            <p>Privacidade · Informações demonstrativas</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
