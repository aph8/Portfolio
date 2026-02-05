import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "@/styles/home.module.scss";
import { site } from "@/data/site";
import Image from "next/image";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div className={styles.wrapper}>
      <section className="card">
        <h1 className={styles.heroTitle}>Hi, my name is {site.shortName} </h1>
        <p className={`muted ${styles.heroText}`}>
          Software developer with a focus on full-stack web apps. I build clean, reliable
          systems and enjoy turning ideas into usable products.
        </p>

        <div className="btnRow">
          <Link className="btn btnPrimary" href="/projects">
            View projects
          </Link>
          <Link className="btn" href="/cv">
            View CV
          </Link>
          <a
            className="btn"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Featured projects</h2>
          <Link className="muted" href="/projects">
            See all →
          </Link>
        </div>

        <div className="grid">
          {featured.map((p) => (
            <article key={p.title} className={`card ${styles.projectCard}`}>
              {p.image ? (
                <div className={styles.thumb}>
                  <Image
                    className={styles.thumbImg}
                    src={p.image}
                    alt={`${p.title} preview`}
                    fill
                  />
                  <div className={styles.thumbOverlay} />
                </div>
              ) : (
                <div className={`${styles.thumb} ${styles.thumbPlaceholder}`}>
                  <div className={styles.thumbOverlay} />
                </div>
              )}

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <div className="pill">{p.kind}</div>

                <p className={`muted ${styles.cardText}`}>{p.description}</p>

                <p className={`muted ${styles.cardStack}`}>
                  <strong>Stack:</strong> {p.stack.join(", ")}
                </p>

                <div className="btnRow">
                  {p.live && (
                    <a
                      className="btn"
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  )}
                  <a
                    className="btn"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
