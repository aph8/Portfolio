"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/navbar.module.scss";
import { site } from "@/data/site";
import { useLanguage, useT } from "@/context/LanguageContext";
import { tr } from "@/data/translations";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = useT();
  const pathname = usePathname();

  const navClass = (href: string) =>
    `${styles.navLink} ${pathname === href ? styles.navLinkActive : ""}`;
  const mobileNavClass = (href: string) =>
    `${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ""}`;

  // Close with ESC (setState is called inside an event handler, so this is fine)
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" onClick={closeMenu}>
          {site.brand ?? site.name ?? "Portfolio"}
        </Link>

        {/* Desktop nav */}
        <nav className={styles.navDesktop} aria-label="Main navigation">
          <Link className={navClass("/about")} href="/about">
            {t(tr.nav.about)}
          </Link>
          <Link className={navClass("/projects")} href="/projects">
            {t(tr.nav.projects)}
          </Link>
          <Link className={navClass("/cv")} href="/cv">
            {t(tr.nav.cv)}
          </Link>
          <a
            className={styles.navLink}
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(tr.nav.github)} <span className={styles.arrow}>↗</span>
          </a>

          <button
            type="button"
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label={lang === "en" ? "Switch to Icelandic" : "Switch to English"}
          >
            {lang === "en" ? "IS" : "EN"}
          </button>
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span className={styles.burgerLines} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileWrap} ${open ? styles.open : ""}`}>
        {/* Clickable backdrop */}
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          onClick={closeMenu}
        />

        <nav
          id="mobile-menu"
          className={styles.mobileMenu}
          aria-label="Mobile navigation"
        >
          <Link className={mobileNavClass("/about")} href="/about" onClick={closeMenu}>
            {t(tr.nav.about)}
          </Link>
          <Link className={mobileNavClass("/projects")} href="/projects" onClick={closeMenu}>
            {t(tr.nav.projects)}
          </Link>
          <Link className={mobileNavClass("/cv")} href="/cv" onClick={closeMenu}>
            {t(tr.nav.cv)}
          </Link>
          <a
            className={styles.mobileLink}
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {t(tr.nav.github)} ↗
          </a>

          <button
            type="button"
            className={styles.mobileLangToggle}
            onClick={() => { toggleLang(); closeMenu(); }}
          >
            {lang === "en" ? "🇮🇸 Íslenska" : "🇬🇧 English"}
          </button>
        </nav>
      </div>
    </header>
  );
}
