"use client";

import { projects } from "@/data/projects";
import { useT } from "@/context/LanguageContext";
import { tr } from "@/data/translations";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/project-detail.module.scss";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const t = useT();

  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) {
    return (
      <div className={styles.wrapper}>
        <Link className={`muted ${styles.back}`} href="/projects">
          {t(tr.projects.backToProjects)}
        </Link>
        <p className="muted">Project not found.</p>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <div className={styles.wrapper}>
      <Link className={`muted ${styles.back}`} href="/projects">
        {t(tr.projects.backToProjects)}
      </Link>

      <header className={`card ${styles.hero}`}>
        {project.image && (
          <div className={styles.heroThumb}>
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className={styles.heroThumbImg}
            />
            <div className={styles.heroThumbOverlay} />
          </div>
        )}
        <div className={styles.heroBody}>
          <div className="pill">{project.kind}</div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={`muted ${styles.lead}`}>
            {t({ en: project.description, is: project.descriptionIs ?? project.description })}
          </p>
          <div className="btnRow">
            {project.live && (
              <a className="btn btnPrimary" href={project.live} target="_blank" rel="noopener noreferrer">
                {t(tr.projects.live)}
              </a>
            )}
            {project.github && (
              <a className="btn" href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </header>

      <div className={styles.twoCol}>
        <section className={`card ${styles.section}`}>
          <h2 className={styles.sectionTitle}>{t(tr.projects.challenge)}</h2>
          <p className={`muted ${styles.sectionText}`}>{t(cs.challenge)}</p>
        </section>

        <section className={`card ${styles.section}`}>
          <h2 className={styles.sectionTitle}>{t(tr.projects.solution)}</h2>
          <p className={`muted ${styles.sectionText}`}>{t(cs.solution)}</p>
        </section>
      </div>

      <section className="card">
        <h2 className={styles.sectionTitle}>{t(tr.projects.keyFeatures)}</h2>
        <ul className={styles.featureList}>
          {cs.highlights.map((h, i) => (
            <li key={i} className={`muted ${styles.featureItem}`}>
              <span className={styles.featureDot} />
              {t(h)}
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className={styles.sectionTitle}>{t(tr.projects.stack)}</h2>
        <div className={styles.chips}>
          {project.stack.map((s) => (
            <span key={s} className={styles.chip}>{s}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
