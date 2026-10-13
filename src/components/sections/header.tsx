import { Logo } from "@/components/brand";
import { ArrowUpRight } from "@/components/icons";
import { links, nav } from "@/lib/site";

export function Header() {
  return (
    // Fixo ao rolar; com 88% de opacidade sobre o creme, no topo fica idêntico ao Figma
    <header className="sticky top-0 z-40 border-b border-line bg-cream/[0.88] backdrop-blur-md">
      <div className="px-section mx-auto flex h-[88px] max-w-[1440px] items-center justify-between gap-2 lg:h-[108px]">
        <a href="#inicio" className="link shrink-0" aria-label="Laura Antunes, psicóloga, início">
          <Logo />
        </a>
        <nav aria-label="Principal" className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 xl:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link link-underline text-[13px] leading-[16px] text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={links.schedule}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2 px-[11px] lg:gap-5 lg:px-6"
          >
            {/* Abaixo de 380px (ex.: Androids de 360px) o texto completo não cabe ao lado do logo */}
            <span className="max-[379px]:hidden">Agendar conversa</span>
            <span className="hidden max-[379px]:inline">Agendar</span>
            <ArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  );
}
