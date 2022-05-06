import Layout from "../../components/Layout";
import styles from "../../styles/MeusDados.module.css";
import Sidebar from "../../components/Sidebar";
import Tolbar from "../../components/Tolbar";
import Conteudo from "../../components/Conteudo";

export default function MeusDados(props) {
  return (
    <div>
      <Tolbar />
      <Layout>
        <Sidebar />
        <Conteudo>
          <section>
            <div className="container">
              <h1>MEUS DADOS</h1>
              <div className={styles.dados}>
                <label htmlFor="txtNome">NOME</label>
                <input type="text" name="txtNome" id="txtNome" placeholder="Digite seu nome"/>
                <br />
                <label htmlFor="txtCpf">CPF</label>
                <input type="text" name="txtCpf" id="txtCpf"  placeholder="Informe seu Cpf"/>
                <br />
                <label htmlFor="txtEmail">EMAIL</label>
                <input type="email" name="txtEmail" id="txtEmail" placeholder="Adicione seu email de contato"/>
                <br />
                <label htmlFor="txtDtNasc">DATA DE NASCIMENTO</label>
                <input type="date" name="" id="txtDtNasc" />
                <br />
                <label htmlFor="txtFone">TELEFONE (Opcional)</label>
                <input type="text" name="txtFone" id="txtFone" placeholder="Informe um número de telefone"/>
                <br />
              </div>
              <p>
                <label htmlFor="txtSexo">SEXO (Opcional)</label>
                <br />
                <input type="button" value="Masculino" />
                <input type="button" value="Feminino" />
                <input type="button" value="Outros" />
              </p>
              <input type="submit" value="Salvar Registro" />
            </div>
          </section>
        </Conteudo>
      </Layout>
    </div>
  );
}
