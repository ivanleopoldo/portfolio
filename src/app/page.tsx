"use client";

import { useEffect, useState } from "react";

import NavigationBar from "@/components/NavigationBar";
import Home from "@/pages/Home";
import Section from "@/components/Section";
import Languages from "@/pages/Languages";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

export default function Index() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const sectionArray = Array.from(sections).map((section) => section.id);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionArray.indexOf(entry.target.id);
          setActiveSection(index);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="flex h-[100dvh] flex-col-reverse bg-[#262626]">
      <div className="flex items-center justify-center">
        <NavigationBar activeIndex={activeSection} />
      </div>
      <div className="content snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth transition-colors duration-1000">
        <Section id="home">
          <Home />
        </Section>
        <Section id="languages">
          <Languages />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </div>
    </main>
  );
}
