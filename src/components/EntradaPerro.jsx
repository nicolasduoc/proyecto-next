import Image from "next/image";
import styles from "../styles/Entrada.module.css"


const EntradaPerro = ({ resultado }) => {
  /* const { imagen, especie } = resultado; */
  return (
    <article className={styles.article}>
      <Image
        className={styles.imagen}
        layout="responsive"
        width={300}
        height={300}
        src={resultado.url}
        alt="Gato"
      />
    </article>
  );
};

export default EntradaPerro;
