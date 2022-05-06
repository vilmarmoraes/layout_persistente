import styles from '../styles/Lista.module.css'
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Tolbar from "../components/Tolbar";
import Conteudo from '../components/Conteudo';

function gerarLista() {
  const lista = [
    <span className={styles.span}>01,</span>,
    <span className={styles.span}>02,</span>,
    <span className={styles.span}>03,</span>,
    <span className={styles.span}>04,</span>,
    <span className={styles.span}>05,</span>,
    <span className={styles.span}>06,</span>,
    <span className={styles.span}>07,</span>,
    <span className={styles.span}>08,</span>,
    <span className={styles.span}>09,</span>,
    <span className={styles.span}>10,</span>,
  ];
  return lista;
}

export default function Lista2() {
  return <div className={styles.lista}>{gerarLista()}</div>;
}

Lista2.getLayout = function getLayout(page) {
  return (
    <div>
      <Tolbar />
      <Layout>
        <Sidebar />
        <Conteudo>{page}</Conteudo>
      </Layout>
    </div>
  );
};
