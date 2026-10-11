import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export type GithubProject = {
  name: string;
  html_url: string;
  description: string | null;
  language?: string | null;
  fork?: boolean;
};

const spanClass = ["wide", "", "", "wide", "", ""];

const featuredProjects = [
  {
    kind: "OPEN SOURCE",
    name: "Exam Proctoring Platform",
    stack: ["React", "TypeScript", "Express", "MongoDB", "Docker", "AWS"],
    description:
      "LTI 1.3 exam platform that runs inside Moodle, with browser-based proctoring via TensorFlow.js (COCO-SSD), MediaPipe, and face-api. Violations snapshot to self-hosted MinIO.",
    href: "https://github.com/shaheeranser/exam-proctor",
  },
  {
    kind: "OPEN SOURCE",
    name: "CI/CD & Kubernetes Pipeline",
    stack: ["GitHub Actions", "Docker", "Kubernetes", "Azure AKS/ACR"],
    description:
      "Three-service FastAPI stack shipped by one pipeline: Postgres-backed CI, images to ACR, AKS deploys, ephemeral per-PR staging with smoke tests.",
    href: "https://github.com/shaheeranser/github-actions-demo",
  },
  {
    kind: "OPEN SOURCE",
    name: "reamify",
    stack: ["TypeScript", "Node.js"],
    description:
      "MIT library that turns PDF tables into XLSX workbooks with streaming writers, so memory stays bounded on large documents.",
    href: "https://github.com/shaheeranser/reamify",
  },
  {
    kind: "OPEN SOURCE",
    name: "errex",
    stack: ["Python", "LLM"],
    description:
      "Terminal CLI that pipes error logs to an LLM and returns plain-language fixes without ever leaving the shell.",
    href: "https://github.com/shaheeranser/errex",
  },
  {
    kind: "PRODUCT",
    name: "Invoicing portal · Inspirit360",
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    description:
      "Production invoicing portal for European SME back-office teams. Built end to end as founding engineer — architecture, API, frontend, and deployment.",
  },
  {
    kind: "COMMERCIAL",
    name: "Lookvisa",
    stack: ["React", "Express", "MongoDB"],
    description:
      "Commercial platform connecting investors with investment seekers. Designed the core API architecture and data models.",
  },
];

const contributions = [
  {
    status: "Merged PR",
    kind: "done",
    title: "Rotation-aware table-cell hit-testing for slides",
    repo: "genspark-ai/genoffice · 7.6k★",
    href: "https://github.com/genspark-ai/genoffice/pull/171",
  },
  {
    status: "Open issue",
    kind: "open",
    title: "High extraction time and memory usage in @firecrawl/pdf-inspector",
    repo: "firecrawl/pdf-inspector",
    href: "https://github.com/firecrawl/pdf-inspector/issues/585",
  },
];

function FeaturedCard({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) {
  const inner = (
    <>
      <span className="watermark" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <div className="card-top">
          <span className="tag">{project.kind}</span>
          <span className="card-index">/{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h4>{project.name}</h4>
        <p className="desc">{project.description}</p>
      </div>
      <div className="card-foot">
        <div className="stack-chips">
          {project.stack.map((tech) => (
            <span className="chip" key={tech}>{tech}</span>
          ))}
        </div>
        {project.href ? (
          <span className="card-arrow" aria-hidden="true">↗</span>
        ) : (
          <span className="card-index">Private work</span>
        )}
      </div>
    </>
  );

  return (
    <Reveal delay={(index % 3) * 80} className={`featured-card ${spanClass[index] ?? ""}`}>
      {project.href ? (
        <a className="featured-inner" href={project.href} target="_blank" rel="noreferrer" aria-label={project.name}>
          {inner}
        </a>
      ) : (
        <div className="featured-inner">{inner}</div>
      )}
    </Reveal>
  );
}

export function ProjectGrid({ githubProjects }: { githubProjects: GithubProject[] }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <SectionHead
            index="02"
            title="Projects"
            note="Open source, product work, and the infra pipeline behind it."
          />
        </Reveal>

        <div className="project-bento">
          {featuredProjects.map((project, i) => (
            <FeaturedCard project={project} index={i} key={project.name} />
          ))}
        </div>

        <div style={{ marginTop: 72 }}>
          <Reveal>
            <div className="section-head" style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: 28 }}>Open source contributions</h2>
            </div>
          </Reveal>
          <ul className="contribution-list">
            {contributions.map((contribution) => (
              <Reveal as="li" key={contribution.href}>
                <a
                  className="contribution-row"
                  href={contribution.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={`contribution-status ${contribution.kind}`}>{contribution.status}</span>
                  <span className="contribution-title">{contribution.title}</span>
                  <span className="contribution-repo">{contribution.repo}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        {githubProjects.length > 0 ? (
          <div style={{ marginTop: 64 }}>
            <Reveal>
              <div className="section-head" style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 28 }}>More from GitHub</h2>
              </div>
            </Reveal>
            <div className="github-strip">
              {githubProjects.map((project) => (
                <Reveal key={project.html_url}>
                  <a className="github-item" href={project.html_url} target="_blank" rel="noreferrer">
                    <span className="github-name">{project.name}</span>
                    <span className="desc">{project.description}</span>
                    <span className="github-foot">
                      <span>{project.language ?? "CODE"}</span>
                      <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}