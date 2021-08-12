import Image from 'next/image';
import Link from 'next/link';

function PokemonItem({ pokemon }) {
  return (
    <Link href={`pokemon/${pokemon._id}`}>
      <div
        className="flex flex-col bg-white p-6 rounded-md hover:shadow-xl cursor-pointer border border-transparent
       transition duration-500 hover:scale-125 hover:border-red-500 mb-10"
      >
        {/* <img src={image} alt={title} /> */}
        <Image
          src={pokemon.imgUrl}
          alt={pokemon.name}
          width={220}
          height={185}
          className="mx-auto"
        />
        <h4 className="text-2xl font-semibold mt-4 text-center">
          {pokemon.name}
        </h4>
        {/* <p className="my-4">Chamander é um pokemon tipo fogo</p> */}
        <button
          type="button"
          className="bg-red-600 mt-4 p-3 text-white rounded-md hover:shadow-xl hover:bg-purple-700"
        >
          Comprar
        </button>
      </div>
    </Link>
  );
}

export default PokemonItem;
