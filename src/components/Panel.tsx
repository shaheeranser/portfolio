"use client";

import { useEffect, useState, type ComponentType, type SVGProps } from "react";
import {
  Briefcase,
  Download,
  Github,
  Grid,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Search,
  Sun,
  Terminal,
} from "@/components/icons";
import { navSections, profile } from "@/lib/content";
import type { ViewId } from "@/components/Desktop";

const sheetIcon: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  experience: Briefcase,
  work: Grid,
  competencies: Layers,
  connect: Mail,
};

type PanelProps = {
  theme: "dark" | "light";
  view: ViewId;
  onToggleTheme: () => void;
  onNavigate: (view: ViewId) => void;
  onOpenLauncher: () => void;
};

export function Panel({ theme, view, onToggleTheme, onNavigate, onOpenLauncher }: PanelProps) {
  const [clock, setClock] = useState("--:--");
  const [date, setDate] = useState("----- -- ---");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
      setDate(
        now.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "2-digit",
          month: "short",
        }),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="panel">
      <div className="container panel-inner">
        <button
          className="brand"
          type="button"
          onClick={() => onNavigate("home")}
          aria-label={`${profile.name} — home`}
        >
          <span className="brand-mark" aria-hidden="true">
            {"</>"}
          </span>
          <span className="brand-name">Muhammad Shaheer</span>
        </button>

        <div className="panel-side">
          <span className="tray-status wide-only">
            <span className="led ok live" aria-hidden="true" />
            Open to work
          </span>
          <span className="panel-clock">
            <span className="dim">{date}</span> · {clock}
          </span>
          <div className="tray">
            <button
              className="tray-btn square"
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              <span className="glyph icon-to-dark">
                <Sun />
              </span>
              <span className="glyph icon-to-light">
                <Moon />
              </span>
            </button>
            <button
              className="tray-btn wide-only"
              type="button"
              onClick={onOpenLauncher}
              aria-label="Search (launcher)"
            >
              <span className="glyph">
                <Search />
              </span>
              <span className="kbd">⌘K</span>
            </button>
          </div>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          className="sheet-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onClick={() => setMenuOpen(false)}
        >
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-grab" aria-hidden="true" />
            <button
              className="sheet-row"
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onNavigate("home");
              }}
            >
              <Terminal />
              <span>Home</span>
            </button>
            {navSections.map((s) => {
              const Icon = sheetIcon[s.id] ?? Grid;
              return (
                <button
                  className="sheet-row"
                  type="button"
                  key={s.id}
                  onClick={() => {
                    setMenuOpen(false);
                    onNavigate(s.id as ViewId);
                  }}
                >
                  <Icon />
                  <span>{s.label}</span>
                  {view === s.id ? <span className="sub">open</span> : null}
                </button>
              );
            })}
            <div className="sheet-sep" aria-hidden="true" />
            <a className="sheet-row" href={`mailto:${profile.email}`}>
              <Mail />
              <span>Email</span>
              <span className="sub">{profile.email}</span>
            </a>
            <a className="sheet-row" href={`tel:${profile.phoneHref}`}>
              <Phone />
              <span>Call</span>
              <span className="sub">{profile.phone}</span>
            </a>
            <div className="sheet-sep" aria-hidden="true" />
            <button
              className="sheet-row"
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onToggleTheme();
              }}
            >
              <Sun />
              <span>Toggle theme</span>
              <span className="sub">{theme}</span>
            </button>
            <a className="sheet-row" href={profile.github} target="_blank" rel="noreferrer">
              <Github />
              <span>GitHub</span>
              <span className="sub">↗</span>
            </a>
            <a className="sheet-row" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin />
              <span>LinkedIn</span>
              <span className="sub">↗</span>
            </a>
            <a className="sheet-row" href={profile.resume} download>
              <Download />
              <span>Résumé</span>
              <span className="sub">PDF</span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}