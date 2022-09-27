import Head from 'next/head';
import Image from 'next/image';
import ContactPage from '../components/contact/contactPage';

export default function HomePage() {
  return (
    <div>
        <Head>
            <title>ISTA HAY RIAD - Contact</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

        <ContactPage />

    </div>
  )
}
