import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

const profile = {
  email: "shaheer.anser@gmail.com",
  phone: "+92 328 5440010",
  phoneHref: "+923285440010",
  linkedin: "https://linkedin.com/in/shaheeranser",
  github: "https://github.com/shaheeranser",
};

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { label: "LinkedIn", value: "linkedin.com/in/shaheeranser", href: profile.linkedin },
  { label: "GitHub", value: "github.com/shaheeranser", href: profile.github },
];

export function ContactPanel() {
  return (
    <section className="section contact-shell" id="contact">
      <div className="container">
        <Reveal>
          <SectionHead
            index="04"
            title="Contact"
            note="Open to full-time and contract engineering roles — remote friendly."
          />
        </Reveal>

        <Reveal>
          <div className="contact-cta">
            <h2>
              Have something to ship that<br className="wide-only" /> needs{" "}
              <span className="hollow" style={{ fontSize: "0.9em" }}>to stay up</span>?
            </h2>
            <p className="sub">
              A product, a platform, or a delivery pipeline worth working through —
              I&apos;d be glad to talk it over.
            </p>
            <div style={{ marginTop: 28 }}>
              <a className="btn accent" href={`mailto:${profile.email}?subject=Let's%20work%20together`}>
                {profile.email} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="contact-links">
          {links.map((link) => (
            <Reveal key={link.label}>
              <a
                className="link-row"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <span className="lbl">{link.label}</span>
                <span className="val">{link.value}</span>
                <span className="arw" aria-hidden="true">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}