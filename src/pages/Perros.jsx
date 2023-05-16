import React from 'react'
import Layout from '@/components/Layout';
import EntradaPerro from '@/components/EntradaPerro';
import styles from '@/styles/Perros.module.css';

const Perros = ({ resultado }) => {
  console.log(resultado);
  return (
    <Layout pagina="Perros">
      <main>
        <h2 className="heading">Perros</h2>
        <div className={styles.contenedor}>
          {
            resultado.map((perro) => (
              <EntradaPerro 
              key={perro.id} 
              resultado={perro}
              />
            ))
          }
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = "https://api.thedogapi.com/v1/images/search?limit=20&api_key=live_fG0EhC09jZJdgIS0216hXzH8PqoKNLPGJ6NnnHkKMb8kiempGdVFFOa5zca9tbXs";
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

export default Perros