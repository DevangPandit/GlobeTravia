import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trending from '../components/Trending';
import Destinations from '../components/Destinations';
import BestPackages from '../components/BestPackages';
import VideoTour from '../components/VideoTour';
import Reviews from '../components/Reviews';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "50px",
            origin: "bottom",
            duration: 1000,
        });

        sr.reveal('.header_div h1', {});
        sr.reveal('.header_form', { delay: 500 });
        sr.reveal('.destination_card', { interval: 300 });
        sr.reveal('.reviews_card', { interval: 300 });
    }, []);

    return (
        <div>
            <Navbar />
            <Hero />
            <Trending />
            <Destinations />
            <BestPackages />
            <VideoTour />
            <Reviews />
            <JoinUs />
            <Footer />
        </div>
    );
};

export default Home;
