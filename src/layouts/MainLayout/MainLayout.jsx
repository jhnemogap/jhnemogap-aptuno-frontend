import { useRouter } from "next/router";

import { MainHeader, MainFooter, SearchImmovables } from "@/components/index";
import { routeHome, routeImmovablesBase } from "@/routes/paths";

import styles from "./MainLayout.module.scss";

export function MainLayout(props) {
  const { children } = props;
  const router = useRouter();

  return (
    <div className={styles.layout}>
      <div className={styles.headerWrapperInLayout}>
        <MainHeader />
        {(router.pathname === routeImmovablesBase()) && <SearchImmovables variant={true} />}
      </div>

      {(router.pathname === routeHome()) && (
        <div className={styles.searchInHome}>
          <SearchImmovables />
        </div>
      )}

      <div className={styles.childrenContainer}>
        {children}
      </div>

      <MainFooter />
    </div>
  );
}
