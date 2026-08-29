import { person } from "@/resources";
import {
  FaXTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "X (Twitter)", icon: <FaXTwitter />, href: "https://x.com/payal_codes" },
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/PayalVerma1" },
    { name: "Email", icon: <FaEnvelope />, href: `mailto:${person.email}` },
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInner}>
        <div className={styles.socialGrid} aria-label="Connect with Payal">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              title={item.name}
              aria-label={item.name}
              className={styles.socialBox}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className={styles.divider} />
        <div className={styles.copyrightRow}>
          <p>© {currentYear} {person.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
