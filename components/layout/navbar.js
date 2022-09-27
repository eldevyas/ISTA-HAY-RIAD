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

    const currentLink = router.asPath;
    const indexOfSlash = currentLink.indexOf('/', 2);

    const Link = indexOfSlash === -1 ? currentLink : currentLink.substring(0, indexOfSlash);

    const currentClass = Link === href ? 'Active' : 'Inactive'  
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

function SwitchTheme(e) {
    var currentTheme = document.documentElement.getAttribute("data-theme");

    // Check if the checkbox is checked
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", document.documentElement.getAttribute("data-theme"));
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", document.documentElement.getAttribute("data-theme"));
    }
};




function DesktopHeader() {
    let isDark = document.documentElement.getAttribute("data-theme") === "dark";

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
                    <div className="Inside">
                        <label className="switch" onClick={(e) => (SwitchTheme(e))}>
                            <input defaultChecked={isDark} type="checkbox"/>
                            <span className="slider"></span>
                        </label>
                    </div>
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

    const closeMenu = (e) => {
        e.preventDefault();
        setIsOpen(false);
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
                        <div className="Inside">
                            <label className="switch" onClick={(e) => (SwitchTheme(e))}>
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                        </div>
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
                        <div className="Background" onClick={closeMenu}></div>

                        <div className="Menu">
                            <div className = "MenuTitle">
                                <p>Menu</p>

                                <IconButton aria-label="close" title="Close" onClick={closeMenu}>
                                    <CloseIcon/>
                                </IconButton>
                            </div>

                            <div className = "MenuLinks" onClick={closeMenu}>
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