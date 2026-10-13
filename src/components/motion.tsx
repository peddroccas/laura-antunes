import { Fragment, type CSSProperties } from "react";

/** Atraso da animação em ms, lido pelo CSS como `--d`. */
export function delay(ms: number) {
  return { "--d": ms } as CSSProperties;
}

/** Atrasos em sequência só no desktop (no mobile cada item entra sozinho ao rolar). */
export const stagger = ["", "lg:[--d:110]", "lg:[--d:220]", "lg:[--d:330]", "lg:[--d:440]"];

/** Divide um texto em palavras animáveis, mantendo os espaços normais entre elas. */
export function Words({ text }: { text: string }) {
  return text.split(" ").map((word, i) => (
    <Fragment key={i}>
      {i > 0 && " "}
      <span data-w="" style={{ "--w": i } as CSSProperties}>
        {word}
      </span>
    </Fragment>
  ));
}

/**
 * Script inline do <head>: liga as animações antes da primeira pintura, exceto com
 * "reduzir movimento". Se o JS da página não carregar em 3s, desliga para nada ficar escondido.
 */
export const motionBootScript = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var r=document.documentElement;r.dataset.motion='';setTimeout(function(){if(!window.__revealReady)delete r.dataset.motion},3000)}catch(e){}})();`;
