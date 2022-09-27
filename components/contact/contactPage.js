import React from 'react';
import SimpleMap from './interface/googleMap';

function Card(props) {
    return (
       <>
            <div className="card">
                <h1>{props.Title}</h1>
                <p>{props.Description}</p>    
            </div>    
        </>
    )
}


const Cards = [
    {
        title: 'Adresse',
        description: 'Avenue Hassan II, Rabat'
    },
    {
        title: "Téléphone",
        description: "+2120664093860"
    },
    {
        title: "Adresse Email",
        description: "info@yoursite.com"
    },
    {
        title: "Website",
        description: "www.istahayriad.com"
    }
]



export default function ContactPage() {
    return (
        <>
            <div className="contact-page">
                <div className="contact-cards">
                    {
                        Cards.map((card, index) => (
                            <Card key={index} Title={card.title} Description={card.description}/>
                        ))
                    }
                </div>

                <SimpleMap/>
            </div>
        </>
    );
} 