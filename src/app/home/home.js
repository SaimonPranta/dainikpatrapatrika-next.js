import React from 'react';
import Header from "@/shared/components/header/header"
import HeroSection from "./components/heroSection/heroSection"
import AdsList from './components/AdsList/AdsList';
import International from './components/International/International';
import VideoGallery from './components/VideoGallery/VideoGallery';
import SportsAndDebate from './components/SportsAndDebate/SportsAndDebate';
import Footer from '@/shared/components/Footer/Footer';

const Index = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <AdsList/>
            <International />
            <VideoGallery />
            <SportsAndDebate />
            <Footer />
        </div>
    );
};

export default Index;