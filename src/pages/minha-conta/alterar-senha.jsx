import Conteudo from "../../components/Conteudo";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import Tolbar from "../../components/Tolbar";

export default function AlterarSenha() {
  return (
    <section>
      <div>
        <h1>ALTERAR SENHA</h1>
        <p>Aqui vai ser criado um código para alteração de senha</p>
      </div>
    </section>
  );
}

AlterarSenha.getLayout = function getLayout(page) {
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
