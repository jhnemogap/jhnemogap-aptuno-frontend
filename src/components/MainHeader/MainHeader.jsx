import { LogoToHome } from "@/components/index";

import styles from "./MainHeader.module.scss";

export function MainHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <li className={[styles.navItem, styles.navItemLogo].join(" ")}><LogoToHome /></li>
        <li className={styles.navItem}>Enlace 1</li>
        <li className={styles.navItem}>Enlace 2</li>
        <li className={styles.navItem}>Enlace 3</li>
      </nav>

      <button className={styles.myAccountBtn} onClick={() => console.info("Go to my account")}>
        Mi cuenta
      </button>
    </header>
  );
}
