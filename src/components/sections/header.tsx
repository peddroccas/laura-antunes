import { Logo } from "@/components/brand";
import { ArrowUpRight } from "@/components/icons";
import { links, nav } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-line bg-cream">
      <div className="px-section mx-auto flex h-[88px] max-w-[1440px] items-center justify-between gap-2 lg:h-[108px]">
        <a href="#inicio" className="link shrink-0" aria-label="Laura Antunes, psicóloga, início">
          <Logo />
        </a>
        <nav aria-label="Principal" className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 xl:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link text-[13px] leading-[16px] text-ink hover:text-green">
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
            Agendar conversa
            <ArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  );
}
