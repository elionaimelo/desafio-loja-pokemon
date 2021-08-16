/* eslint-disable react/button-has-type */
import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import Router from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';
import { useCart } from 'react-use-cart';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function PokemonDetail({ pokemon, item }) {
  const { addItem } = useCart();
  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>Detalhes do pokemon</title>
      </Head>
      <Header />
      <main>
        <section className="grid grid-cols-5 mx-9 mt-8 gap-4">
          <aside className="hidden md:block">
            <Sidebar />
          </aside>
          <div className="col-span-4">
            <div className="flex flex-col bg-white p-6 rounded-md items-start shadow-md">
              <button
                className="flex items-center"
                onClick={() => Router.back()}
              >
                <IoIosArrowBack />
                Voltar
              </button>
              <h1 className="text-4xl mt-3 text-red-500 font-semibold">
                Informações do pokemon
              </h1>
              <Image
                src={pokemon.sprites.other.dream_world.front_default}
                width={250}
                height={250}
              />
              <h1 className="text-3xl mt-3">{pokemon.name}</h1>
              <h1 className="text-3xl mt-3">{pokemon.type}</h1>

              <button
                type="button"
                className="bg-red-600 mt-4 p-3 text-white rounded-md hover:shadow-xl hover:bg-purple-700"
                onClick={() => addItem(item)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps = async ({ params: { name } }) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return {
    props: {
      pokemon: response.data,
    },
  };
};

export default PokemonDetail;
