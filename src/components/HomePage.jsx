import React from 'react'

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import HomePageHero from './HomePageHero';
import HomePageSec from './HomePageSec';
import Footer from './Footer';

import '../css/style.css';
import '../css/slider.css';


function Homepage() {
    return (
        <>
            <HeadInfo />
            <Nav />  
            <HomePageHero />
            <HomePageSec />
            <Footer />
        </>
    )
}

export default Homepage;