import { LogoToHome } from "@/components/index";

import styles from "./MainFooter.module.scss";

export function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <LogoToHome />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate dicta eius iusto neque officia
          praesentium reiciendis reprehenderit vitae! Dicta eveniet maxime, nemo neque nihil perspiciatis quidem.
        </p>
      </div>

      <div>
        <h4>Más información</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate dicta eius iusto neque officia
          praesentium reiciendis reprehenderit vitae! Dicta eveniet maxime, nemo neque nihil perspiciatis quidem
          rerum sed vel.
        </p>
      </div>
    </footer>
  );
}
