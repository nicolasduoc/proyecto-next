import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const entradaPokemon = ({pokemon}) => {
  const router = useRouter()
  const {name} = router.query
  console.log("name: ", name);
  console.log("pokemon: ", pokemon);
  return (
    
    <Layout>
      <div>entradaPokemon</div>
    </Layout>
  )
}

export async function getserverSideProps({query: {name}}) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}` 
  console.log("url: ", url);
  const res = await fetch(url)
  const pokemon = await res.json()

  console.log("pokemon serverside: ", pokemon);
  return {
    props: {
      pokemon
    }
  }
}

export default entradaPokemon