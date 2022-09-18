import '../dist/main.css';
import Layout from '../components/layout';
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress
              color="#39b549"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
