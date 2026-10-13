const WHATSAPP_NUMBER = "5561999554103";

function whatsapp(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const contact = {
  email: "lauraantunes.psii@gmail.com",
  phoneLabel: "+55 61 99955-4103",
  instagramHandle: "@psilauraantunes",
  instagramUrl: "https://www.instagram.com/psilauraantunes/",
  hours: "Horários: segunda a sexta-feira das 8h às 20h.",
};

export const links = {
  schedule: whatsapp("Olá, Laura! Gostaria de agendar a conversa inicial gratuita."),
  questions: whatsapp("Olá, Laura! Gostaria de tirar algumas dúvidas sobre o atendimento."),
  email: `mailto:${contact.email}`,
};

export const credentials =
  "CRP 01/29065 • Psicóloga especializada em processos de luto • Atendimento on-line exclusivamente.";

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Atendimentos", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas frequentes", href: "#duvidas" },
];
