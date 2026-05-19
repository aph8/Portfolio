"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "@/styles/home.module.scss";
import { site } from "@/data/site";
import Image from "next/image";
import { useT } from "@/context/LanguageContext";
import { tr } from "@/data/translations";

export default function HomePage() {
  const t = useT();
  const featured = projects.slice(0, 3);

  return (
    <div className={styles.wrapper}>
      <section className={`card ${styles.heroSection}`}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              <span className="tag">{t(tr.home.badge)}</span>
            </div>

            <h1 className={styles.heroTitle}>
              {t(tr.home.heroIntro)} {site.shortName}
            </h1>
            <p className={styles.heroText}>{t(tr.home.heroText)}</p>

            <div className={styles.heroStack}>
              {[
                { label: "Frontend", chips: ["Next.js", "React", "TypeScript", "SCSS"] },
                { label: "Backend",  chips: ["Node.js", "Express", "PostgreSQL", "Prisma"] },
                { label: "Tools",    chips: ["Git", "Docker", "Vercel"] },
              ].map((group) => (
                <div key={group.label} className={styles.heroStackRow}>
                  <span className={styles.heroStackLabel}>{group.label}</span>
                  <div className={styles.heroChips}>
                    {group.chips.map((s) => (
                      <span key={s} className={styles.heroChip}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="btnRow">
              <Link className="btn btnPrimary" href="/projects">
                {t(tr.home.viewProjects)}
              </Link>
              <Link className="btn" href="/cv">
                {t(tr.home.viewCv)}
              </Link>
            </div>

          </div>

          <div className={styles.heroIdCard}>
            <div className={styles.heroMonogram}>APH</div>
            <div className={styles.heroIdName}>{site.name}</div>
            <div className={styles.heroIdMeta}>
              <span>BSc Computer Science</span>
              <span>University of Iceland</span>
              <span>Reykjavík, Iceland</span>
            </div>
            <div className={styles.heroIdDivider} />
            <div className={styles.heroSocials}>
              <a className={styles.heroSocialLink} href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a className={styles.heroSocialLink} href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a className={styles.heroSocialLink} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>{t(tr.home.featured)}</h2>
          <Link className="muted" href="/projects">
            {t(tr.home.seeAll)}
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

                <p className={`muted ${styles.cardText}`}>
                  {t({ en: p.description, is: p.descriptionIs ?? p.description })}
                </p>

                <p className={`muted ${styles.cardStack}`}>
                  <strong>{t(tr.common.stack)}</strong> {p.stack.join(", ")}
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
      </section>
    </div>
  );
}
