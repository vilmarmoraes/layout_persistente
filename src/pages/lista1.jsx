import styles from '../styles/Lista.module.css'
import Layout from "../components/Layout";
import Siderbar from "../components/Sidebar";
import Tolbar from "../components/Tolbar";
import Conteudo from '../components/Conteudo';

export default function Lista1() {
  return (
    <div className={styles.lista}>
      <span className={styles.span}>01,</span>
      <span className={styles.span}>02,</span>
      <span className={styles.span}>03,</span>
      <span className={styles.span}>04,</span>
      <span className={styles.span}>05,</span>
      <span className={styles.span}>06,</span>
      <span className={styles.span}>07,</span>
      <span className={styles.span}>08,</span>
      <span className={styles.span}>09,</span>
      <span className={styles.span}>10,</span>
    </div>
  );
}

Lista1.getLayout = function getLayout(page) {
  return (
    <div>
      <Tolbar />
      <Layout>
        <Siderbar />
        <Conteudo>{page}</Conteudo>
      </Layout>
    </div>
  );
};
