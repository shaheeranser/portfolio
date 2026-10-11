import type { ComponentType, SVGProps } from "react";
import {
  ArrowUpRight,
  Cpu,
  FileText,
  Layers,
  Mail,
  Send,
  Terminal,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { alsoShipped, contributions, projects, type Project } from "@/lib/content";

const appIcon: Record<string, { icon: ComponentType<SVGProps<SVGSVGElement>>; tone: string }> = {
  watcher: { icon: Terminal, tone: "k-teal" },
  "Exam Proctoring Platform": { icon: Cpu, tone: "k-peach" },
  "CI/CD & Kubernetes Pipeline": { icon: Layers, tone: "k-pink" },
  relaybox: { icon: Send, tone: "k-green" },
  jattmail: { icon: Mail, tone: "k-pink" },
  reamify: { icon: FileText, tone: "k-teal" },
};

function AppTile({ project, delay }: { project: Project; delay: number }) {
  const { icon: Icon, tone } = appIcon[project.name] ?? { icon: Terminal, tone: "" };
  return (
    <a
      className="app-tile"
      href={project.href ?? "#connect"}
      target={project.href ? "_blank" : undefined}
      rel={project.href ? "noreferrer" : undefined}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className={`app-icon ${tone}`} aria-hidden="true">
        <Icon />
      </span>
      <span>
        <span className="app-name">
          {project.name}
          <span className="app-kind">{project.kind}</span>
        </span>
        <p className="app-desc">{project.description}</p>
        <p className="app-stack">
          {project.stack.map((item) => (
            <span className="pill" key={item}>
              {item}
            </span>
          ))}
        </p>
      </span>
      {project.href ? (
        <span className="app-arrow">
          <ArrowUpRight />
        </span>
      ) : null}
    </a>
  );
}

export function Projects() {
  return (
    <section className="section container" id="projects">
      <Reveal>
        <SectionHead
          index="02"
          title="Projects"
          kicker="projects"
          note="Self-hosted infrastructure, dev tools and compiler-adjacent experiments."
        />
      </Reveal>

      <Reveal delay={90}>
        <div className="app-grid">
          {projects.map((project, i) => (
            <AppTile project={project} key={project.name} delay={i * 40} />
          ))}
        </div>
      </Reveal>

      <div className="subhead">
        <span className="subhead-icon">▸</span> also shipped <span className="count">{alsoShipped.length}</span>
      </div>

      <Reveal delay={60}>
        <div className="rows">
          {alsoShipped.map((project) => (
            <a
              className="row"
              key={project.name}
              href={project.href ?? "#connect"}
              target={project.href ? "_blank" : undefined}
              rel={project.href ? "noreferrer" : undefined}
            >
              <span>
                <span className="row-title">{project.name}</span>
                <span className="row-sub">
                  {project.wire} · {project.stack.join(" · ")}
                </span>
              </span>
              <span className="row-right">
                <span className="row-tag">{project.kind}</span>
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <div className="subhead">
        <span className="subhead-icon">⤴</span> open-source contributions{" "}
        <span className="count">{contributions.length}</span>
      </div>

      <Reveal delay={60}>
        <div className="rows">
          {contributions.map((pr) => (
            <a className="row" key={pr.title} href={pr.href} target="_blank" rel="noreferrer">
              <span>
                <span className="row-title">{pr.title}</span>
                <span className="row-sub">{pr.repo}</span>
              </span>
              <span className="row-right">
                <span className={`row-tag ${pr.state}`}>{pr.status}</span>
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}