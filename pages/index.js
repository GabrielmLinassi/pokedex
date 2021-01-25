import Layout from "../components/Layout";
import Link from "next/link";

export default function Home({ pokemons }) {
  return (
    <Layout title="NextJS Pokedex">
      <div className="flex items-center mb-8">
        <img src="/logo.png" alt="Logo" className="mr-3" />
        <h1 className="text-4xl font-extrabold">Pokedex</h1>
      </div>

      <ul>
        {pokemons.map((pokemon, _index) => {
          const index = _index + 1;
          return (
            <li key={index} id={index}>
              <Link href={`/pokemon?id=${index}`}>
                <a className="flex items-center text-lg bg-gray-200 hover:bg-gray-300 shadow-md my-2 p-4 rounded-md">
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="w-20 mr-3"
                  />
                  <div className="flex items-center  capitalize">
                    <span className="font-bold mr-2">{index}.</span>
                    {pokemon.name}
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=150");
    const { results } = await res.json();

    const pokemons = results.map((result, _index) => {
      const index = _index + 1;
      const image = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;
      return {
        ...result,
        image,
      };
    });

    return {
      props: {
        pokemons: pokemons,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
