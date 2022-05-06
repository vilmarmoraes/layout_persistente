import Conteudo from "../components/Conteudo";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Tolbar from "../components/Tolbar";

export default function Galeria() {
  return (
    <div>
      <img src="liso01.jpg" alt="" />
      <img src="liso02.jpg" alt="" />
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
