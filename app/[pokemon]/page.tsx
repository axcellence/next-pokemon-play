export default async function PokemonPage({ params }) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  ).then((res) => res.json());
  console.log(pokemon);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      {/* <Image src={pokemon.sprites/>} /> */}
    </div>
  );
}
