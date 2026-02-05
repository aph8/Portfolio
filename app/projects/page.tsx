import { projects } from "@/data/projects";
import styles from "@/styles/projects.module.scss";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Projects</h1>
      <p className={`muted ${styles.subtitle}`}>
        A selection of things I’ve built. Links include live demos when available,
        otherwise code and docs.
      </p>

      <div className="grid">
        {projects.map((p) => (
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
              <h2 className={styles.cardTitle}>{p.title}</h2>
              <div className="pill">{p.kind}</div>

              <p className={`muted ${styles.text}`}>{p.description}</p>

              <p className={`muted ${styles.stack}`}>
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
    </div>
  );
}
