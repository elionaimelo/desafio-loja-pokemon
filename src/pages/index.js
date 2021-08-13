import Head from 'next/head';
import axios from 'axios';

import { useState } from 'react';
import Header from '../components/Header';
import PokemonList from '../components/Pokemons';
import Sidebar from '../components/Sidebar';

export default function Home({ pokemons }) {
  const [busca, setBusca] = useState();

  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>Pokemaricanas</title>
      </Head>
      <Header handleBusca={(busca) => setBusca(busca)} />

      <main>
        {/* filtros */}
        <section className="grid grid-cols-5 mx-9 mt-8 gap-10">
          <aside className="hidden md:block">
            <Sidebar />
          </aside>
          <div className="col-span-4">
            <PokemonList pokemons={pokemons} busca={busca} />
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
  }));

  return {
    props: {
      pokemons: pokeData,
    },
    revalidate: 10,
  };
};
