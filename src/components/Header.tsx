"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Row } from "@once-ui-system/core";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

const links = [["Home", "/"], ["Work", "/work"], ["Blog", "/blog"], ["Resume", "/resume.pdf"]] as const;

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <Row fillWidth horizontal="center">
        <Row
          className={styles.shell}
          fillWidth
          maxWidth="m"
          paddingX="l"
          paddingY="16"
          horizontal="between"
          vertical="center"
        >
          <Link className={styles.mark} href="/" aria-label="Payal Verma home">
            PV
          </Link>
          <nav className={styles.nav} aria-label="Primary navigation">
            {links.map(([label, href]) =>
              href === "/resume.pdf" ? (
                <a key={label} href={href}>
                  {label}
                </a>
              ) : (
                <Link key={label} href={href} className={pathname === href ? styles.active : undefined}>
                  {label}
                </Link>
              ),
            )}
          </nav>
          <div className={styles.theme}>
            <ThemeToggle />
          </div>
        </Row>
      </Row>
    </header>
  );
};
