import type { ComponentType, SVGProps } from "react";
import { Briefcase, Cpu } from "@/components/icons";
import { SectionHead } from "@/components/SectionHead";
import { roles } from "@/lib/content";

const roleIcon: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Inspirit360: Briefcase,
  "Alpha Network": Cpu,
};

export function Experience() {
  return (
    <section className="experience-view" id="experience">
      <SectionHead
        title="Experience"
        note="Where I've shipped production software, and what I owned end to end."
      />

      <div className="exp">
        {roles.map((role) => {
          const Icon = roleIcon[role.company] ?? Briefcase;
          return (
            <article className="exp-row" key={role.company}>
              <span className="exp-icon" aria-hidden="true">
                <Icon />
              </span>
              <div>
                <div className="exp-head">
                  <span className="exp-company">{role.company}</span>
                  {role.level === "active" ? <span className="tag ok">{role.location}</span> : null}
                </div>
                <p className="exp-title">
                  {role.title}
                  {role.level === "log" ? ` — ${role.location}` : ""}
                </p>
                <ul className="exp-bullets">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <span className="exp-date">{role.date}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
