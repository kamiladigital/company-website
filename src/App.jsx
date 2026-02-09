import { useCallback, useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Software Engineering",
    detail: "Production-grade systems with clean architecture and reliable delivery.",
    tools: ["Golang", "API design", "Observability"],
    gradient: "linear-gradient(135deg, #1d4ed8, #38bdf8)",
  },
  {
    title: "Infrastructure Engineering",
    detail: "Cloud foundations with automation, cost control, and secure defaults.",
    tools: ["AWS", "terraform", "bash"],
    gradient: "linear-gradient(135deg, #059669, #34d399)",
  },
  {
    title: "Application Security",
    detail: "Practical security reviews that ship with fixes and playbooks.",
    tools: ["Burp Suite", "nmap", "Threat modeling"],
    gradient: "linear-gradient(135deg, #d946ef, #f0abfc)",
  },
];

const portfolios = [
  {
    name: "terimasurel.dpdns.org",
    description: "Disposable email server",
    image:
      "https://kamiladigitalassets.s3.ap-southeast-1.amazonaws.com/terimasurel.dpdns.org.png",
    link: "https://terimasurel.dpdns.org",
  },
];

function PortfolioCarousel() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index];
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  }, []);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    const cards = [...track.children];
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - track.offsetLeft - scrollLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActive(closest);
  }, []);

  const prev = () => scrollTo(Math.max(0, active - 1));
  const next = () => scrollTo(Math.min(portfolios.length - 1, active + 1));

  return (
    <section className="section portfolio" id="portfolio">
      <div className="section-header">
        <h2>Portfolio</h2>
        <p>Selected projects with clear outcomes and production-ready delivery.</p>
      </div>
      <div className="carousel-wrapper">
        {portfolios.length > 1 && (
          <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous" disabled={active === 0}>
            &#8249;
          </button>
        )}
        <div className="carousel-track" ref={trackRef} onScroll={handleScroll}>
          {portfolios.map((project) => (
            <article className="portfolio-card" key={project.name}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <img className="portfolio-media" src={project.image} alt={project.name} />
              </a>
              <div className="portfolio-body">
                <h3>{project.description}</h3>
                <p className="portfolio-meta">{project.name}</p>
                <a className="portfolio-link" href={project.link} target="_blank" rel="noreferrer">
                  Visit project &#8594;
                </a>
              </div>
            </article>
          ))}
        </div>
        {portfolios.length > 1 && (
          <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next" disabled={active === portfolios.length - 1}>
            &#8250;
          </button>
        )}
      </div>
      {portfolios.length > 1 && (
        <div className="carousel-dots">
          {portfolios.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === active ? " active" : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <div className="page">
      <header className="hero-alt">
        <nav className="nav">
          <div className="brand">Kamila Digital</div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#portfolio">Portfolio</a>
            <a href="https://github.com/kamiladigital" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-pressed={!isDark}
            >
              {isDark ? "Light mode" : "Dark mode"}
            </button>
            <a className="cta" href="mailto:contact@kamiladigital.com">
              Contact
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software & Infra Engineering Consulting</p>
            <h1>Delivery-grade engineering for teams that ship.</h1>
            <p className="subhead">
              We build reliable systems, automate operations, and secure
              applications with tight scope and measurable outcomes.
            </p>
            <div className="hero-actions">
              <a className="button" href="mailto:contact@kamiladigital.com">
                Start a project
              </a>
              <span className="meta">Response within 24 working hours</span>
            </div>
            <div className="stats">
              <div>
                <h3>Senior-led</h3>
                <p>Hands-on execution</p>
              </div>
              <div>
                <h3>Lean scope</h3>
                <p>Fast to production</p>
              </div>
              <div>
                <h3>Secure by default</h3>
                <p>Practical fixes</p>
              </div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="card-glow" />
            <div className="card-panel">
              <p>Infrastructure ready for growth</p>
              <div className="pill">Cloud • Automation • Security</div>
            </div>
            <div className="card-panel secondary">
              <p>Shipping resilient software</p>
              <div className="pill">Design • Build • Operate</div>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="services">
        <div className="section-header">
          <h2>Services</h2>
          <p>Focused, senior execution across engineering and security.</p>
        </div>
        <div className="grid">
          {services.map((service) => (
            <article className="card service-card" key={service.title}>
              <div className="card-icon" style={{ background: service.gradient }} />
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
              <div className="tag-list">
                {service.tools.map((tool) => (
                  <span className="tag" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section emphasis" id="approach">
        <div className="split">
          <div>
            <h2>Designed for delivery</h2>
            <p>
              From greenfield builds to hardening production systems, we keep
              documentation crisp and deliverables concrete.
            </p>
          </div>
          <ul className="list">
            <li>Clean architecture and pragmatic automation</li>
            <li>Infrastructure that scales without drama</li>
            <li>Security reviews that ship with fixes</li>
          </ul>
        </div>
      </section>

      <section className="section steps">
        <div className="section-header">
          <h2>Engagement flow</h2>
          <p>Three steps from first call to production-ready delivery.</p>
        </div>
        <div className="steps-grid">
          <div className="step">
            <span>01</span>
            <h3>Discovery</h3>
            <p>Rapid assessment of goals, risks, and timelines.</p>
          </div>
          <div className="step">
            <span>02</span>
            <h3>Build</h3>
            <p>Implementation with weekly checkpoints and clear outputs.</p>
          </div>
          <div className="step">
            <span>03</span>
            <h3>Operate</h3>
            <p>Handover, automation, and support for stability.</p>
          </div>
        </div>
      </section>

      <PortfolioCarousel />

      <section className="cta-band">
        <div>
          <h2>Ready to move fast?</h2>
          <p>Tell us what you need. We will respond with a clear plan.</p>
        </div>
        <a className="button ghost" href="mailto:contact@kamiladigital.com">
          Contact us
        </a>
      </section>

      <footer className="footer">
        <div className="footer-brand">CV Kamila Murni Sejahtera</div>
        <div className="footer-links">
          <a href="mailto:contact@kamiladigital.com">contact@kamiladigital.com</a>
          <a href="https://github.com/kamiladigital" target="_blank" rel="noreferrer">
            github.com/kamiladigital
          </a>
        </div>
      </footer>
    </div>
  );
}
