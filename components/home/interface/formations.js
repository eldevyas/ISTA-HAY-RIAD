import Button from '@mui/material/Button';




function Card(props) {
    return(
        <>
            <div className="FormationCard" style={{ backgroundImage: `url("${props.Image}")`}}>
                <div className="overlay"></div>

                <div></div>

                <div className="topSide">
                    <h1>{props.Title}</h1>
                    <p>
                        {props.Description}
                    </p>
                </div>

                <div className="bottomSide">
                    <p>Savoir Plus</p>
                </div>

                <Button variant="text" className="ActionArea"></Button>
            </div>
        </>
    );

}

export default function SectionFormations() {
    const Card1 = {
        Title: "Digital Design",
        Description: "Le tronc commun en Digital Design vise à offrir une opportunité aux stagaires pour acquérir des connaissances solides sur la création des designs n...",
        Image: "/static/design.jpg"
    }
    
    const Card2 = {
        Title: "Développement Digitale",
        Description: "Le tronc commun en Développement Digital est une étape importante pour acquérir les bases necessaires de l'étude, la conception, la constructio...",
        Image: "/static/coding.jpg"
    }
    
    const Card3 = {
        Title: "Infrastructure Digitale",
        Description: "Le tronc commun en infrastructure digitale est une  étape cruciale qui vise à former des stagiares pour concevoir, administrer, optimiser, et sécur...",
        Image: "/static/digital.jpg"
    }
    
    const CardsList = [
        Card1, Card2, Card3
    ]

    return(
        <div className="section-formations">
            <h1 className="section-title">
                Nos Formations
            </h1>

            <div className="FormationCards">
                {
                    CardsList.map((card, index) => (
                        <Card key={index} Title={card.Title} Description={card.Description} Image={card.Image} />
                    ))
                }
            </div>
        </div>
    );
}