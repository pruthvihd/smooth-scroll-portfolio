import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SideNav } from "@/components/SideNav";
import { ThreeBackground } from "@/components/ThreeBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pruthvi H D — Web Developer Portfolio" },
      {
        name: "description",
        content:
          "Full-stack web developer crafting fast, accessible, and elegantly engineered digital experiences.",
      },
    ],
  }),
});

const sections = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.5) {
            setActive(e.target.id);
          }
        });
      },
      { root: container, threshold: [0.5] },
    );

    sections.forEach((s) => {
      const el = container.querySelector(`#${s.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    const el = containerRef.current?.querySelector(`#${id}`);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-700">
      <ThreeBackground />
      <SideNav sections={sections} active={active} onNavigate={handleNavigate} />
      <div ref={containerRef} className="snap-container relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
