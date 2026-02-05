import Link from "next/link";
import styles from "@/styles/navbar.module.scss";
import { site } from "@/data/site";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          {site.brand}
        </Link>

        <nav className={styles.nav}>
          <Link href="/about" className={`${styles.navLink} muted`}>
            About
          </Link>
          <Link href="/projects" className={`${styles.navLink} muted`}>
            Projects
          </Link>
          <Link href="/cv" className={`${styles.navLink} muted`}>
            CV
          </Link>
          <a
            className={`${styles.navLink} muted ${styles.external}`}
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code on GitHub <span className={styles.arrow}>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
