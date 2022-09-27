import React from "react";
import EspaceHeader from "./interface/header";
import Website from "./interface/website";


const Websites = [
    {
        Title: "Lorem Ipsum dolor sit amet",
        URL: "http://www.google.com/",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus consectetur lacus, sed dictum dui mollis in. In porta lacus in odio consequat laoreet. Phasellus consectetur in ligula sit amet tempus. Quisque et urna pellentesque, volutpat ipsum at, condimentum dolor."
    },
    {
        Title: "Lorem Ipsum dolor sit amet",
        URL: "http://www.google.com/",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus consectetur lacus, sed dictum dui mollis in. In porta lacus in odio consequat laoreet. Phasellus consectetur in ligula sit amet tempus. Quisque et urna pellentesque, volutpat ipsum at, condimentum dolor."
    },
    {
        Title: "Lorem Ipsum dolor sit amet",
        URL: "http://www.google.com/",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus consectetur lacus, sed dictum dui mollis in. In porta lacus in odio consequat laoreet. Phasellus consectetur in ligula sit amet tempus. Quisque et urna pellentesque, volutpat ipsum at, condimentum dolor."
    },
    {
        Title: "Lorem Ipsum dolor sit amet",
        URL: "http://www.google.com/",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus consectetur lacus, sed dictum dui mollis in. In porta lacus in odio consequat laoreet. Phasellus consectetur in ligula sit amet tempus. Quisque et urna pellentesque, volutpat ipsum at, condimentum dolor."
    },
    {
        Title: "Lorem Ipsum dolor sit amet",
        URL: "http://www.google.com/",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus consectetur lacus, sed dictum dui mollis in. In porta lacus in odio consequat laoreet. Phasellus consectetur in ligula sit amet tempus. Quisque et urna pellentesque, volutpat ipsum at, condimentum dolor."
    },
    {
        Title: "Lorem Ipsum dolor sit amet",
        URL: "http://www.google.com/",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus consectetur lacus, sed dictum dui mollis in. In porta lacus in odio consequat laoreet. Phasellus consectetur in ligula sit amet tempus. Quisque et urna pellentesque, volutpat ipsum at, condimentum dolor."
    }
]

export default function EspaceStagiaires() {
    const [choice, setChoice] = React.useState('');

    const handleChange = (event) => {
      setChoice(event.target.value);
    };

    return(
        <>
            <div className="EspaceStagiaires">
                <EspaceHeader/>

                <div className="EspaceSites">
                    <h1>Des sites importants pour les stagiaires</h1>

                    <div className="EspaceSites-list">
                        {Websites.map((site, index) => (
                            <Website key={index} URL={site.URL} Description={site.Description} Title={site.Title} Index={index + 1}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};