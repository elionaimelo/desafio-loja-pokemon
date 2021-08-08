import Head from 'next/head';

import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-gray-200 h-screen">
      <Head>
        <title>Pokemaricanas</title>
      </Head>
      <Header />
      <main>
        {/* filtros */}
        {/* lista de produtos */}
      </main>
    </div>
  );
}
