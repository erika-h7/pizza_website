import Head from 'next/head';
import Home from '../components/Home/Home.js';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Pizza Shop</title>
        <meta name="description" content="Best Pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />

    </div>
  )
}
