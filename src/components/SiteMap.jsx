import React from 'react'
import { Link } from "react-router-dom";

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

function SiteMap() {
  return (
    <>
        <HeadInfo />
        <Nav />   
        <div>
            <BackgroundVideo />

            <section className="sitemap-list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About us</Link></li>
                    <li><Link to="/Rent">Rent yacht</Link></li>
                    <ul>
                        <li><Link to="/Service">Rent yacht Service</Link></li>                        
                        <li><Link to="/Boat">Rent yacht Boat</Link></li>
                    </ul>
                    <li><Link to="/Enquiry">Enquiry</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>                    
                    <li><Link to="/Game">Game</Link></li>
                </ul>
            </section>
        </div>

        <Footer />
    </>
  )
}

export default SiteMap
