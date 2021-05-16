import { MainLayout } from "../layouts/MainLayout/MainLayout";

import "@/styles/index.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
