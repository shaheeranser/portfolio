"use client";

import { useEffect, useState, type ComponentType, type SVGProps } from "react";
import {
  Briefcase,
  FileText,
  Github,
  Grid,
  Layers,
  Linkedin,
  Mail,
  Search,
  Terminal,
} from "@/components/icons";
import { navSections, profile } from "@/lib/content";

type DockEntry = {
  id: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href?: string;
  external?: boolean;
  download?: string;
  action?: () => void;
};

type DockProps = {
  onOpenLauncher: () => void;
};

export function Dock({ onOpenLauncher }: DockProps) {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = ["top", ...navSections.map((s) => s.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const entries: Array<DockEntry | "sep"> = [
    { id: "top", label: "home", icon: Terminal, href: "#top" },
    ...navSections.map((s) => {
      const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
        experience: Briefcase,
        projects: Grid,
        stack: Layers,
        connect: Mail,
      };
      return { id: s.id, label: s.label, icon: iconMap[s.id] ?? Grid, href: `#${s.id}` };
    }),
    "sep",
    { id: "github", label: "github", icon: Github, href: profile.github, external: true },
    { id: "linkedin", label: "linkedin", icon: Linkedin, href: profile.linkedin, external: true },
    "sep",
    { id: "resume", label: "resume", icon: FileText, href: profile.resume, download: profile.resume },
    { id: "launcher", label: "search apps (⌘K)", icon: Search, action: onOpenLauncher },
  ];

  return (
    <div className="dock" aria-label="Dock">
      <div className="dock-inner">
        {entries.map((entry) =>
          entry === "sep" ? (
            <span className="dock-sep" aria-hidden="true" key="sep" />
          ) : (
            <a
              className={`dock-item ${active === entry.id ? "active" : ""}`}
              key={entry.id}
              href={entry.href}
              target={entry.external ? "_blank" : undefined}
              rel={entry.external ? "noreferrer" : undefined}
              download={entry.download}
              onClick={(e) => {
                if (entry.action) {
                  e.preventDefault();
                  entry.action();
                }
              }}
              aria-label={entry.label}
            >
              <span className="dock-tip">{entry.label}</span>
              <entry.icon />
            </a>
          ),
        )}
      </div>
    </div>
  );
}