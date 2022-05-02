import Head from "next/head";
import styles from "../styles/Layout.module.css";

//https://github.com/vercel/next.js/blob/canary/examples/layout-component/pages/_app.js

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Exemplo</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
