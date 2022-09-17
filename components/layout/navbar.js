import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

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
                    <Button className="ButtonGrouped">Accueil</Button>
                    <Button className="ButtonGrouped">à propos</Button>
                    <Button className="ButtonGrouped">Formations</Button>
                    <Button className="ButtonGrouped">Actualités</Button>
                    <Button className="ButtonGrouped">Espace Stagiaires</Button>
                    <Button className="ButtonGrouped">Contact</Button>
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

                    </div>
                </>
                )
            }
        </>
    );
}


const NavBar = () => {
    const [isDesktop, setDesktop] = useState(false);
    
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