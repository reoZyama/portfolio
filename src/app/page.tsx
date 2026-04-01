import { Nav } from "@/components/Nav";
import { ContactForm } from "@/components/ContactForm";
import { WorkGallery } from "@/components/WorkGallery";
import { siteContent } from "@/content/siteContent";

export default function Home() {
  const c = siteContent;
  const marqueeItems = [...c.marquee, ...c.marquee];

  return (
    <>
      <Nav name={c.name} />

      <section className="hero">
        <div className="wrap">
          <div className="hero__inner">
            <h1 className="hero__name show">
              {c.hero.line1}
              <br />
              <em>{c.hero.line2}</em>
            </h1>
            <div className="hero__foot show">
              <p className="hero__desc">
                {c.hero.desc1}
                <br />
                {c.hero.desc2}
              </p>
              <div className="hero__avail">
                <span className="dot-green" />
                <span>{c.hero.avail}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-bar" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((t, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={`${t}-${idx}`} style={{ display: "contents" }}>
              <span className="marquee-item">{t}</span>
              <span className="marquee-sep">/</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section section-border" id="work">
        <div className="wrap">
          <div className="work-header show">
            <h2 className="work-title">制作事例</h2>
            <span className="work-years">2022 — 2026</span>
          </div>
          <WorkGallery items={c.work} />
        </div>
      </section>

      <section className="section section-border" id="about">
        <div className="wrap">
          <div className="section-eyebrow show">About</div>
          <div className="about-grid">
            <div className="about-sticky show">
              <img
                src={c.about.photo}
                alt={c.about.photoAlt}
                width={600}
                height={750}
                loading="lazy"
                className="about-img"
              />
            </div>
            <div className="about-body show">
              <h2 className="about-head">
                {c.about.title1}
                <br />
                <em>{c.about.title2}</em>
              </h2>
              <p className="about-lead">{c.about.subtitle}</p>
              {c.about.bio.map((p) => (
                <p key={p} className="about-p">
                  {p}
                </p>
              ))}
              <div className="about-divider" />
              <div className="skills-grid">
                <div>
                  <p className="skill-group-label">Design</p>
                  {c.about.skills.map((s) => (
                    <p key={s} className="skill-item">
                      {s}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="skill-group-label">Tools</p>
                  {c.about.tools.map((s) => (
                    <p key={s} className="skill-item">
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-border" id="services">
        <div className="wrap">
          <div className="section-eyebrow show">Services</div>
          <div className="services-inner show">
            <div className="services-head-wrap">
              <h2 className="services-head">
                一緒に
                <br />
                <em>取り組めること</em>
              </h2>
            </div>
            <div className="services-list">
              {c.services.map((s) => (
                <div key={s.n} className="service-row">
                  <p className="service-n">{s.n}</p>
                  <h3 className="service-name">{s.name}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <ul className="service-tags">
                    {s.tags.map((t) => (
                      <li key={t} className="service-tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="wrap">
          <div className="section-eyebrow show">Process</div>
          <h2
            className="about-head show"
            style={{
              marginBottom: "clamp(var(--sp10),4vw,var(--sp16))",
              maxWidth: "20ch",
            }}
          >
            制作の進め方
          </h2>
          <div className="approach-grid show">
            {c.process.map((p) => (
              <div key={p.n} className="approach-cell">
                <p className="approach-n">{p.n}</p>
                <p className="approach-title">{p.title}</p>
                <p className="approach-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-border" id="contact">
        <div className="wrap">
          <div className="section-eyebrow show">Contact</div>
          <div className="contact-top show">
            <h2 className="contact-head">
              {c.contact.heading}
              <br />
              <em>{c.contact.headingEm}</em>
            </h2>
          </div>

          <div className="contact-grid show">
            <div>
              <p className="contact-intro">{c.contact.intro}</p>
              <a href={`mailto:${c.email}`} className="contact-email-link">
                <span>{c.email}</span>
                <ArrowIcon size={18} />
              </a>

              <div className="contact-links">
                {c.contact.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{s.label}</span>
                    <span className="link-arrow">
                      <ArrowIcon size={15} />
                    </span>
                  </a>
                ))}
              </div>

              <div className="contact-avail">
                <span className="dot-green" />
                <span>{c.contact.avail}</span>
              </div>
            </div>

            <div>
              <ContactForm formTypes={c.contact.formTypes} />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-inner">
            <p className="footer-copy">{c.copyright}</p>
            <nav className="footer-nav" aria-label="フッターナビゲーション">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

function ArrowIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}
