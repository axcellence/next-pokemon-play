import { Pokemon } from "../types";
import Image from "next/image";

interface Colors {
  [key: string]: string;
}

const colors: Colors = {
  grass: "bg-gradient-to-br from-green-300 to-greem-600",
  fire: "bg-gradient-to-br from-red-300 to-red-600",
  water: "bg-gradient-to-br from-blue-300 to-blue-600",
  bug: "bg-gradient-to-br from-emerald-300 to-emerald-600",
  normal: "bg-gradient-to-br from-slate-300 to-slate-600",
  poison: "bg-gradient-to-br from-purple-300 to-purple-600",
  electric: "bg-gradient-to-br from-yellow-300 to-yellow-600",
  ground: "bg-gradient-to-br from-amber-300 to-amber-600",
  fairy: "bg-gradient-to-br from-pink-300 to-pink-600",
  fighting: "bg-gradient-to-br from-orange-300 to-blue-600",
  psychic: "bg-gradient-to-br from-pink-300 to-pink-600",
  rock: "bg-gradient-to-br from-gray-300 to-gray-600",
  ghost: "bg-gradient-to-br from-indigo-300 to-indigo-600",
  ice: "bg-gradient-to-br from-cyan-300 to-cyan-600",
  dragon: "bg-gradient-to-br from-violet-300 to-violet-600",
  flying: "bg-gradient-to-br from-blue-300 to-blue-600",
  dark: "bg-gradient-to-br from-gray-300 to-gray-600",
  steel: "bg-gradient-to-br from-gray-300 to-gray-600",
};

export default async function PokemonPage({ params }) {
  const pokemon = (await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  ).then((res) => res.json())) as Pokemon;

  const mainType = pokemon.types[0].type.name;
  const image =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.back_default;

  return (
    <div className="flex gap-4">
      <div className={`rounded-full p-4 w-40 h-40 ${colors[mainType]}`}>
        <Image
          src={image}
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
