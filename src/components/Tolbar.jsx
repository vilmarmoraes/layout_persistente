import styles from '../styles/Tolbar.module.css'

export default function Tolbar() {
  return (
    <div className={styles.tolbar}>
      <ul className={styles.ul}>
        <li>Arquivo</li>
        <li>Sobre</li>
      </ul>
    </div>
  );
}

