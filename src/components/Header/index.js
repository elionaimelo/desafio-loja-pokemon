import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';

function Header() {
  // const router = useRouter();
  // const isActive = (r) => {
  //   if (r === router.pathname) {
  //   } else {
  //   }
  // };
  return (
    <header className="shadow-md border-b border-red-300 py-2 sticky top-0 z-50 bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Esquerda */}
          <div className="flex">
            <div className="mt-3">
              <Image
                src="/images/pokeball.svg"
                width={44}
                height={44}
                className="logomt"
              />
            </div>
            <div className="mt-3 hidden md:inline-flex">
              <Image
                src="/images/logo.png"
                width={220}
                height={44}
                className="logomt"
              />
            </div>
          </div>
          {/* Centro */}
          <form>
            <div className="flex bg-gray-100 p-2 rounded-full">
              <BiSearchAlt size="1.5rem" className="text-gray-700" />
              <input
                id="searchGlobal"
                placeholder="Pesquisar na loja"
                className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-400 flex-shrink"
              />
            </div>
          </form>
          {/* direita */}
          <nav>
            <Link href="/home">
              <a className="flex items-center">
                <AiOutlineShoppingCart />
                <span className="ml-2">Carrinho</span>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
