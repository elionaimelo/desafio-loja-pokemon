import Head from 'next/head';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function PokemonDetail() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>Detalhes do pokemon</title>
      </Head>
      <Header />
      <main>
        {/* filtros */}
        <section className="grid grid-cols-5 mx-9 mt-8 gap-4">
          <aside className="hidden md:block">
            <Sidebar />
          </aside>
          <div className="col-span-4">detalhes do pokemon</div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async ({ params: { id } }) => {
  console.log(id);
  // const response = await axios.get(
  //   'https://pokeapi.co/api/v2/pokemon?limit=50',
  // );

  // const promises = response.data.results.map((result) => axios.get(result.url));
  // const responses = await Promise.all(promises);
  // const pokeData = responses.map((r) => ({
  //   name: r.data.name,
  //   imgUrl: r.data.sprites.other.dream_world.front_default,
  // }));

  return {
    props: {
      // pokemons: pokeData,
    },
    // revalidate: 10,
  };
};

export default PokemonDetail;
