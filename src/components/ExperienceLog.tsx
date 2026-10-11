import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

const roles = [
  {
    company: "Inspirit360",
    location: "Finland · Remote",
    title: "Software Engineer & Technical Consultant",
    role: "Founding Engineer",
    date: "Jan 2026 — Present",
    current: true,
    bullets: [
      "Founding engineer and sole technical owner of a production invoicing portal serving European SME back-office operations.",
      "Built the platform end to end on Next.js, FastAPI, and PostgreSQL — from an empty repository to a live production service.",
      "Own the data models, API surface, and deployment workflow; advise leadership on technical service expansion.",
    ],
  },
  {
    company: "Alpha Network",
    location: "Remote",
    title: "Machine Learning Intern",
    role: "ML Intern",
    date: "Aug 2025",
    current: false,
    bullets: [
      "Built an AI customer-support chatbot, fine-tuning DistilBERT for intent classification and FlanT5 for response generation behind a Flask API.",
      "Synthetically expanded the training corpus to lift intent coverage against sparse support logs.",
    ],
  },
];

export function ExperienceLog() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <SectionHead
            index="01"
            title="Experience"
            note="Where I've been shipping — production code, end to end."
          />
        </Reveal>
        <div className="timeline">
          {roles.map((role, i) => (
            <div className={`timeline-item ${role.current ? "current" : ""}`} key={role.company}>
              <span className="timeline-dot" aria-hidden="true" />
              <Reveal delay={i * 90}>
                <article className="role-card">
                  <div className="role-head">
                    <h3>
                      {role.company}
                      {role.current ? <span className="role-badge">now</span> : null}
                    </h3>
                    <span className="role-date">{role.date} · {role.location}</span>
                  </div>
                  <p className="role-title">
                    <strong>{role.title}</strong> — {role.role}
                  </p>
                  <ul className="role-bullets">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}