import styles from '../styles/Lista.module.css'
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Tolbar from "../components/Tolbar";

function gerarLista() {
  const lista = [
    <span>01,</span>,
    <span>02,</span>,
    <span>03,</span>,
    <span>04,</span>,
    <span>05,</span>,
    <span>06,</span>,
    <span>07,</span>,
    <span>08,</span>,
    <span>09,</span>,
    <span>10,</span>,
  ];
  return lista;
}

export default function Lista2() {
  return <div className={styles.lista} >{gerarLista()}</div>;
}

Lista2.getLayout = function getLayout(page) {
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
