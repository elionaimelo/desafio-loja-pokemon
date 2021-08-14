import Head from 'next/head';
import axios from 'axios';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import PokemonList from '../components/Pokemons';
import Sidebar from '../components/Sidebar';

export default function Home({ pokemons }) {
  const [busca, setBusca] = useState();
  const [pokeFilterType, setPokeFilterType] = useState();

  const handleFilter = async (fil) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${fil}`);

    const promises = response.data.pokemon.map((pokemon) =>
      axios.get(pokemon.pokemon.url),
    );
    const responses = await Promise.all(promises);

    const pokeData = responses.map((r) => ({
      name: r.data.name,
      imgUrl: r.data.sprites.front_default,
      types: r.data.types,
    }));

    setPokeFilterType(pokeData);

    // const currentIndex = filter.indexOf(fil);
    // const newCheck = [...filter];

    // if (currentIndex === -1) {
    //   newCheck.push(fil);
    // } else {
    //   newCheck.splice(currentIndex, 1);
    // }
    // setFilter(newCheck);
    // console.log(filter);
    // fetchDataType();
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>Pokestore</title>
      </Head>
      <Header handleBusca={(busca) => setBusca(busca)} />

      <main>
        <section className="grid grid-cols-5 mx-9 mt-8 gap-10">
          <aside className="hidden md:block">
            <Sidebar handleFilter={(filt) => handleFilter(filt)} />
          </aside>
          <div className="col-span-4">
            <PokemonList
              pokemons={pokemons}
              busca={busca}
              pokeFilterType={pokeFilterType}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
export const getStaticProps = async () => {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=10',
  );

  const promises = response.data.results.map((result) => axios.get(result.url));
  const responses = await Promise.all(promises);

  const pokeData = responses.map((r) => ({
    name: r.data.name,
    imgUrl: r.data.sprites.other.dream_world.front_default,
    types: r.data.types,
  }));

  return {
    props: {
      pokemons: pokeData,
    },
    revalidate: 10,
  };
};
