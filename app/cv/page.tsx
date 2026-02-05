import styles from "@/styles/cv.module.scss";
import { site } from "@/data/site";

export default function CvPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>CV</h1>
        <p className={`muted ${styles.subtitle}`}>
          Quick overview + direct links. Download the PDF for the full version.
        </p>
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
              Download CV (PDF)
            </a>

            <div className={styles.links}>
              <a className={styles.link} href={`mailto:${site.email}`}>
                <span className="muted">Email</span>
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
                <span>View profile</span>
              </a>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Focus</h3>
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
            <h3 className={styles.sidebarTitle}>Highlights</h3>
            <ul className={`muted ${styles.compactList}`}>
              <li>Built full-stack apps end-to-end</li>
              <li>Comfortable with APIs + DBs</li>
              <li>Strong focus on readability</li>
            </ul>
          </div>
        </aside>

        <main className={styles.main}>
          <section className="card">
            <h2 className={styles.sectionTitle}>Summary</h2>
            <p className={`muted ${styles.text}`}>
              Newly graduated Computer Scientist focused on full-stack development. I
              build reliable web applications with maintainable code, clean UI, and
              practical architecture.
            </p>
          </section>

          <section className="card">
            <h2 className={styles.sectionTitle}>Skills</h2>

            <div className={styles.skillGrid}>
              <div className={styles.skillBlock}>
                <h3 className={styles.skillTitle}>Frontend</h3>
                <div className={styles.chips}>
                  {["React", "Next.js", "TypeScript", "HTML", "SCSS"].map((s) => (
                    <span key={s} className={styles.chip}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.skillBlock}>
                <h3 className={styles.skillTitle}>Backend</h3>
                <div className={styles.chips}>
                  {["Node.js", "Express", "REST APIs", "Prisma", "Zod"].map((s) => (
                    <span key={s} className={styles.chip}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.skillBlock}>
                <h3 className={styles.skillTitle}>Database</h3>
                <div className={styles.chips}>
                  {["PostgreSQL", "SQLite"].map((s) => (
                    <span key={s} className={styles.chip}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.skillBlock}>
                <h3 className={styles.skillTitle}>Tools</h3>
                <div className={styles.chips}>
                  {["Git", "Docker", "Vercel"].map((s) => (
                    <span key={s} className={styles.chip}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className={styles.sectionTitle}>Experience</h2>

            <div className={styles.item}>
              <div className={styles.itemTop}>
                <div>
                  <div className={styles.itemTitle}>Web Developer & Sales</div>
                  <div className="muted">Grímur Kokkur ehf</div>
                </div>
                <div className={`muted ${styles.itemMeta}`}>2024 – Present</div>
              </div>
              <ul className={`muted ${styles.list}`}>
                <li>Contributed to the company website and content workflows.</li>
                <li>Worked on updates and improvements with a usability focus.</li>
              </ul>
            </div>
          </section>

          <section className="card">
            <h2 className={styles.sectionTitle}>Education</h2>

            <div className={styles.item}>
              <div className={styles.itemTop}>
                <div>
                  <div className={styles.itemTitle}>BSc in Computer Science</div>
                  <div className="muted">University of Iceland</div>
                </div>
                <div className={`muted ${styles.itemMeta}`}>Completed</div>
              </div>
              <ul className={`muted ${styles.list}`}>
                <li>Projects across web, mobile, algorithms, and applied development.</li>
                <li>Interests: full-stack engineering and practical system design.</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
