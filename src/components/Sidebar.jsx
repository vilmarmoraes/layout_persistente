import styles from "../styles/Sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
      <Link href="/servico">
        <a>Serviços</a>
      </Link>
      <Link href="/galeria">
        <a>Galeria</a>
      </Link>
      <Link href="/contact">
        <a>Contato</a>
      </Link>
      <Link href="/minha-conta/meus-dados">
        <a>Cadastro</a>
      </Link>
      <Link href="/minha-conta/alterar-senha">
        <a>Alterar Senha</a>
      </Link>

      <Link href="/lista1">
        <a id="pan1">Lista1</a>
      </Link>

      <Link href="/lista2">
        <a>
          Lista2
        </a>
      </Link>

      <Link href="/lista3">
        <a>
          Lista3
        </a>
      </Link>
   </nav>
  );
}
