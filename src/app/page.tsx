"use client";

import { useEffect, useState } from "react";

import NavigationBar from "@/components/NavigationBar";
import Home from "@/pages/Home";
import Section from "@/components/Section";
import Languages from "@/pages/Languages";
import Projects from "@/pages/Projects";
import Timeline from "@/pages/Timeline";
import Contact from "@/pages/Contact";

export default function Index() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
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
    <main>
      <NavigationBar activeIndex={activeSection} />
      <div className="content h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth transition-colors duration-1000">
        <Section id="home">
          <Home />
        </Section>
        <Section id="languages">
          <Languages />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="timeline">
          <Timeline />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </div>
    </main>
  );
}
