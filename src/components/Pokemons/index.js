import PokemonItem from '../PokemonItem';

export default function PokemonList({ pokemons, busca, pokeFilterType }) {
  const pokeBusca = pokemons.filter((objeto) => {
    if (busca == null) {
      return null;
    } else {
      return Object.values(objeto).join(' ').includes(busca.toLowerCase());
    }
  });

  const renderPokeFiltertype = () => {
    console.log;
    if (pokeFilterType == null || pokeFilterType === undefined) {
      return null;
    } else {
      return pokeFilterType.map((type) => (
        <PokemonItem key={type.name} pokemon={type} />
      ));
    }
  };

  const renderGeneral = () => {
    return pokemons.map((poke, index) => (
      <PokemonItem pokemon={poke} item={poke} key={index} />
    ));
  };

  const renderBusca = () => {
    if (busca == null || busca === undefined) {
      return null;
    } else {
      return pokeBusca.map((poke) => (
        <PokemonItem key={poke.name} pokemon={poke} />
      ));
    }
  };

  return (
    <div className="grid md:grid-cols-4 grid-flow-row auto-rows-max gap-4">
      {renderPokeFiltertype() == null && renderBusca() == null ? (
        renderGeneral()
      ) : (
        <>
          {renderPokeFiltertype() == null
            ? renderGeneral()
            : renderPokeFiltertype()}
          {renderBusca() == null ? renderGeneral() : renderBusca()}
        </>
      )}
    </div>
  );
}
