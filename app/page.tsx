import Link from "next/link";

export default async function Home() {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/").then(
    (res) => res.json()
  );

  return (
    <ul>
      {pokemon.results.map((mon) => (
        <li key={mon.url}>
          <Link href={`/pokemon/${mon.name}`}>{mon.name}</Link>
        </li>
      ))}
    </ul>
  );
}
