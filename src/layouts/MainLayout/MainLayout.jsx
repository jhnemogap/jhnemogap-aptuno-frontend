import { MainHeader, MainFooter } from "@/components/index";

import styles from "./MainLayout.module.scss";

export function MainLayout(props) {
  const { children } = props;

  return (
    <div>
      <MainHeader />

      <div className={styles.childrenContainer}>
        {children}
      </div>

      <MainFooter />
    </div>
  );
}
