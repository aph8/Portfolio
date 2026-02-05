import styles from "@/styles/footer.module.scss";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className="muted">
          © {new Date().getFullYear()} {site.brand}
        </span>
        <a className="muted" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
    </footer>
  );
}
