"use client";

import { useEffect, useState, type ComponentType, type SVGProps } from "react";
import {
  Briefcase,
  Download,
  Github,
  Grid,
  Layers,
  Mail,
  Menu,
  Moon,
  Phone,
  Search,
  Sun,
  Terminal,
} from "@/components/icons";
import { navSections, profile } from "@/lib/content";

const sheetIcon: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  experience: Briefcase,
  projects: Grid,
  stack: Layers,
  connect: Mail,
};

type PanelProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  onOpenLauncher: () => void;
};

export function Panel({ theme, onToggleTheme, onOpenLauncher }: PanelProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [clock, setClock] = useState("--:--");
  const [date, setDate] = useState("----- -- ---");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`panel ${scrolled ? "scrolled" : ""}`}>
      <div className="container panel-inner">
        <a className="brand" href="#top" aria-label={`${profile.name} — home`}>
          <span className="brand-mark" aria-hidden="true">
            <Terminal />
          </span>
          <span className="brand-name">
            shaheer<b>.</b>dev
          </span>
        </a>

        <nav className="panel-menu" aria-label="Primary">
          {navSections.map((s) => (
            <a className="panel-link" href={`#${s.id}`} key={s.id}>
              <span className="panel-idx">{s.num}</span>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="panel-side">
          <span className="tray-status wide-only">
            <span className="led ok live" aria-hidden="true" />
            open to work
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

      <div className="progress" aria-hidden="true">
        <i style={{ transform: `scaleX(${progress})` }} />
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
            <a className="sheet-row" href="#top" onClick={() => setMenuOpen(false)}>
              <span className="sr-only">Home</span>
              <Terminal />
              <span>home</span>
              <span className="sub">~/</span>
            </a>
            {navSections.map((s) => {
              const Icon = sheetIcon[s.id] ?? Grid;
              return (
                <a className="sheet-row" href={`#${s.id}`} key={s.id} onClick={() => setMenuOpen(false)}>
                  <Icon />
                  <span>{s.label}</span>
                  <span className="sub">{s.num}</span>
                </a>
              );
            })}
            <div className="sheet-sep" aria-hidden="true" />
            <a className="sheet-row" href={`mailto:${profile.email}`}>
              <Mail />
              <span>email</span>
              <span className="sub">{profile.email}</span>
            </a>
            <a className="sheet-row" href={`tel:${profile.phoneHref}`}>
              <Phone />
              <span>call</span>
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
              <span>toggle theme</span>
              <span className="sub">{theme}</span>
            </button>
            <a className="sheet-row" href={profile.github} target="_blank" rel="noreferrer">
              <Github />
              <span>github</span>
              <span className="sub">↗</span>
            </a>
            <a className="sheet-row" href={profile.resume} download>
              <Download />
              <span>resume</span>
              <span className="sub">pdf</span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}