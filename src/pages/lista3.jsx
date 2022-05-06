import styles from '../styles/Lista.module.css'
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Tolbar from "../components/Tolbar";
import Conteudo from '../components/Conteudo';

function gerarLista(final = 10) {
  const lista = [];
  for (let i = 1; i <= final; i++) {
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
      {gerarLista(100)}
    </div>
  );
}

Lista3.getLayout = function getLayout(page) {
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
