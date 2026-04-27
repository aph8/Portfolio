"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import styles from "@/styles/about.module.scss";
import Image from "next/image";
import { useT, useLanguage } from "@/context/LanguageContext";
import { tr } from "@/data/translations";

export default function AboutPage() {
  const t = useT();
  const { lang } = useLanguage();
  const featured = projects.slice(0, 3);

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
              <span className={`muted ${styles.captionSub}`}>{t(tr.about.firstYears)}</span>
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
              <span className={`muted ${styles.captionSub}`}>{t(tr.about.afterThat)}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CONTENT HERO CARD */}
      <header className={`card ${styles.heroCard}`}>
        <h1 className={styles.title}>{t(tr.about.title)}</h1>
        <p className={`muted ${styles.subtitle}`}>{t(tr.about.subtitle)}</p>

        <div className={styles.pills}>
          {tr.about.pills[lang].map((pill) => (
            <span key={pill} className={styles.pill}>
              {pill}
            </span>
          ))}
        </div>

        <div className="btnRow">
          <Link className="btn btnPrimary" href="/projects">
            {t(tr.about.viewProjects)}
          </Link>
          <Link className="btn" href="/cv">
            {t(tr.about.viewCv)}
          </Link>
          <a className="btn" href={mailtoHref}>
            {t(tr.about.emailMe)}
          </a>
        </div>
      </header>

      <section className="card">
        <h2 className={styles.sectionTitle}>{t(tr.about.myStory)}</h2>
        <p className={`muted ${styles.text}`}>{t(tr.about.storyText)}</p>
      </section>

      <section className="card">
        <h2 className={styles.sectionTitle}>{t(tr.about.howIWork)}</h2>
        <div className={styles.grid3}>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>{t(tr.about.cleanCode)}</h3>
            <p className={`muted ${styles.featureText}`}>{t(tr.about.cleanCodeText)}</p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>{t(tr.about.testingMindset)}</h3>
            <p className={`muted ${styles.featureText}`}>{t(tr.about.testingMindsetText)}</p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>{t(tr.about.uxFocus)}</h3>
            <p className={`muted ${styles.featureText}`}>{t(tr.about.uxFocusText)}</p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle} style={{ margin: 0 }}>
            {t(tr.about.proofInProjects)}
          </h2>
          <Link className="muted" href="/projects">
            {t(tr.about.seeAll)}
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
                  {p.github && (
                    <a
                      className={styles.smallLink}
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              </div>

              <p className={`muted ${styles.projectText}`}>
                {t({ en: p.description, is: p.descriptionIs ?? p.description })}
              </p>
              <p className={`muted ${styles.projectStack}`}>
                <strong>{t(tr.common.stack)}</strong> {p.stack.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={`card ${styles.cta}`}>
        <h2 className={styles.sectionTitle}>{t(tr.about.openToOpportunities)}</h2>
        <p className={`muted ${styles.text}`}>{t(tr.about.ctaText)}</p>

        <div className="btnRow">
          <a className="btn btnPrimary" href={mailtoHref}>
            {t(tr.about.contact)}
          </a>
          <a className="btn" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </section>
    </div>
  );
}
