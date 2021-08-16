import Image from 'next/image';
import Link from 'next/link';
import { useCart } from 'react-use-cart';

function PokemonItem({ pokemon, item }) {
  const { addItem } = useCart();
  return (
    <Link href={`pokemon/${pokemon.name}`}>
      <div
        key={pokemon.id}
        className="flex flex-col bg-white p-6 rounded-md hover:shadow-xl cursor-pointer border border-transparent
       transition duration-500 hover:scale-125 hover:border-red-500 mb-10 text-center"
      >
        {pokemon.imgUrl == null ? (
          ''
        ) : (
          <Image
            src={pokemon.imgUrl}
            alt={pokemon.name}
            width={220}
            height={185}
            className="mx-auto"
          />
        )}

        <p className="mt-7">R$ {pokemon.price}</p>
        <h4 className="text-2xl font-semibold mt-4 text-center">
          {pokemon.name}
        </h4>

        <p>{pokemon.types.map((type) => type.slot.name)}</p>

        <button
          type="button"
          className="bg-red-600 mt-4 p-3 text-white rounded-md hover:shadow-xl hover:bg-purple-700"
          onClick={() => addItem(item)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </Link>
  );
}

export default PokemonItem;
