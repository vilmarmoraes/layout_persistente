import Link from "next/link";
//import styles from '../styles/Sidebar.module.css'
import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home2</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/minha-conta/meus-dados">
        <a>Cadastro</a>
      </Link>
      <Link href="/minha-conta/alterar-senha">
        <a>Alterar Senha</a>
      </Link>
      <Link href="/lista1">
        <a>Lista1</a>
      </Link>
      <Link href="/lista2">
        <a>Lista2</a>
      </Link>
      <Link href="/lista3">
        <a>Lista3</a>
      </Link>
    </nav>
  );
}
