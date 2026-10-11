import { Briefcase, Cpu } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { certifications, education, skills } from "@/lib/content";

export function Stack() {
  return (
    <section className="section container" id="stack">
      <Reveal>
        <SectionHead
          index="03"
          title="Stack & Systems"
          kicker="stack"
          note="The languages, runtimes and infrastructure I reach for in production."
        />
      </Reveal>

      <div className="stack-grid">
        <Reveal delay={90}>
          <div>
            {skills.map((group) => (
              <div className="group" key={group.label}>
                <div className="group-label">
                  <span className="hash">#</span>
                  {group.label}
                </div>
                <div className="pills">
                  {group.items.map((item) => (
                    <span className="pill accent" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <div className="group">
              <div className="group-label">
                <span className="hash">#</span>
                education
              </div>
              <div className="about-list">
                {education.map((entry) => (
                  <div className="about-item" key={entry.degree}>
                    <span className="app-icon k-teal">
                      <Briefcase />
                    </span>
                    <div>
                      <div className="about-title">
                        {entry.degree} <span className="about-sub">· {entry.date}</span>
                      </div>
                      <div className="about-detail">
                        {entry.school} — {entry.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="group">
              <div className="group-label">
                <span className="hash">#</span>
                certifications
              </div>
              <div className="about-list">
                {certifications.map((cert) => (
                  <div className="about-item" key={cert.name}>
                    <span className="app-icon">
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
        </Reveal>
      </div>
    </section>
  );
}