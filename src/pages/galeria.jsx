import Conteudo from "../components/Conteudo";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Tolbar from "../components/Tolbar";
import Carrossel from "../components/Carrossel"

//tem que instalar o bootstrap para react usando o comando abaixo:
//npm install react-bootstrap bootstrap


export default function Galeria() {

  return (
    <div style={{
      backgroundColor: "gray",
      width: "800px",
      height: "400px"
    }}>
    <Carrossel />
  </div>
  );
}

Galeria.getLayout = function getLayout(page) {
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
