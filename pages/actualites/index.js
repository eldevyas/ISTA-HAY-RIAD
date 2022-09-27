import Head from 'next/head';
import Image from 'next/image';
import ActualitésPage from '../../components/actualites/actualitesPage';
import axios from 'axios';
import cheerio from 'cheerio';



export async function getServerSideProps() {
    let URL="https://www.ofppt.ma";
    const News = [];


    const { data } = await axios.get(URL + '/fr/actualites');
    const $ = cheerio.load(data);

    const fetchedNewsList = $('div.news-list').html();
    const fetchedNews = $('div.news-list>div.news-item').map((i, card) => {
        return {
            href: URL + $(card).find('a').attr('href'),
            img: URL + $(card).find('a').find('img').attr('src'),
            date: $(card).find('a').find('div.date').find('time').text(),
            title: $(card).find('a').find('div.news-title').text().replace(/(\r\n|\n|\r)/gm, "").trimStart().trimEnd(),
            description: $(card).find('a').find('p').text()
        }
    }).get();
    const Content = fetchedNews;

    return {
        props: { Content }
    };
}

export default function HomePage({ Content }) {
    console.clear();
    console.log(Content);

    return (
        <div>
            <Head>
                <title>ISTA HAY RIAD - Actualités</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <ActualitésPage News ={Content}/>
        </div>
    )
}
