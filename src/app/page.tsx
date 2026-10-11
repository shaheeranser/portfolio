import { Contact } from "@/components/Contact";
import { Desktop } from "@/components/Desktop";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <Desktop>
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-status">
            <span className="led ok live" aria-hidden="true" />© 2026 Muhammad Shaheer ·{" "}
            {profile.location}
          </span>
          <span className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              github
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin
            </a>
            <a href={`mailto:${profile.email}`}>email</a>
          </span>
          <a className="back-top" href="#top">
            ↑ back to top
          </a>
        </div>
      </footer>
    </Desktop>
  );
}