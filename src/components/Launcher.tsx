"use client";

import { useEffect, useMemo, useRef, useState, type ComponentType, type SVGProps } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Download,
  Github,
  Grid,
  Layers,
  Linkedin,
  Mail,
  Sun,
  Terminal,
} from "@/components/icons";
import { navSections, profile } from "@/lib/content";
import type { ViewId } from "@/components/Desktop";

type Item = {
  kind: string;
  label: string;
  meta: string;
  keywords: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  run: () => void;
};

const sectionIcon: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  work: Grid,
  competencies: Layers,
  connect: Mail,
};

const sectionKeywords: Record<string, string> = {
  work: "work projects portfolio shipped open source oss contributions",
  competencies: "competencies stack skills tools education certifications",
  connect: "contact email hire reach",
};

type LauncherProps = {
  onClose: () => void;
  onToggleTheme: () => void;
  onNavigate: (view: ViewId) => void;
};

export function Launcher({ onClose, onToggleTheme, onNavigate }: LauncherProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const items = useMemo<Item[]>(() => {
    const nav: Item[] = [
      {
        kind: "nav",
        label: "Home",
        meta: "home",
        keywords: "home top start hero intro",
        icon: Terminal,
        run: () => onNavigate("home"),
      },
      {
        kind: "nav",
        label: "Experience",
        meta: "experience",
        keywords: "experience jobs work history roles",
        icon: Briefcase,
        run: () => onNavigate("experience"),
      },
      ...navSections
        .filter((s) => s.id !== "experience")
        .map((s) => ({
          kind: "nav",
          label: s.label,
          meta: s.label.toLowerCase(),
          keywords: `${s.label} section jump open ${sectionKeywords[s.id] ?? ""}`,
          icon: sectionIcon[s.id] ?? Mail,
          run: () => onNavigate(s.id as ViewId),
        })),
    ];
    const links: Item[] = [
      {
        kind: "link",
        label: "Open GitHub profile",
        meta: "↗",
        keywords: "github code repos git source",
        icon: Github,
        run: () => window.open(profile.github, "_blank", "noreferrer"),
      },
      {
        kind: "link",
        label: "Open LinkedIn profile",
        meta: "↗",
        keywords: "linkedin work experience connect",
        icon: Linkedin,
        run: () => window.open(profile.linkedin, "_blank", "noreferrer"),
      },
      {
        kind: "link",
        label: "Download résumé",
        meta: "PDF",
        keywords: "resume cv curriculum vitae download",
        icon: Download,
        run: () => window.open(profile.resume, "_blank", "noreferrer"),
      },
      {
        kind: "action",
        label: "Send email",
        meta: profile.email,
        keywords: "mail contact hire email reach",
        icon: Mail,
        run: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        kind: "action",
        label: "Toggle theme",
        meta: "dark / light",
        keywords: "theme light dark mode toggle",
        icon: Sun,
        run: onToggleTheme,
      },
    ];
    return [...nav, ...links];
  }, [onToggleTheme, onNavigate]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => `${item.label} ${item.keywords}`.toLowerCase().includes(q));
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => (filtered.length ? (i + 1) % filtered.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = filtered[active];
        if (item) {
          item.run();
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filtered, active, onClose]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(".launcher-item.active")
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  return (
    <div className="launcher-overlay" onMouseDown={onClose} role="presentation">
      <div
        className="launcher"
        role="dialog"
        aria-modal="true"
        aria-label="Launcher"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="launcher-bar">
          <span className="glyph">
            <ArrowUpRight />
          </span>
          <input
            className="launcher-input"
            placeholder="Search apps and actions"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            aria-label="Search apps and actions"
            autoComplete="off"
            spellCheck={false}
            autoFocus
          />
          <span className="kbd">esc</span>
        </div>

        <div className="launcher-list" ref={listRef}>
          {filtered.length === 0 ? (
            <div className="launcher-empty">
              Nothing matches “{query}”. Try “projects”, “résumé” or “github”.
            </div>
          ) : (
            filtered.map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={`${item.kind}-${item.label}`}
                  type="button"
                  className={`launcher-item ${i === active ? "active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    item.run();
                    onClose();
                  }}
                >
                  <span className="li-icon">
                    <Icon />
                  </span>
                  <span>{item.label}</span>
                  <span className="li-kind">{item.meta}</span>
                </button>
              );
            })
          )}
        </div>

        <div className="launcher-foot">
          <span>↑↓ navigate · ⏎ select · esc close</span>
        </div>
      </div>
    </div>
  );
}