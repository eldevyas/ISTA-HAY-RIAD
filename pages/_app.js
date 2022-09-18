import '../dist/main.css';
import Layout from '../components/layout';
import NextNProgress from "nextjs-progressbar";
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
    });

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
