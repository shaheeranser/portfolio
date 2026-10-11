"use client";

import { useEffect, useState } from "react";

const links = [
  { num: "01", label: "Experience", href: "#experience" },
  { num: "02", label: "Projects", href: "#projects" },
  { num: "03", label: "Skills", href: "#skills" },
  { num: "04", label: "Contact", href: "#contact" },
];

export function NavMenu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Muhammad Shaheer — home">
          m.shaheer<span className="lime">[dev]</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              <span className="idx">{link.num}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="overlay-top">
            <a className="brand" href="#top" onClick={() => setOpen(false)}>
              m.shaheer<span className="lime">[dev]</span>
            </a>
            <button className="overlay-close" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <nav className="overlay-links" aria-label="Menu">
            {links.map((link) => (
              <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
                <span className="num">{link.num}</span>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="overlay-foot">
            <span>shaheer.anser@gmail.com</span>
            <span>Lahore · Remote</span>
          </div>
        </div>
      ) : null}
    </header>
  );
}