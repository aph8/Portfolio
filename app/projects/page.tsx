"use client";

import { projects } from "@/data/projects";
import styles from "@/styles/projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/context/LanguageContext";
import { tr } from "@/data/translations";

export default function ProjectsPage() {
  const t = useT();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t(tr.projects.title)}</h1>
      <p className={`muted ${styles.subtitle}`}>{t(tr.projects.subtitle)}</p>

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

              <p className={`muted ${styles.text}`}>
                {t({ en: p.description, is: p.descriptionIs ?? p.description })}
              </p>

              <p className={`muted ${styles.stack}`}>
                <strong>{t(tr.projects.stack)}</strong> {p.stack.join(", ")}
              </p>

              <div className="btnRow">
                {p.live && (
                  <a
                    className="btn btnPrimary"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(tr.projects.live)}
                  </a>
                )}
                {p.github && (
                  <a
                    className="btn"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
                {p.caseStudy && (
                  <Link className="btn" href={`/projects/${p.slug}`}>
                    {t(tr.projects.viewCaseStudy)}
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
