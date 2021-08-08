import Head from 'next/head';

import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemaricanas</title>
      </Head>
      <Header />
      <h1>Home</h1>
    </>
  );
}
