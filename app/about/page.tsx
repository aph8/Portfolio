import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import styles from "@/styles/about.module.scss";
import Image from "next/image";

export default function AboutPage() {
  const featured = projects.slice(0, 3);

  // Note: "From/Sender" cannot be auto-filled with mailto.
  // The sender will always be the user's default email account.
  // We CAN prefill the subject.
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Portfolio – Contact"
  )}`;

  return (
    <div className={styles.wrapper}>
      {/* FULL-BLEED 50/50 HERO IMAGES */}
      <section className={styles.fullBleed}>
        <div className={styles.splitHero}>
          <figure className={styles.half}>
            <Image
              className={styles.heroImg}
              src="/akureyri.jpg"
              alt="Akureyri"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className={styles.overlay} />
            <figcaption className={styles.caption}>
              <span className={styles.captionTitle}>Akureyri</span>
              <span className={`muted ${styles.captionSub}`}>First 12 years</span>
            </figcaption>
          </figure>

          <figure className={styles.half}>
            <Image
              className={styles.heroImg}
              src="/moso.jpg"
              alt="Mosfellsbær"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className={styles.overlay} />
            <figcaption className={styles.caption}>
              <span className={styles.captionTitle}>Mosfellsbær</span>
              <span className={`muted ${styles.captionSub}`}>After that</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CONTENT HERO CARD */}
      <header className={`card ${styles.heroCard}`}>
        <h1 className={styles.title}>About</h1>
        <p className={`muted ${styles.subtitle}`}>
          I’m a newly graduated Computer Scientist in Iceland with a strong full-stack
          profile — comfortable building both front-end and back-end systems.
        </p>

        <div className={styles.pills}>
          {["Full-stack", "Clean code", "Testing mindset", "UX-focused"].map((t) => (
            <span key={t} className={styles.pill}>
              {t}
            </span>
          ))}
        </div>

        <div className="btnRow">
          <Link className="btn btnPrimary" href="/projects">
            View projects
          </Link>
          <Link className="btn" href="/cv">
            View CV
          </Link>

          {/* Opens user's default mail app with a prefilled subject */}
          <a className="btn" href={mailtoHref}>
            Email me
          </a>
        </div>
      </header>

      <section className="card">
        <h2 className={styles.sectionTitle}>My story</h2>
        <p className={`muted ${styles.text}`}>
          I spent my first 12 years in Akureyri and later moved to Mosfellsbær. I’ve
          always been interested in technology and computers — I grew up playing a lot of
          games, which is what initially pulled me towards Computer Science. I hadn’t
          written code before starting the degree, but I quickly found that I enjoy the
          process of building real systems: making ideas concrete, debugging, polishing,
          and shipping.
        </p>
      </section>

      <section className="card">
        <h2 className={styles.sectionTitle}>How I work</h2>
        <div className={styles.grid3}>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Clean code</h3>
            <p className={`muted ${styles.featureText}`}>
              I aim for readable, maintainable solutions. Clear naming, small modules, and
              structure that makes future changes easy.
            </p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Testing mindset</h3>
            <p className={`muted ${styles.featureText}`}>
              I like knowing things work. When it makes sense, I add tests and validation
              to reduce surprises and improve confidence.
            </p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>UX focus</h3>
            <p className={`muted ${styles.featureText}`}>
              I pay attention to the user experience — good structure, clear navigation,
              and UI that feels polished and intentional.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle} style={{ margin: 0 }}>
            Proof in projects
          </h2>
          <Link className="muted" href="/projects">
            See all →
          </Link>
        </div>

        <div className={styles.projectGrid}>
          {featured.map((p) => (
            <article key={p.title} className={styles.projectCard}>
              <div className={styles.projectTop}>
                <div>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <span className={styles.kind}>{p.kind}</span>
                </div>

                <div className={styles.actions}>
                  {p.live && (
                    <a
                      className={styles.smallLink}
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live ↗
                    </a>
                  )}
                  <a
                    className={styles.smallLink}
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code ↗
                  </a>
                </div>
              </div>

              <p className={`muted ${styles.projectText}`}>{p.description}</p>
              <p className={`muted ${styles.projectStack}`}>
                <strong>Stack:</strong> {p.stack.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={`card ${styles.cta}`}>
        <h2 className={styles.sectionTitle}>Open to opportunities in Iceland</h2>
        <p className={`muted ${styles.text}`}>
          I’m looking for junior roles where I can contribute as a full-stack developer
          and keep growing. If you think I could be a good fit, I’d love to talk.
        </p>

        <div className="btnRow">
          {/* Opens user's default mail app with a prefilled subject */}
          <a className="btn btnPrimary" href={mailtoHref}>
            Contact
          </a>

          <a className="btn" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a
            className="btn"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>
    </div>
  );
}
