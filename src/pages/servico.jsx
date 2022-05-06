import Conteudo from "../components/Conteudo";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Tolbar from "../components/Tolbar";

export default function Servico(){
    return(
        <div>
            <h1>Serviços:</h1>
            <ul>
                
            </ul>
        </div>
    )
}

Servico.getLayout = function getLayout(page) {
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