// import { MainHeader, MainFooter } from "@/components/index";

import styles from "./MainLayout.module.scss";

export function MainLayout(props) {
  const { children } = props;

  return (
    <div>
      {/*<MainHeader />*/}
      <header>El cabecero</header>

      <div className={styles.childrenContainer}>
        {children}
      </div>

      {/*<MainFooter />*/}
      <footer>El pie de página</footer>
    </div>
  );
}
