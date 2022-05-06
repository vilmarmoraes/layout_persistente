import Conteudo from "../components/Conteudo";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Tolbar from "../components/Tolbar";

export default function Index() {
  return (
    <section>
      <h2>Horário de funcionamento</h2>
      <ul>
        <li>Seg.: Fechado</li>
        <li>Ter.: 09:00 – 17:30</li>
        <li>Qua.: 09:00 – 17:30</li>
        <li>Qui.: 09:00 – 17:30</li>
        <li>Sex.: 09:00 – 17:30</li>
        <li>Sáb.: 09:00 – 17:30</li>
        <li>Dom.: Fechado</li>
      </ul>
    </section>
  );
}

Index.getLayout = function getLayout(page) {
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
