import React from 'react';
import Header from "../../shared/header/header"
import HeroSection from "./components/heroSection/heroSection"
import AdsList from './components/AdsList/AdsList';
import DhakaCampus from './components/DhakaCampus/DhakaCampus';

const Index = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <AdsList/>
            <DhakaCampus />
        </div>
    );
};

export default Index;