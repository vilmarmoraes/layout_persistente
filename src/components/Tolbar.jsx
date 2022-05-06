import styles from '../styles/Tolbar.module.css'

export default function Tolbar() {
  return (
    <div className={styles.tolbar}>
      <div>Logo</div>
      <ul className={styles.ul}>
        <li>Arquivo</li>
        <li>Sobre</li>
      </ul>
    </div>
  );
}

