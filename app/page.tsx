import Hero from "@/components/sections/Hero";
import Currently from "@/components/sections/Currently";
import Experience from "@/components/sections/Experience";
import Glance from "@/components/sections/Glance";
import Systems from "@/components/sections/Systems";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Speaking from "@/components/sections/Speaking";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <main id="main" className="relative z-10">
        <Hero />
        <Currently index="01" />
        <Experience index="02" />
        <Glance index="03" />
        <Systems index="04" />
        <Projects index="05" />
        <Skills index="06" />
        <Education index="07" />
        <Speaking index="08" />
        <About index="09" />
        <Contact index="10" />
      </main>
      <Footer />
    </>
  );
}
