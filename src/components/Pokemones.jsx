import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/Pokemon.module.css";
import Link from "next/link";

function Pokemones() {
  const [Pokemones, setPokemones] = useState([]);

  useEffect(() => {
    async function fetchPokemones() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const results = response.data.results;
      setPokemones(results);
    }

    fetchPokemones();
  }, []);
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>

  return (
    
    <div className={styles.container}>
      {Pokemones.map((pokemon) => (
        <div
        key={pokemon.name} 
        className={styles.c_pokemon}>

          <Link href={`/Pokemon/${pokemon.name}`}>
            <img
              onClick={() => {console.log(pokemon.url.split("/")[6])}}
              key={pokemon.name}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.url.split("/")[6]
              }.png`}
              alt={pokemon.name}
              className={styles.imagen}
            />
          </Link>
          <p>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1).toLowerCase()}</p>
        </div>
      ))}
    </div>
  );
}

export default Pokemones;
