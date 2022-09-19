import Head from 'next/head';
import Image from 'next/image';
import About from '../components/about/aboutPage.js';

export default function HomePage() {
  return (
    <div>
        <Head>
            <title>ISTA HAY RIAD - À propos de nous</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        
        <About/>
    </div>
  )
}
