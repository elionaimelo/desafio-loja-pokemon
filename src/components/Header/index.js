import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
// import { useRouter } from 'next/router';

import {
  AiOutlineShoppingCart,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';
import { BiSearchAlt, BiUserCircle } from 'react-icons/bi';
// import { useState } from 'react';

function Header(props) {
  // const router = useRouter();
  // const isActive = (r) => {
  //   if (r === router.pathname) {
  //   } else {
  //   }
  // };
  const [session, loading] = useSession();
  // const [busca, setBusca] = useState();
  // console.log(busca);
  return (
    <header className="shadow-md border-b border-red-300 py-2 sticky top-0 z-50 bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Esquerda */}
          <div className="flex">
            <div className="mt-3">
              <Link href="/">
                <a>
                  <Image
                    src="/images/pokeball.svg"
                    width={44}
                    height={44}
                    className="logomt"
                  />
                </a>
              </Link>
            </div>
            <div className="mt-3 hidden md:inline-flex">
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo.png"
                    width={220}
                    height={44}
                    className="logomt"
                  />
                </a>
              </Link>
            </div>
          </div>
          {/* Centro */}
          <form>
            <div className="flex bg-gray-100 p-2 rounded-full w-auto md:w-custom1">
              <BiSearchAlt size="1.5rem" className="text-gray-700" />
              <input
                id="searchGlobal"
                placeholder="Pesquisar na loja"
                onChange={(ev) => props.handleBusca(ev.target.value)}
                className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-400 flex-shrink"
              />
            </div>
          </form>
          {/* direita */}
          <nav className="flex space-x-3">
            <Link href="/home">
              <a className="flex items-center">
                <AiOutlineShoppingCart />
                <span className="ml-2">Carrinho</span>
              </a>
            </Link>

            {loading ? (
              <AiOutlineLoading3Quarters />
            ) : (
              <>
                {!session ? (
                  <Link href="/home">
                    <button
                      type="submit"
                      className="flex items-center bg-red-600 py-2  px-4 rounded-lg text-white"
                      onClick={() => signIn('google')}
                    >
                      <BiUserCircle />
                      <span className="ml-2">Entrar</span>
                    </button>
                  </Link>
                ) : (
                  <button
                    type="submit"
                    onClick={() => signOut()}
                    className="flex items-center bg-transparent border border-red-600 py-2  px-4 rounded-lg text-red-600"
                  >
                    <Image
                      src={session.user.image}
                      alt="profile"
                      width={25}
                      height={25}
                      layout="fixed"
                      className="rounded-full"
                    />
                    <span className="ml-2"> {session.user.name}</span>
                  </button>
                )}
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
