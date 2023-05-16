import Image from "next/image";
import styles from "../styles/Entrada.module.css"


const Entrada = ({ resultado }) => {
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

      <h1> {resultado.breeds[0].name} </h1>
      <h1> {resultado.breeds[0].description} </h1>
    </article>
  );
};

export default Entrada;
