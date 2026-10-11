import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

const skills: Array<[string, string[]]> = [
  ["Languages", ["TypeScript", "JavaScript", "Python", "C++", "SQL"]],
  ["Frontend", ["React", "Next.js", "Vite", "HTML5", "CSS3"]],
  ["Backend", ["Node.js", "Express", "FastAPI", "Flask"]],
  ["Databases", ["PostgreSQL", "MongoDB", "MySQL"]],
  ["Cloud & DevOps", ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Linux", "Caddy", "MinIO"]],
  ["Data & ML", ["TensorFlow", "TensorFlow.js", "MediaPipe", "NumPy", "pandas", "scikit-learn"]],
];

const education = [
  {
    degree: "BSc Computer Systems",
    school: "Riphah International University",
    date: "2024 — 2026",
    detail: "CGPA 3.71/4.0 · exchange semester at Multimedia University (MMU), Cyberjaya, Malaysia (Apr–Jul 2026).",
  },
  {
    degree: "Associate Degree, CS",
    school: "Riphah International University",
    date: "2022 — 2024",
    detail: "CGPA 3.98/4.0.",
  },
];

const certifications = [
  ["OCI AI Infrastructure Associate", "Oracle University", "2025"],
  ["Google AI Essentials", "Coursera", "Aug 2025"],
  ["AI for Brain-Controlled Applications", "NRG", "Jul 2025"],
];

export function SkillsManifest() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <SectionHead
            index="03"
            title="Stack & credentials"
            note="A practical toolkit for taking a product from first commit to a reliable, observable system."
          />
        </Reveal>
        <div className="skills-grid">
          <div>
            <Reveal>
              <p className="skills-intro">
                I work <strong>end to end</strong> — architecture, API, frontend,
                and the deployment that keeps it live. I bring AI/ML in{" "}
                <strong>where it actually earns its place</strong>, not as a headline.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="mini-card">
                <h3>Education</h3>
                <ul className="cert-list">
                  {education.map((entry) => (
                    <li key={entry.degree}>
                      <strong>{entry.degree}</strong>
                      <span className="sep"> · </span>
                      {entry.school}
                      <span className="sep"> · </span>
                      {entry.date}
                      <br />
                      {entry.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="mini-card">
                <h3>Certifications</h3>
                <ul className="cert-list">
                  {certifications.map(([name, issuer, date]) => (
                    <li key={name}>
                      {name}
                      <span className="sep"> — </span>
                      {issuer}
                      <span className="sep"> · </span>
                      {date}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div>
            {skills.map(([label, values], i) => (
              <Reveal delay={i * 60} key={label}>
                <div className="skill-row">
                  <h4 className="skill-label">{label}</h4>
                  <div className="skill-chips">
                    {values.map((value) => (
                      <span className="skill-chip" key={value}>{value}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}