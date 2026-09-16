import { AiVisibility } from "@/sections/AiVisibility";
import { Comparison } from "@/sections/Comparison";
import { Faq } from "@/sections/Faq";
import { FinalCta } from "@/sections/FinalCta";
import { FlagshipProof } from "@/sections/FlagshipProof";
import { Footer } from "@/sections/Footer";
import { Founders } from "@/sections/Founders";
import { Guarantee } from "@/sections/Guarantee";
import { Hero } from "@/sections/Hero";
import { LogoStrip } from "@/sections/LogoStrip";
import { Messages } from "@/sections/Messages";
import { Method } from "@/sections/Method";
import { Problem } from "@/sections/Problem";
import { Radio } from "@/sections/Radio";
import { Results } from "@/sections/Results";
import { Services } from "@/sections/Services";
import { StickyCta } from "@/sections/StickyCta";
import { Testimonials } from "@/sections/Testimonials";
import { useReveal } from "@/hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="canvas-grain min-h-svh bg-black">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>
      <main id="main">
        <Hero />
        <LogoStrip />
        <Problem />
        <FlagshipProof />
        <Services />
        <Results />
        <Testimonials />
        <AiVisibility />
        <Messages />
        <Method />
        <Guarantee />
        <Comparison />
        <Founders />
        <Radio />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
