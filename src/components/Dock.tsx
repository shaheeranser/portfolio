"use client";

import type { ComponentType, SVGProps } from "react";
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
import { profile } from "@/lib/content";
import type { ViewId } from "@/components/Desktop";

type DockEntry = {
  id: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  view?: ViewId;
  href?: string;
  external?: boolean;
  download?: boolean;
  action?: () => void;
};

type DockProps = {
  active: ViewId;
  onNavigate: (view: ViewId) => void;
  onOpenLauncher: () => void;
};

const viewIcon: Record<ViewId, ComponentType<SVGProps<SVGSVGElement>>> = {
  home: Terminal,
  experience: Briefcase,
  work: Grid,
  competencies: Layers,
  connect: Mail,
};

export function Dock({ active, onNavigate, onOpenLauncher }: DockProps) {
  const entries: Array<DockEntry | "sep"> = [
    { id: "home", label: "Home", icon: viewIcon.home, view: "home" },
    { id: "experience", label: "Experience", icon: viewIcon.experience, view: "experience" },
    { id: "work", label: "Work", icon: viewIcon.work, view: "work" },
    { id: "competencies", label: "Competencies", icon: viewIcon.competencies, view: "competencies" },
    { id: "connect", label: "Contact", icon: viewIcon.connect, view: "connect" },
    "sep",
    { id: "github", label: "GitHub", icon: Github, href: profile.github, external: true },
    { id: "linkedin", label: "LinkedIn", icon: Linkedin, href: profile.linkedin, external: true },
    "sep",
    { id: "resume", label: "Résumé", icon: FileText, href: profile.resume, download: true },
    { id: "launcher", label: "Search (⌘K)", icon: Search, action: onOpenLauncher },
  ];

  return (
    <div className="dock" aria-label="Dock">
      <div className="dock-inner">
        {entries.map((entry) => {
          if (entry === "sep") {
            return <span className="dock-sep dock-desktop-only" aria-hidden="true" key="sep" />;
          }
          if (entry.view) {
            const target = entry.view;
            return (
              <button
                type="button"
                className={`dock-item ${active === target ? "active" : ""}`}
                key={entry.id}
                onClick={() => onNavigate(target)}
                aria-label={entry.label}
                aria-current={active === target ? "page" : undefined}
              >
                <span className="dock-tip">{entry.label}</span>
                <entry.icon />
              </button>
            );
          }
          if (entry.action) {
            return (
              <button
                type="button"
                className="dock-item dock-desktop-only"
                key={entry.id}
                onClick={entry.action}
                aria-label={entry.label}
              >
                <span className="dock-tip">{entry.label}</span>
                <entry.icon />
              </button>
            );
          }
          return (
            <a
              className="dock-item dock-desktop-only"
              key={entry.id}
              href={entry.href}
              target={entry.external ? "_blank" : undefined}
              rel={entry.external ? "noreferrer" : undefined}
              download={entry.download || undefined}
              aria-label={entry.label}
            >
              <span className="dock-tip">{entry.label}</span>
              <entry.icon />
            </a>
          );
        })}
      </div>
    </div>
  );
}