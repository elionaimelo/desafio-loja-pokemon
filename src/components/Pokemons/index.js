import PokemonItem from '../PokemonItem';

export default function PokemonList({ pokemons, busca }) {
  const pokeFilter = pokemons
    .filter((objeto) => objeto.name === busca)
    .map((r) => ({
      name: r.name,
      imgUrl: r.imgUrl,
    }));
  // console.log(pokeFilter);

  return (
    <div className="container">
      {busca}
      {/* <div className="grid md:grid-cols-4 grid-flow-row auto-rows-max gap-4">
        {pokemons.map((poke) => (
          <PokemonItem key={poke.name} pokemon={poke} />
        ))}
      </div> */}
      <div className="grid md:grid-cols-4 grid-flow-row auto-rows-max gap-4">
        {busca == null ? (
          <>
            {pokemons.map((poke) => (
              <PokemonItem key={poke.name} pokemon={poke} />
            ))}
          </>
        ) : (
          <PokemonItem pokemon={pokeFilter} />
        )}
      </div>
    </div>
  );
}
