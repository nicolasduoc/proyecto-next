import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/yo.module.css";

const Yo = () => {
  return (
    <Layout pagina="yo">
      <h2 className="heading">Nosotros</h2>
      <div className={styles.contenido}>
        <Image layout="responsive" width={600} height={300} src="/raven.jpg" ></Image>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatem, voluptas odio error laboriosam esse laborum atque quasi provident nisi nihil rerum! Delectus quidem nihil placeat voluptatem modi maxime. Nesciunt?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatem, voluptas odio error laboriosam esse laborum atque quasi provident nisi nihil rerum! Delectus quidem nihil placeat voluptatem modi maxime. Nesciunt?</p>
        </div>
      </div>
    </Layout>
  );
};

export default Yo;
