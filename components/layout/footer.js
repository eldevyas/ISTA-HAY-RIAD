import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <>
            <div className="Footer">
                <div className = "FooterContent">
                    <div className = "Contact">
                        <p className = "Title">Avez-vous des questions?</p>
                        <p>Avenue Hassan II, Rabat</p>
                        <p>+212 664 09 38 60</p>
                        <p>example@email.com</p>
                    </div>

                    <div className = "Links">
                        <p className = "Title">Links</p>
                        <p>Accueil</p>
                        <p>à propos de nous</p>
                        <p>Formations</p>
                        <p>Actualités</p>
                        <p>Espace Stagiaires</p>
                        <p>Contact</p>
                    </div>

                    <div className = "Social">
                        <p className = "Title">Nous Suivre</p>

                        <div className = "SocialIcons">
                            <SocialIcon url="https://twitter.com/yassine_ct" target="_blank" rel="noopener noreferrer" />
                            <SocialIcon url="https://facebook.com/yassibe.cth" target="_blank" rel="noopener noreferrer" />
                            <SocialIcon url="https://github.com/yassine-ct"  target="_blank" rel="noopener noreferrer" />
                        </div>
                    </div>
                </div>

                <div className = "FooterInfo">
                    <p>
                        Copyright ©2022 | Conçu à Figma par <strong>Mouad El Asri</strong> - Développé par <strong>Yassine Chettouch</strong> & <strong>Ayoub Boufous</strong>
                    </p>
                </div>
            </div>
        </>
    );
}