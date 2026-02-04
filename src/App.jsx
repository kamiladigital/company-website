const services = [
  {
    title: "Software Engineering",
    detail: "Production-grade systems with clean architecture and reliable delivery.",
    tools: ["Golang", "API design", "Observability"],
  },
  {
    title: "Infrastructure Engineering",
    detail: "Cloud foundations with automation, cost control, and secure defaults.",
    tools: ["AWS", "terraform", "bash"],
  },
  {
    title: "Application Security",
    detail: "Practical security reviews that ship with fixes and playbooks.",
    tools: ["Burp Suite", "nmap", "Threat modeling"],
  },
];

const engineers = [
  {
    name: "Habibie Faried",
    role: "Lead Engineer",
    link: "https://www.linkedin.com/in/habibiefaried/",
    avatar:
      "https://www.gravatar.com/avatar/cb74b3079de22fbf1f4a2f86463cae73?s=240&d=identicon",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero-alt">
        <nav className="nav">
          <div className="brand">Kamila Digital</div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="https://github.com/kamiladigital" target="_blank" rel="noreferrer">
              GitHub
            </a>
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
              <div className="card-icon" />
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

      <section className="section engineers">
        <div className="section-header">
          <h2>Engineers</h2>
          <p>Direct access to experienced, hands-on leadership.</p>
        </div>
        <div className="engineer-grid">
          {engineers.map((person) => (
            <a
              className="engineer-card"
              key={person.name}
              href={person.link}
              target="_blank"
              rel="noreferrer"
            >
              <img className="engineer-avatar" src={person.avatar} alt={person.name} />
              <div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
                <span className="engineer-link">LinkedIn</span>
              </div>
            </a>
          ))}
        </div>
      </section>

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
