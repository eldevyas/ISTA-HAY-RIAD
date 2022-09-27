import Card from './interface/card';

export default function ActualitésPage(props) {
    const News = props.News;

    return (
        <div className="Actualités">
            <div className="Cards">
                
                { News.map((newCard, index) => (
                    <Card key={index} title={newCard.title} description={newCard.description} img={newCard.img} date={newCard.date} href={newCard.href}/>
                ))}
            </div>
        </div>
    );
}