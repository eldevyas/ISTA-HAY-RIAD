import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import QuickLink from './utils/quickLink';

const quickLinks = [
    { text: 'Accueil', href: '/'},
    { text: 'À propos de nous', href: '/about'},
    { text: 'Formations', href: '/formations'},
    { text: 'Actualités', href: '/actualités'},
    { text: 'Espace Stagiaires', href: '/Espace-Stagiaires' },
    { text: 'Contact', href: '/contact'}
];

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
                        <ul>
                        {quickLinks.map((link, idx) => (
                            <li
                            key={link.text}
                            >
                                <QuickLink {...link} />
                            </li>
                        ))} 
                        </ul>
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