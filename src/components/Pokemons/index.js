import { useState } from 'react';
import PokemonItem from '../PokemonItem';

export default function PokemonList({ pokemons, busca, pokeFilterType }) {
  const pokeBusca = pokemons.filter((objeto) => {
    if (busca == null) {
      return null;
    }
    return Object.values(objeto).join(' ').includes(busca.toLowerCase());
  });

  const renderPokeFiltertype = () => {
    if (pokeFilterType == null || pokeFilterType === undefined) {
      return null;
    }
    return pokeFilterType.map((type) => (
      <PokemonItem key={type.name} pokemon={type} />
    ));
  };

  // const renderGeneral = () =>
  //   pokemons.map((poke, index) => (
  //     <PokemonItem pokemon={poke} item={poke} key={index} />
  //   ));

  const renderBusca = () => {
    if (busca == null || busca === undefined) {
      return null;
    }
    return pokeBusca.map((poke) => (
      <PokemonItem key={poke.name} pokemon={poke} />
    ));
  };

  const [visible, setVisible] = useState(12);

  const showMorePoke = () => {
    setVisible((preValue) => preValue + 12);
  };

  return (
    <div className="grid md:grid-cols-4 grid-flow-row auto-rows-max gap-4">
      {renderPokeFiltertype() == null && renderBusca() == null ? (
        <>
          {pokemons.slice(0, visible).map((poke, index) => (
            <PokemonItem pokemon={poke} item={poke} key={index} />
          ))}
          <button
            type="button"
            onClick={showMorePoke}
            className="mb-12 px-9 py-4 bg-red-600 text-white"
          >
            Carregar mais
          </button>
        </>
      ) : (
        <>
          {renderPokeFiltertype() == null
            ? pokemons.map((poke, index) => (
                <PokemonItem pokemon={poke} item={poke} key={index} />
              ))
            : renderPokeFiltertype()}
          {renderBusca() == null
            ? pokemons.map((poke, index) => (
                <PokemonItem pokemon={poke} item={poke} key={index} />
              ))
            : renderBusca()}
        </>
      )}
    </div>
  );
}
