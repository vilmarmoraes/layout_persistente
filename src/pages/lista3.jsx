import styles from '../styles/Lista.module.css'
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Tolbar from "../components/Tolbar";

function gerarLista() {
  const lista = [];
  for (let i = 1; i <= 100; i++) {
    lista.push(
      <span className={styles.span}>
        {i}
      </span>
    );
  }
  return lista;
}

export default function Lista3() {
  return (
    <div className={styles.lista}>
      {gerarLista()}
    </div>
  );
}

Lista3.getLayout = function getLayout(page) {
  return (
    <div>
      <Tolbar />
      <Layout>
        <Sidebar />
        {page}
      </Layout>
    </div>
  );
};
