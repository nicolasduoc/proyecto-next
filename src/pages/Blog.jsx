import Layout from "../components/Layout";
import Image from "next/image";
import Entrada from "@/components/Entrada";
import styles from "../styles/Blog.module.css";

const Blog = ({ resultado }) => {
  /*   useEffect(() => {
    const consulta = async () => {
      const url = "https://api.chucknorris.io/jokes/random";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
    };
    consulta();
  }, []); */
  console.log(resultado);
  return (
    <Layout pagina="Gatos">
      <main>
        <h2 className="heading">Gatos</h2>
        <div className={styles.contenedor}>
          {
            resultado.map((gato) => (
              <Entrada 
              key={gato.id} 
              resultado={gato}
              especie={gato.breeds[0].name}
              />
            ))
          }
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = "https://api.thecatapi.com/v1/images/search?limit=50&api_key=live_fG0EhC09jZJdgIS0216hXzH8PqoKNLPGJ6NnnHkKMb8kiempGdVFFOa5zca9tbXs&has_breeds=1";
  /* const url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_fG0EhC09jZJdgIS0216hXzH8PqoKNLPGJ6NnnHkKMb8kiempGdVFFOa5zca9tbXs"; */
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  console.log(resultado);
  return {
    props: {
      resultado,
    },
  };
}

export default Blog;
