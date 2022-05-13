import Conteudo from "../components/Conteudo";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Tolbar from "../components/Tolbar";

export default function About() {
  return (
    <section>
      <h2>Salão Nova Imagem</h2>
      <p>
        Localizado na Avenida Micheli Simonete, 1464 Bairro São Miguel - Fraiburgo - SC
      </p>
      <p>
        Meu nome é Solange Spiering e o salão Nova Imagem foi a realização de um sonho que tinha em um dia atuar nessa profissão. Sou muito feliz
        em poder atender meus clientes e ver a satisfação de cada um. Meu objetivo é estar cada vez mais preparada para poder atende-los da melhor
        forma possivel.
      </p>
    </section>
  );
}

About.getLayout = function getLayout(page) {
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
