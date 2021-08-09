import Head from 'next/head';
import axios from 'axios';

import Header from '../components/Header';
import Products from '../components/Products';

export default function Home({ pokemons }) {
  return (
    <div className="bg-gray-200 h-screen">
      <Head>
        <title>Pokemaricanas</title>
      </Head>
      <Header />
      <main>
        {/* filtros */}
        <Products pokemons={pokemons} />
      </main>
    </div>
  );
}
export const getStaticProps = async () => {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=50',
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
