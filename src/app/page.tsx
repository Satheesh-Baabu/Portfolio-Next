import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import WhatIBuild from "@/components/WhatIBuild";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <QuickStats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <WhatIBuild />
        <WhyWorkWithMe />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
