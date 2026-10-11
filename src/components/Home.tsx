"use client";

import { profile, terminalInfo } from "@/lib/content";
import type { ViewId } from "@/components/Desktop";

const OPEN_BRACKET = ["  ██ ", " ██  ", "██   ", " ██  ", "  ██ "];
const CLOSE_BRACKET = OPEN_BRACKET.map((row) => row.split("").reverse().join(""));
const SLASH = ["    █", "   ██", "  ██ ", " ██  ", "██   "];
const CODE_ART = OPEN_BRACKET.map(
  (row, i) => `${row} ${SLASH[i]} ${CLOSE_BRACKET[i]}`,
);

export function Home({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  const host = `${profile.handle}@localhost`;

  return (
    <section className="home-view" id="top">
      <div className="ff">
        <div className="ff-prompt">
          <span className="ff-user">{host}</span>
          <span className="ff-dim">:~$</span>
          <span className="ff-cmd">fastfetch</span>
        </div>

        <div className="ff-grid">
          <pre className="ff-art" aria-hidden="true">
            {CODE_ART.join("\n")}
          </pre>

          <div className="ff-info">
            <p className="ff-name">{profile.name}</p>
            <div className="ff-rule" aria-hidden="true" />
            {terminalInfo.map((row, i) => (
              <div
                className="ff-row"
                key={row.k}
                style={{ animationDelay: `${140 + i * 80}ms` }}
              >
                <span className="ff-key">{row.k}</span>
                <span className="ff-val">{row.v}</span>
              </div>
            ))}
            <div
              className="ff-cursor-line"
              style={{ animationDelay: `${140 + terminalInfo.length * 80}ms` }}
            >
              <span className="ff-cursor" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="ff-actions">
          <button type="button" className="term-btn" onClick={() => onNavigate("work")}>
            view projects
          </button>
          <button type="button" className="term-btn" onClick={() => onNavigate("connect")}>
            get in touch
          </button>
          <a className="term-btn" href={profile.resume} download>
            download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
