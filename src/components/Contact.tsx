import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { contactLinks, profile } from "@/lib/content";

const endpointIcon: Record<string, typeof Mail> = {
  email: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
};

export function Contact() {
  return (
    <section className="section container" id="connect">
      <Reveal>
        <SectionHead
          index="04"
          title="Connect"
          kicker="connect"
          note="Open to full-time roles, contracts and infrastructure audits."
        />
      </Reveal>

      <Reveal delay={90}>
        <div className="card connect-cta window">
          <div>
            <h2>
              Let&apos;s build something that <span className="grad">stays up.</span>
            </h2>
            <p className="sub">
              I reply fast to email. If you have a half-broken service, a backlog of infra debt,
              or an idea that needs an engineer from day zero — reach out.
            </p>
          </div>
          <div className="hero-cta">
            <a className="btn accent" href={`mailto:${profile.email}`}>
              <Mail />
              {profile.email}
            </a>
            <a className="btn" href={profile.resume} download>
              <Download />
              resume
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="endpoints">
          {contactLinks.map((link) => {
            const Icon = endpointIcon[link.label] ?? ArrowUpRight;
            return (
              <a
                className="endpoint"
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                <span className="endpoint-icon">
                  <Icon />
                </span>
                <span>
                  <span className="endpoint-key">{link.label}</span>
                  <br />
                  <span className="endpoint-val">{link.value}</span>
                </span>
                <ArrowUpRight />
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}