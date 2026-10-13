import { About } from "@/components/sections/about";
import { Differentials, ForWhom, HowItWorks } from "@/components/sections/approach";
import { Faq, FinalCta, Footer } from "@/components/sections/closing";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <HowItWorks />
        <ForWhom />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
