import { Download } from "@/components/icons";
import { WindowFrame } from "@/components/WindowFrame";
import { fastfetch, profile } from "@/lib/content";

const ascii = [
  "████████",
  "████████",
  "██",
  "████████",
  "████████",
  "████████",
  "      ██",
  "████████",
  "████████",
];

const asciiColor = [
  "var(--pink)",
  "var(--pink)",
  "var(--mauve)",
  "var(--mauve)",
  "var(--blue)",
  "var(--blue)",
  "var(--sky)",
  "var(--teal)",
  "var(--teal)",
];

export function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-avail">
            <span className="led ok live" aria-hidden="true" />
            {profile.availability}
          </span>

          <h1>
            Muhammad <span className="grad">Shaheer</span>
          </h1>

          <p className="hero-role">
            full-stack engineer <span className="sep">{"//"}</span> cloud, devops &amp; systems
          </p>

          <p className="hero-lede">
            I build <strong>production web apps</strong> and the{" "}
            <strong>infrastructure that keeps them running</strong> — from first commit to a
            deployed, observed system. AI/ML only where it earns its place.
          </p>

          <div className="hero-cta">
            <a className="btn accent" href="#projects">
              browse projects
            </a>
            <a className="btn" href="#connect">
              let&apos;s talk
            </a>
            <a className="btn" href={profile.resume} download>
              <Download />
              resume
            </a>
          </div>

          <p className="hero-meta">
            <span>{profile.location}</span>
            <span className="dim">·</span>
            <span>full-time &amp; contract</span>
            <span className="dim">·</span>
            <span>{profile.timezone}</span>
          </p>
        </div>

        <WindowFrame title="shaheer@dev: ~" className="term">
          <div className="window-body term-window">
            <div className="fetch-ascii" aria-hidden="true">
              {ascii.map((row, i) => (
                <span key={i} style={{ color: asciiColor[i] }}>
                  {row}
                </span>
              ))}
            </div>
            <div className="fetch-info">
              <div className="term-line" style={{ animationDelay: "100ms" }}>
                <span className="fetch-host">
                  {profile.handle}
                  <span className="at">@</span>
                  <span className="host">localhost</span>
                </span>
              </div>
              <div className="fetch-rule" aria-hidden="true" />
              {fastfetch.map((row, i) => (
                <div className="term-line fetch-row" key={row.k} style={{ animationDelay: `${220 + i * 90}ms` }}>
                  <span className="fetch-key">{row.k}</span>
                  <span className="fetch-sep">:</span>
                  <span className="fetch-val">{row.v}</span>
                </div>
              ))}
              <div className="term-line" style={{ animationDelay: `${220 + fastfetch.length * 90 + 60}ms` }}>
                <span className="term-cursor" aria-hidden="true" />
              </div>
            </div>
          </div>
        </WindowFrame>
      </div>
    </section>
  );
}