"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

const links = [["Home", "/"], ["Work", "/work"], ["Blog", "/blog"], ["Resume", "/resume"]] as const;

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.shell}>
          <nav className={styles.nav} aria-label="Primary navigation">
            {links.map(([label, href]) => (
              <Link key={label} href={href} className={pathname === href ? styles.active : undefined}>
                {label}
              </Link>
            ))}
          </nav>
          <div className={styles.theme}>
            <ThemeToggle />
          </div>
      </div>
    </header>
  );
};
