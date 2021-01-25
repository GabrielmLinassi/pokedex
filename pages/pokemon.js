import React from "react";
import Layout from "components/Layout";
import Link from "next/link";

function IconHeart() {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="arrow-left"
      class="svg-inline--fa fa-arrow-left fa-w-14 w-4 h-4"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
      />
    </svg>
  );
}

export default function pokemon({ pokemon }) {
  return (
    <Layout>
      <div className="bg-white text-center shadow-md p-5 rounded-md">
        <div className="text-left">
          <Link href="/">
            <div>
              <a
                href="#"
                className="inline-flex items-center px-3 py-1 rounded-md bg-gray-400 hover:bg-gray-500 text-white"
              >
                <IconHeart />
                <span className="ml-2">Back</span>
              </a>
            </div>
          </Link>
        </div>
        <h1 className="text-4xl mb-2 text-center capitalize">{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} className="w-60 mx-auto" />
        <div>
          <div className="flex justify-center mt-5">
            <p className="mr-3">
              <span className="font-bold">Weight:</span> {pokemon.weight},00 Kg
            </p>
            <p>
              <span className="font-bold">Height:</span> {pokemon.height},00
              inch
            </p>
          </div>
          <div className="flex flex-col items-center mt-3">
            <span className="font-bold">Types:</span>
            <div>
              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className={`inline-flex mt-2 text-center capitalize text-white 
                  ${type === "grass" ? "bg-green-500" : "bg-purple-500"} 
                  rounded-md mr-1 px-3 py-1`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name, weight, height, types } = await res.json();

    const pokemon = {
      name,
      image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
      weight,
      height,
      types: types.map(({ type }) => type.name),
    };

    return {
      props: {
        pokemon,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
