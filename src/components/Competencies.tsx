/* eslint-disable @next/next/no-img-element -- shields.io SVG badges are pre-rendered images */
"use client";

import { useState } from "react";
import { Briefcase, Cpu } from "@/components/icons";
import { certifications, education, skills, type Skill } from "@/lib/content";

function badgeSrc(skill: Skill) {
  const label = skill.label.replace(/ /g, "_");
  const logoColor = skill.logoColor ?? "white";
  return `https://img.shields.io/badge/${label}-${skill.color}?style=flat-square&logo=${skill.logo}&logoColor=${logoColor}`;
}

type TabKey = "stack" | "education";

const TABS: Array<{ id: TabKey; label: string; note: string }> = [
  {
    id: "stack",
    label: "Stack",
    note: "The languages, runtimes and infrastructure I reach for when shipping to production.",
  },
  {
    id: "education",
    label: "Education",
    note: "Formal study and the professional certifications I've picked up alongside it.",
  },
];

export function Competencies() {
  const [tab, setTab] = useState<TabKey>("stack");
  const active = TABS.find((t) => t.id === tab)!;

  return (
    <section className="comp-view" id="competencies">
      <h2 className="view-title">Competencies</h2>

      <div className="tabs" role="tablist" aria-label="Competency categories">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`tab ${tab === t.id ? "active" : ""}`}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="tab-note">{active.note}</p>

      <div role="tabpanel" id={`panel-${tab}`}>
        {tab === "stack" ? (
          <div className="skill-groups">
            {skills.map((group) => (
              <div className="group" key={group.label}>
                <div className="group-label">{group.label}</div>
                <div className="badges">
                  {group.items.map((skill) => (
                    <img
                      className="badge"
                      key={skill.label}
                      src={badgeSrc(skill)}
                      alt={skill.label}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="stack-grid">
            <div>
              <div className="group-label">Education</div>
              <div className="about-list">
                {education.map((entry) => (
                  <div className="about-item" key={entry.degree}>
                    <span className="app-icon k-teal">
                      <Briefcase />
                    </span>
                    <div>
                      <div className="about-title">{entry.degree}</div>
                      <div className="about-sub">{entry.date}</div>
                      <div className="about-detail">
                        {entry.school} — {entry.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="group-label">Certifications</div>
              <div className="about-list">
                {certifications.map((cert) => (
                  <div className="about-item" key={cert.name}>
                    <span className="app-icon k-peach">
                      <Cpu />
                    </span>
                    <div>
                      <div className="about-title">{cert.name}</div>
                      <div className="about-detail">
                        {cert.issuer} · {cert.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
