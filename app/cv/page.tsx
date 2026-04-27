"use client";

import styles from "@/styles/cv.module.scss";
import { site } from "@/data/site";
import { useT } from "@/context/LanguageContext";
import { tr } from "@/data/translations";

export default function CvPage() {
  const t = useT();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>{t(tr.cv.title)}</h1>
        <p className={`muted ${styles.subtitle}`}>{t(tr.cv.subtitle)}</p>
      </header>

      <div className={styles.layout}>
        <aside className={`card ${styles.sidebar}`}>
          <div className={styles.sidebarTop}>
            <a
              className="btn btnPrimary"
              href="/Andri_Pall_Helgason_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(tr.cv.download)}
            </a>

            <div className={styles.links}>
              <a className={styles.link} href={`mailto:${site.email}`}>
                <span className="muted">{t(tr.cv.email)}</span>
                <span>{site.email}</span>
              </a>

              <a
                className={styles.link}
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="muted">GitHub</span>
                <span>github.com/aph8</span>
              </a>

              <a
                className={styles.link}
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="muted">LinkedIn</span>
                <span>{t(tr.cv.viewProfile)}</span>
              </a>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>{t(tr.cv.focus)}</h3>
            <div className={styles.chips}>
              {["Full-stack", "Next.js", "Node/Express", "Databases", "Clean UX"].map(
                (s) => (
                  <span key={s} className={styles.chip}>
                    {s}
                  </span>
                )
              )}
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>{t(tr.cv.highlights)}</h3>
            <ul className={`muted ${styles.compactList}`}>
              <li>{t(tr.cv.h1)}</li>
              <li>{t(tr.cv.h2)}</li>
              <li>{t(tr.cv.h3)}</li>
            </ul>
          </div>
        </aside>

        <main className={styles.main}>
          <section className="card">
            <h2 className={styles.sectionTitle}>{t(tr.cv.summary)}</h2>
            <p className={`muted ${styles.text}`}>{t(tr.cv.summaryText)}</p>
          </section>

          <section className="card">
            <h2 className={styles.sectionTitle}>{t(tr.cv.skills)}</h2>

            <div className={styles.skillGrid}>
              <div className={styles.skillBlock}>
                <h3 className={styles.skillTitle}>{t(tr.cv.frontend)}</h3>
                <div className={styles.chips}>
                  {["React", "Next.js", "TypeScript", "HTML", "SCSS"].map((s) => (
                    <span key={s} className={styles.chip}>{s}</span>
                  ))}
                </div>
              </div>

              <div className={styles.skillBlock}>
                <h3 className={styles.skillTitle}>{t(tr.cv.backend)}</h3>
                <div className={styles.chips}>
                  {["Node.js", "Express", "REST APIs", "Prisma", "Zod"].map((s) => (
                    <span key={s} className={styles.chip}>{s}</span>
                  ))}
                </div>
              </div>

              <div className={styles.skillBlock}>
                <h3 className={styles.skillTitle}>{t(tr.cv.database)}</h3>
                <div className={styles.chips}>
                  {["PostgreSQL", "SQLite"].map((s) => (
                    <span key={s} className={styles.chip}>{s}</span>
                  ))}
                </div>
              </div>

              <div className={styles.skillBlock}>
                <h3 className={styles.skillTitle}>{t(tr.cv.tools)}</h3>
                <div className={styles.chips}>
                  {["Git", "Docker", "Vercel"].map((s) => (
                    <span key={s} className={styles.chip}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className={styles.sectionTitle}>{t(tr.cv.experience)}</h2>

            <div className={styles.item}>
              <div className={styles.itemTop}>
                <div>
                  <div className={styles.itemTitle}>{t(tr.cv.jobTitle)}</div>
                  <div className="muted">Grímur Kokkur ehf</div>
                </div>
                <div className={`muted ${styles.itemMeta}`}>2024 – Present</div>
              </div>
              <ul className={`muted ${styles.list}`}>
                <li>{t(tr.cv.jobBullet1)}</li>
                <li>{t(tr.cv.jobBullet2)}</li>
              </ul>
            </div>
          </section>

          <section className="card">
            <h2 className={styles.sectionTitle}>{t(tr.cv.education)}</h2>

            <div className={styles.item}>
              <div className={styles.itemTop}>
                <div>
                  <div className={styles.itemTitle}>{t(tr.cv.degree)}</div>
                  <div className="muted">{t(tr.cv.university)}</div>
                </div>
                <div className={`muted ${styles.itemMeta}`}>{t(tr.cv.completed)}</div>
              </div>
              <ul className={`muted ${styles.list}`}>
                <li>{t(tr.cv.eduBullet1)}</li>
                <li>{t(tr.cv.eduBullet2)}</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
