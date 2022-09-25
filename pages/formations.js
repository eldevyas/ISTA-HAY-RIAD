import Head from 'next/head';
import Image from 'next/image';
import FormationsPage from '../components/formations/formationsPage';

export default function HomePage() {
  return (
    <div>
        <Head>
            <title>ISTA HAY RIAD - Formations</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        
        <FormationsPage/>
    </div>
  )
}
