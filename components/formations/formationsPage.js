import Button from '@mui/material/Button'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import Card from './interface/card'



const Cards = [
    {
        title: 'Développement Digitale',
        description: "Un technicien spécialisé en Développement digital – option Full Stackest un professionnel capable de réaliser des tâches à n'importe quel niveau technique de la pile des différentes couches qui constituent une application informatique ou un site web . Il intervient, généralement pour le compte de Sociétés de Services et d’Ingénierie Informatiques, dans de nombreux domaines applicatifs (industrie, gestion, finances, services…).En amont, il est réceptif aux attentes du client, il étudie le cahier des charges, les capacités de l’environnement technique et les contraintes du système de production du client. En aval, il participe à la mise en exploitation et au support technique de l’application et systèmes.",
        image: "/static/coding.jpg",
        chips: ['Technicien Spécialisé', "Cours du jour", "Formation Qualifiante"]
    },
    {
        title: 'Digital Design',
        description: "Le tronc commun en Digital Design vise à offrir une opportunité aux stagaires pour acquérir des connaissances solides sur la création des designs n...",
        image: "/static/design.jpg",
        chips: ['Technicien Spécialisé', "Cours du jour", "Formation Qualifiante"]
    }, {
        title: 'Infrastructure Digitale',
        description: "Le tronc commun en infrastructure digitale est une  étape cruciale qui vise à former des stagiares pour concevoir, administrer, optimiser, et sécur...",
        image: "/static/digital.jpg",
        chips: ['Technicien Spécialisé', "Cours du jour", "Formation Qualifiante"]
    }, {
        title: 'Intelligence Artificielle',
        description: "Le Tronc Commun en Intelligence Artificielle vise à doter les stagiares en compétences fortes sur les techniques, méthodes et lang...",
        image: "/static/artificial.jpg",
        chips: ['Technicien Spécialisé', "Cours du jour", "Formation Qualifiante"]
    }, 
    {
        title: 'Bureauticien Certifié en Microsoft office Spécialiste',
        description: "L’informaticien Bureauticien Certifié en Microsoft Office Specialist, qui exerce son activité dans des PME/PMI, administrations publiques, doté de...",
        image: "/static/bureauticien.jpg",
        chips: ['Technicien Spécialisé', "Cours du jour", "Formation Qualifiante"]
    }, {
        title: "Community manager",
        description: "Le community manager est un professionnel chargé d’alimenter le site Internet de l’entreprise, les réseaux sociaux et blogs de contenus éditoriaux...",
        image: "/static/community.jpg",
        chips: ['Technicien Spécialisé', "Cours du jour", "Formation Qualifiante"]
    }
]

export default function FormationsPage() {


    return (
            <div className="FormationsPage">
               <div className="FormationsCards">
                    {Cards.map( (card, index) => (
                        <Card key={index} title={card.title} description={card.description} image={card.image} chips={card.chips}/>
                    ) )}
                </div> 

                <Button variant="outlined" className="ReadMore" startIcon={<ReadMoreIcon />}>
                    Afficher Plus
                </Button>
            </div>
    );
}