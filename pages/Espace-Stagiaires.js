import Head from 'next/head';
import Image from 'next/image';
import EspaceStagiaires from '../components/espace-stagiaires/pageEspace';

export default function HomePage() {
  return (
    <div>
        <Head>
            <title>ISTA HAY RIAD - Espace Stagiares</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        
       <EspaceStagiaires/> 
        
    </div>
  )
}
