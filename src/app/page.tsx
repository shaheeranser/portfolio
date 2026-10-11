import { ContactPanel } from "@/components/ContactPanel";
import { ExperienceLog } from "@/components/ExperienceLog";
import { Hero } from "@/components/Hero";
import { NavMenu } from "@/components/NavMenu";
import { ProjectGrid, type GithubProject } from "@/components/ProjectGrid";
import { SkillsManifest } from "@/components/SkillsManifest";
import { Ticker } from "@/components/Ticker";

export const revalidate = 43200;

async function getGithubProjects(): Promise<GithubProject[]> {
  const username = process.env.GITHUB_USERNAME ?? "shaheeranser";

  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=user:${username}&sort=updated&order=desc&per_page=6`,
      { headers: { Accept: "application/vnd.github+json" }, next: { revalidate } },
    );
    if (!response.ok) return [];
    const payload = (await response.json()) as { items?: GithubProject[] };
    return (payload.items ?? []).filter(
      (project) => project.name.toLowerCase() !== username.toLowerCase() && project.description,
    );
  } catch {
    return [];
  }
}

export default async function Home() {
  const githubProjects = await getGithubProjects();

  return (
    <div className="site-shell">
      <NavMenu />
      <main>
        <Hero />
        <Ticker />
        <ExperienceLog />
        <ProjectGrid githubProjects={githubProjects} />
        <SkillsManifest />
        <ContactPanel />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="mono">© 2026 Muhammad Shaheer · Lahore, Pakistan</span>
          <span className="footer-links">
            <a href="https://github.com/shaheeranser" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/shaheeranser" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:shaheer.anser@gmail.com">Email</a>
          </span>
          <a className="back-top mono" href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}