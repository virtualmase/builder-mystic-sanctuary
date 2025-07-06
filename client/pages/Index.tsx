import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import CaseStudy from "@/components/sections/CaseStudy";
import Differentiation from "@/components/sections/Differentiation";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="case-study">
          <CaseStudy />
        </div>
        <Differentiation />
      </main>
      <Footer />
    </div>
  );
}
