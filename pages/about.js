import Head from 'next/head';
import Image from 'next/image';
import Home from '/components/home/home';

export default function HomePage() {
  return (
    <div>
        <Head>
            <title>ISTA HAY RIAD - À propos de nous</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        
        <Home/>
    </div>
  )
}
