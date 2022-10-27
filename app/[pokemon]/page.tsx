import { Pokemon } from "../types";
import Image from "next/image";

interface Props {
  params: {
    pokemon: Pokemon;
  };
}

const colors = {
  grass: "bg-green-300",
  fire: "bg-red-300",
  water: "bg-blue-300",
  bug: "bg-green-300",
  normal: "bg-gray-300",
  poison: "bg-purple-300",
  electric: "bg-yellow-300",
  ground: "bg-yellow-300",
  fairy: "bg-pink-300",
  fighting: "bg-red-300",
  psychic: "bg-pink-300",
  rock: "bg-gray-300",
  ghost: "bg-purple-300",
  ice: "bg-blue-300",
  dragon: "bg-purple-300",
  flying: "bg-blue-300",
  dark: "bg-gray-300",
  steel: "bg-gray-300",
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = (await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  ).then((res) => res.json())) as Pokemon;
  console.log(pokemon);
  console.log(pokemon.sprites.other["official-artwork"]);

  const mainType = pokemon.types[0].type.name;

  return (
    <div className="flex gap-4">
      <div className={`rounded-full p-4 w-40 h-40 ${colors[mainType]}`}>
        <Image
          src={pokemon.sprites.back_default}
          width={100}
          height={100}
          alt={pokemon.name}
          className="w-full h-full object-cover pixelated"
        />
      </div>
      <div>
        <h1 className="font-medium text-2xl mt-4">{pokemon.name}</h1>
        <div className="flex gap-2 mt-2 text-xs">
          {pokemon.types.map((type) => (
            <div key={type.slot}>/ {type.type.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
