import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from "@/components/icons";
import { SectionHead } from "@/components/SectionHead";
import { contactLinks, profile } from "@/lib/content";

const endpointIcon: Record<string, typeof Mail> = {
  Email: Mail,
  Phone: Phone,
  GitHub: Github,
  LinkedIn: Linkedin,
};

export function Contact() {
  return (
    <section className="contact-view" id="connect">
      <SectionHead title="Contact" note="Open to full-time roles, contracts and infrastructure work." />

        <div className="connect-cta">
          <div>
            <h2>Let&apos;s build something that stays up.</h2>
            <p className="sub">
              I reply fast to email. If you have a half-broken service, a backlog of
              infrastructure debt, or an idea that needs an engineer from day one, reach out.
            </p>
          </div>
          <div className="cta-row">
            <a className="btn accent" href={`mailto:${profile.email}`}>
              <Mail />
              Email me
            </a>
            <a className="btn" href={profile.resume} download>
              <Download />
              Résumé
            </a>
          </div>
        </div>

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
                <ArrowUpRight className="icon arrow" />
              </a>
            );
          })}
        </div>
    </section>
  );
}
