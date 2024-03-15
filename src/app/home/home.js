import React from 'react';
import Header from "../../shared/header/header"
import HeroSection from "./components/heroSection/heroSection"
import AdsList from './components/AdsList/AdsList';
import DhakaCampus from './components/DhakaCampus/DhakaCampus';
import VideoGallery from './components/VideoGallery/VideoGallery';
import Sports from './components/SportsAndDebate/SportsAndDebate';

const Index = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <AdsList/>
            <DhakaCampus />
            <VideoGallery />
            <Sports />
        </div>
    );
};

export default Index;