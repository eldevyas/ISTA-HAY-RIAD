import React from 'react';
import Header from './interface/header';
import SecondSection from './interface/secondSection';
import SectionFormations from './interface/formations';

export default function Home() {
    return(
        <div className="Home">
            <Header/>
            <SecondSection />
            <SectionFormations />
        </div>
    );
}