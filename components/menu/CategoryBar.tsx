"use client";

import { useEffect, useRef, useState } from "react";

interface Section {
  id: string;
  title: string;
}

interface CategoryBarProps {
  sections: Section[];
}

export default function CategoryBar({ sections }: CategoryBarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const activeItem = itemRefs.current[activeSection];

    if (!activeItem || !navRef.current) return;

    activeItem.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="sticky top-[88px] z-30 border-b border-[#8B5E34]/10 bg-[#FFFDF8]/90 backdrop-blur-[10px]">
      <div className="relative mx-auto max-w-5xl">
        <div
          ref={navRef}
          className="flex gap-5 overflow-x-auto px-4 py-3 pr-12 scrollbar-none"
        >
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                ref={(element) => {
                  itemRefs.current[section.id] = element;
                }}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`relative shrink-0 pb-1 font-playfair-display text-[12px] font-medium whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? "text-[#29241F]"
                    : "text-[#7A746C]"
                }`}
              >
                {section.title}

                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full rounded-full bg-[#9A7135]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right scroll cue */}
        <div className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-end bg-gradient-to-l from-[#FFFDF8] via-[#FFFDF8]/90 to-transparent pr-3">
          <span className="text-[18px] leading-none text-[#9A7135]">
            →
          </span>
        </div>
      </div>
    </nav>
  );
}