"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Footer from "@/components/portfolio/Footer";

function LoadingFallback() {
  return (
    <div className="w-full h-screen absolute inset-0 -z-10 flex items-center justify-center opacity-40">
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

const Scene = dynamic(() => import("@/components/3d/Scene"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      <Scene />

      <div className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </div>
  );
}
