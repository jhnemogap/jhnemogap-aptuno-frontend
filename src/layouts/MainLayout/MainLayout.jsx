import { MainHeader, MainFooter } from "@/components/index";

import styles from "./MainLayout.module.scss";

export function MainLayout(props) {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <div className={styles.headerWrapperInLayout}>
        <MainHeader />
      </div>

      <div className={styles.childrenContainer}>
        {children}
      </div>

      <MainFooter />
    </div>
  );
}
