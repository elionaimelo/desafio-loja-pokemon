import PokemonItem from '../PokemonItem';

export default function PokemonList({ pokemons }) {
  return (
    <div className="container">
      <div className="grid md:grid-cols-4 grid-flow-row auto-rows-max gap-4">
        {pokemons.map((poke) => (
          <PokemonItem key={poke.name} pokemon={poke} />
        ))}
      </div>
    </div>
  );
}
