"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Dock } from "@/components/Dock";
import { Launcher } from "@/components/Launcher";
import { Panel } from "@/components/Panel";

export function Desktop({ children }: { children: ReactNode }) {
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

  return (
    <>
      <Panel theme={theme} onToggleTheme={toggleTheme} onOpenLauncher={() => setLauncherOpen(true)} />
      <Dock onOpenLauncher={() => setLauncherOpen(true)} />
      {launcherOpen ? <Launcher onClose={() => setLauncherOpen(false)} onToggleTheme={toggleTheme} /> : null}
      {children}
    </>
  );
}