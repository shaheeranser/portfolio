import Image from "next/image";

const profile = {
  avatar: "https://avatars.githubusercontent.com/u/126239320?v=4&s=320",
  email: "shaheer.anser@gmail.com",
  github: "https://github.com/shaheeranser",
  linkedin: "https://linkedin.com/in/shaheeranser",
};

export function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-avail">
            <span className="pulse-dot" aria-hidden="true" />
            Available for work — remote
          </span>
          <h1>
            <span className="line">Muhammad</span>
            <span className="line">
              <span className="hollow">Shaheer</span>
              <span className="accent">.</span>
            </span>
          </h1>
          <p className="hero-lede">
            Full-stack software engineer. I build <strong>production web apps</strong> and
            the <strong>infrastructure that keeps them running</strong> — from first
            commit to a deployed, observed system. AI/ML only where it earns its place.
          </p>
          <div className="hero-cta">
            <a className="btn accent" href="#projects">
              See the work <span aria-hidden="true">↘</span>
            </a>
            <a className="btn ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <p className="hero-meta">
            Lahore, Pakistan · Full-time &amp; contract ·{" "}
            <a href={profile.github} target="_blank" rel="noreferrer">github ↗</a>{" "}
            · <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin ↗</a>
          </p>
        </div>

        <div className="hero-panel">
          <span className="glow" aria-hidden="true" />
          <div className="profile-card">
            <div className="profile-head">
              <span className="profile-avatar">
                <Image
                  src={profile.avatar}
                  alt="Muhammad Shaheer portrait"
                  width={96}
                  height={96}
                  unoptimized
                  priority
                />
              </span>
              <div className="profile-role">
                <p className="who">@shaheeranser</p>
                <p className="where">Founding engineer</p>
                <p className="where">Inspirit360 · EU remote</p>
              </div>
            </div>
            <dl className="profile-rows">
              <div className="profile-row">
                <dt>Role</dt>
                <dd>Full-stack · Cloud &amp; DevOps</dd>
              </div>
              <div className="profile-row">
                <dt>Location</dt>
                <dd>Lahore, Pakistan</dd>
              </div>
              <div className="profile-row">
                <dt>Email</dt>
                <dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
              </div>
            </dl>
            <div className="profile-actions">
              <a className="profile-action" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="profile-action" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="profile-action" href="/resume.pdf" download>Resume ↓</a>
            </div>
            <p className="current-tag">
              Currently: production invoicing portal for European SME back-office
              teams — <strong>Next.js · FastAPI · PostgreSQL</strong>, owned end to end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}