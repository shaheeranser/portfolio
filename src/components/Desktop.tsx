"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Competencies } from "@/components/Competencies";
import { Contact } from "@/components/Contact";
import { Dock } from "@/components/Dock";
import { Experience } from "@/components/Experience";
import { Home } from "@/components/Home";
import { Launcher } from "@/components/Launcher";
import { Panel } from "@/components/Panel";
import { Work } from "@/components/Work";
import { opensource, profile, projects, roles } from "@/lib/content";

export type ViewId = "home" | "experience" | "work" | "competencies" | "connect";

const VIEW_TITLE: Record<ViewId, string> = {
  home: profile.host,
  experience: "experience",
  work: "work",
  competencies: "competencies",
  connect: "contact",
};

const VIEW_META: Record<ViewId, string> = {
  home: "fastfetch",
  experience: `${roles.length} roles`,
  work: `${projects.length} projects · ${opensource.length} open source`,
  competencies: "skills & qualifications",
  connect: "usually replies within a day",
};

export function Desktop() {
  const [view, setView] = useState<ViewId>("home");
  const [launcherOpen, setLauncherOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    typeof document !== "undefined" &&
    document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // private mode etc.
    }
  }, [theme]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setLauncherOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const navigate = (next: ViewId) => setView(next);

  const viewer: Record<ViewId, ReactNode> = {
    home: <Home onNavigate={navigate} />,
    experience: <Experience />,
    work: <Work />,
    competencies: <Competencies />,
    connect: <Contact />,
  };

  return (
    <>
      <Panel
        theme={theme}
        view={view}
        onToggleTheme={toggleTheme}
        onNavigate={navigate}
        onOpenLauncher={() => setLauncherOpen(true)}
      />
      <main className="desktop-stage">
        <div className="window view-window">
          <div className="window-bar">
            <span className="traffic" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="window-title">{VIEW_TITLE[view]}</span>
            <span className="window-actions">{VIEW_META[view]}</span>
          </div>
          <div className="view-body" key={view}>
            {viewer[view]}
          </div>
        </div>
      </main>
      <Dock
        active={view}
        onNavigate={navigate}
        onOpenLauncher={() => setLauncherOpen(true)}
      />
      {launcherOpen ? (
        <Launcher
          onClose={() => setLauncherOpen(false)}
          onToggleTheme={toggleTheme}
          onNavigate={navigate}
        />
      ) : null}
    </>
  );
}