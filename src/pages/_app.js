import { MainLayout } from "../layouts/MainLayout/MainLayout";

import { wrapper } from "@/redux/store";

import "@/styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(MyApp);
