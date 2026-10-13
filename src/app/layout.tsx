import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { motionBootScript } from "@/components/motion";
import { RevealObserver } from "@/components/reveal-observer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laura Antunes · Psicóloga | Psicoterapia on-line para processos de luto",
  description:
    "Um espaço de escuta e acolhimento para atravessar o luto, compreender suas emoções e encontrar caminhos possíveis para seguir. Psicoterapia on-line, encontro inicial gratuito de 20 minutos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: o script de movimento adiciona `data-motion` ao <html> antes da hidratação
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootScript }} />
      </head>
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
