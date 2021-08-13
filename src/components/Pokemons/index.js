import PokemonItem from '../PokemonItem';

export default function PokemonList({ pokemons, busca }) {
  const pokeFilter = pokemons.filter((objeto) => {
    return Object.values(objeto).join(' ').includes(busca.toLowerCase());
  });
  return (
    <div className="container">
      {busca == null ? (
        <div className="grid md:grid-cols-4 grid-flow-row auto-rows-max gap-4">
          {pokemons.map((poke) => (
            <PokemonItem key={poke.name} pokemon={poke} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-4 grid-flow-row auto-rows-max gap-4">
            {pokeFilter.map((poke) => (
              <PokemonItem key={poke.name} pokemon={poke} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
