"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/navbar.module.scss";
import { site } from "@/data/site";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Loka með ESC (þetta er OK, því setState er kallað í event handler)
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
          <Link className={styles.navLink} href="/about">
            About
          </Link>
          <Link className={styles.navLink} href="/projects">
            Projects
          </Link>
          <Link className={styles.navLink} href="/cv">
            CV
          </Link>
          <a
            className={styles.navLink}
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code on GitHub <span className={styles.arrow}>↗</span>
          </a>
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
          <Link className={styles.mobileLink} href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link className={styles.mobileLink} href="/projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link className={styles.mobileLink} href="/cv" onClick={closeMenu}>
            CV
          </Link>
          <a
            className={styles.mobileLink}
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Code on GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
