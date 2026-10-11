import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { roles } from "@/lib/content";

export function Experience() {
  return (
    <section className="section container" id="experience">
      <Reveal>
        <SectionHead
          index="01"
          title="Experience"
          kicker="experience"
          note="Where I've shipped production software — and what I owned."
        />
      </Reveal>

      <Reveal delay={90}>
        <div className="exp">
          {roles.map((role) => (
            <article className="exp-row" key={role.company}>
              <span className="exp-badge" aria-hidden="true">
                {role.company.charAt(0)}
              </span>
              <div>
                <div className="exp-head">
                  <span className="exp-company">{role.company}</span>
                  {role.level === "active" ? <span className="pill ok accent">● {role.location}</span> : null}
                </div>
                <p className="exp-title">
                  {role.title} {role.level === "log" ? `· ${role.location}` : ""}
                </p>
                <ul className="exp-bullets">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <span className="exp-date">{role.date}</span>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}