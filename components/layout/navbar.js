import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import Link from 'next/link';


const buttonLinks = [
    { text: 'Accueil', href: '/'},
    { text: 'À propos de nous', href: '/about'},
    { text: 'Formations', href: '/formations'},
    { text: 'Actualités', href: '/actualites'},
    { text: 'Espace Stagiaires', href: '/Espace-Stagiaires' },
    { text: 'Contact', href: '/contact'}
];

function ActiveButton({ children, href }) {
    const router = useRouter()
    const currentClass = router.asPath === href ? 'Active' : 'Inactive'
  
    const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
    }
  
    return (
      <Button variant="outlined" className={"ButtonGrouped" + " " + currentClass} href={href} onClick={handleClick}>
        {children}
      </Button>
    )
  }




function DesktopHeader() {
    return (
        <div className="NavBar Desktop">
            <div className="UpperBar">
                <div className="desktop-header-logo">
                    <Image src = "/favicon.png" width="100" height="100" alt = "Desktop Logo" />
                </div>
                <h1>
                    ISTA HAY RIAD
                </h1>

                <div className="Empty">
                    
                </div>
            </div>

            <div className="BottomBar">
                <ButtonGroup variant="outlined" aria-label="outlined button group" className="ButtonGroup">
                    {
                        buttonLinks.map((link, index) => (
                            <ActiveButton key={index} href={link.href}>
                                {link.text}
                            </ActiveButton>
                        ))
                    }
                </ButtonGroup>
            </div>
        </div>
    );
}




function MobileHeader() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="NavBar Mobile">
                <div className="UpperBar">
                    <div className="desktop-header-logo">
                        <Image src = "/favicon.png" width="100" height="100" alt = "Desktop Logo" />
                    </div>
                    <h1>
                        ISTA HAY RIAD
                    </h1>

                    <div className="Empty">
                        
                    </div>
                </div>

                <div className= "BottomBarMenu">
                    <IconButton aria-label="Menu" size="big" className="MenuButton" onClick={toggleOpen}>
                        <MenuIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </div>

            {
                isOpen && (
                <>
                    <div className="MobileMenu">
                        <div className="Background" onClick={toggleOpen}></div>

                        <div className="Menu">
                            <div className = "MenuTitle">
                                <p>Menu</p>

                                <IconButton aria-label="close" title="Close"  onClick={toggleOpen}>
                                    <CloseIcon/>
                                </IconButton>
                            </div>

                            <div className = "MenuLinks">
                            {
                                buttonLinks.map((link, index) => (
                                    <ActiveButton key={index} href={link.href}>
                                        {link.text}
                                    </ActiveButton>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </>
                )
            }
        </>
    );
}


const NavBar = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 800);
    
    const updateMedia = () => {
        setDesktop(window.innerWidth > 800);
    };
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", updateMedia);
            return () => window.removeEventListener("resize", updateMedia);
        }
    });
    
    return (
        <div>
            {isDesktop ? (
                <DesktopHeader/>
            ) : (
                <MobileHeader/>
            )}
        </div>
    );
}

export default NavBar;