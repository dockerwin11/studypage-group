import React from 'react'
import { Link } from "react-router-dom";

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import serviceOff from '../images/homepage/section/yacht_charter_services.png';
import serviceOn from '../images/homepage/section/yacht_charter_services_dark.png';
import boatOff from '../images/homepage/section/yacht_charter_boat.png';
import boatOn from '../images/homepage/section/yacht_charter_boat_dark.png';

// import '../css/style.css';

function Rent() {
    return (
        <>
            <HeadInfo />
            <Nav />  
            <div>
                <BackgroundVideo />

                <section className="section" id="main" >
                    <div className="section-title">
                        <h2>rent yacht</h2> 
                    </div>
                    <div className="section-center main-center">
                        <article className="main-card">
                            <div className="main-img-container">
                                <div>
                                    <Link to="/Service" className="service-heading" title="service">
                                        <img className="service-heading-img-off" src={serviceOff} alt="service img off" />
                                        <img className="service-heading-img-on" src={serviceOn} alt="service img on" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                        <article className="main-card">
                            <div className="main-img-container">
                                <div>
                                    <Link to="/Boat" className="boat-heading" title="boat">
                                        <img className="boat-heading-img-off" src={boatOff} alt="boat img off" />
                                        <img className="boat-heading-img-on" src={boatOn} alt="boat img on" />
                                    </Link>
                                </div>                   
                            </div>
                        </article>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Rent
