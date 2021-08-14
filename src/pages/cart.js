import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import { useCart } from 'react-use-cart';

import { IoIosArrowBack } from 'react-icons/io';
import Header from '../components/Header';

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <div className="bg-gray-200 min-h-screen">
        <Head>
          <title>Pokestore</title>
        </Head>
        <Header handleBusca={(busca) => setBusca(busca)} />
        <main className="container py-10">
          <button className="flex items-center" onClick={() => Router.back()}>
            <IoIosArrowBack />
            Voltar
          </button>
          <p>Carrinho vazio</p>
        </main>
      </div>
    );
  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>Pokestore</title>
      </Head>
      <Header handleBusca={(busca) => setBusca(busca)} />

      <main className="container py-10">
        <button className="flex items-center" onClick={() => Router.back()}>
          <IoIosArrowBack />
          Voltar
        </button>
        <h1 className="text-2xl font-bold">Carrinho</h1>
        <hr className="border-gray-400" />
        <h4 className="my-5">Total de items: {totalItems}</h4>

        {items.map((item, index) => (
          <>
            <div
              key={index}
              className="grid md:grid-cols-5 gap-10 items-center border border-gray-300 rounded-md p-5"
            >
              <div>
                <Image src={item.imgUrl} width={120} height={60} alt="" />
              </div>
              <div className="flex flex-col">
                <h5 className="font-bold">Nome</h5>
                {item.name}
              </div>
              <div className="flex flex-col">
                <h5 className="font-bold">Preço</h5>
                R$ {item.price},00
              </div>
              <div className="flex flex-col">
                <h5 className="font-bold">Quantidade</h5>
                {item.quantity}
              </div>
              <div className="flex flex-col gap-y-3">
                <button
                  className="bg-gray-400 px-4 py-2 text-white rounded-sm"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className="bg-blue-600 px-4 py-2 text-white rounded-sm"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="bg-red-600 px-4 py-2 text-white rounded-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Remover item
                </button>
              </div>
            </div>
            <div className="text-right mr-6 mt-3">
              Preço total: R$ <strong>{cartTotal}</strong>{' '}
              <div className="flex justify-end my-5 gap-6">
                <button
                  onClick={() => emptyCart()}
                  className="bg-red-600 px-4 py-2 text-white rounded-sm"
                >
                  Limpar carrinho
                </button>
                <button
                  onClick={() => emptyCart()}
                  className="bg-blue-600 px-4 py-2 text-white rounded-sm"
                >
                  Comprar
                </button>
              </div>
            </div>
          </>
        ))}
      </main>
    </div>
  );
}

export default Cart;
