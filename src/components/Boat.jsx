import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';
import ServiceList from "./ServiceList";

import { cart, getTotal, updateCart  } from '../script/scriptService';

import boatOffImg1 from '../images/boat/cover1.png';
import boatOnImg1 from '../images/boat/cover1-dark.png';
import boatOffImg2 from '../images/boat/cover2.png';
import boatOnImg2 from '../images/boat/cover2-dark.png';
import boatOffImg3 from '../images/boat/cover3.png';
import boatOnImg3 from '../images/boat/cover3-dark.png';
import boatOffImg4 from '../images/boat/cover4.png';
import boatOnImg4 from '../images/boat/cover4-dark.png';
import boatOffImg5 from '../images/boat/cover5.png';
import boatOnImg5 from '../images/boat/cover5-dark.png';
import boatOffImg6 from '../images/boat/cover6.png';
import boatOnImg6 from '../images/boat/cover6-dark.png';
import boatOffImg7 from '../images/boat/cover7.png';
import boatOnImg7 from '../images/boat/cover7-dark.png';


import data from '../data/inventory.json';

function Boat() {

    const navigate = useNavigate();

    const openTab = () => {
        // Redirect to invoice page
        // window.open("invoice.html", "_blank");
        updateCart();
        getTotal(cart);
        navigate('/Invoice');
    }

    const resetButton = () => {
        // reset the cart list to empty list
        cart.length = 0;
        
        const tempButtons = document.querySelectorAll(".unit p");

        tempButtons.forEach((button) => {
            button.innerText = 0;
        });

        data.services.map((item) => item.quantity = 0);
        
        // Update the cart and the total amount
        updateCart();
        getTotal(cart);
    }

    const handleLinkClick = (event) => {
        event.preventDefault();
        window.open(event.currentTarget.href, '_blank'); 
    };

    return (
        <>
            <HeadInfo />
            <Nav />
            <div>
                <BackgroundVideo /> 

                <section className="section" id="about">
                    <div className="section-title">
                        <h2 className="hero-h2">boat</h2>
                    </div>

                    <article className="boats-info">
                        <div className="boat-flex">
                            <div>
                                {/* <a href="38-Surf.html" target="_blank" className="boat-img-a">
                                    <img className="boat-img-off" src="../images/cover1.png" alt="38 Surf"/>
                                    <img className="boat-img-on"  src="../images/cover1-dark.png" alt="38 Surf"/></a> */}

                                {/* <Link to="/Boat38Surf" target="_blank" className="boat-img-a"> */}
                                <Link to="/Boat38Surf" onClick={handleLinkClick} className="boat-img-a">
                                    <img className="boat-img-off" src={boatOffImg1} alt="38 Surf img off"/>
                                    <img className="boat-img-on"  src={boatOnImg1} alt="38 Surf img on"/> 
                                </Link>

                                {/* <div className="service-1 service"></div> */}
                                <ServiceList itemClass='1' type='boats' />
                            </div>
                            <div>
                                {/* <a href="Regal-LS4.html" target="_blank" className="boat-img-a">
                                    <img className="boat-img-off"  src="../images/cover2.png" alt="Regal LS4"/>
                                    <img className="boat-img-on"  src="../images/cover2-dark.png" alt="Regal LS4"/></a> */}

                                {/* <Link to="/BoatRegalLs4" target="_blank" className="boat-img-a"> */}
                                <Link to="/BoatRegalLs4" onClick={handleLinkClick} className="boat-img-a">
                                    <img className="boat-img-off" src={boatOffImg2} alt="Regal LS4 img off"/>
                                    <img className="boat-img-on"  src={boatOnImg2} alt="Regal LS4 img on"/> 
                                </Link>
                                    
                                {/* <div className="service-2 service"></div> */}
                                <ServiceList itemClass='2' type='boats' />
                            </div>
                            <div>
                                {/* <a href="Regal-42-Fly.html" target="_blank" className="boat-img-a">
                                    <img className="boat-img-off"  src="../images/cover3.png" alt="Regal 42 Fly"/>
                                    <img className="boat-img-on"  src="../images/cover3-dark.png" alt="Regal 42 Fly"/></a> */}

                                {/* <Link to="/BoatRegal42Fly" target="_blank" className="boat-img-a"> */}
                                <Link to="/BoatRegal42Fly" onClick={handleLinkClick} className="boat-img-a">
                                    <img className="boat-img-off" src={boatOffImg3} alt="Regal 42 Fly img off"/>
                                    <img className="boat-img-on"  src={boatOnImg3} alt="Regal 42 Fly img on"/> 
                                </Link>

                                {/* <div className="service-3 service"></div> */}
                                <ServiceList itemClass='3' type='boats' />
                            </div>
                            <div>
                                {/* <a href="Regal-38-Grande.html" target="_blank" className="boat-img-a">
                                    <img className="boat-img-off"  src="../images/cover4.png" alt="Regal 38 Grande"/>
                                    <img className="boat-img-on"  src="../images/cover4-dark.png" alt="Regal 38 Grande"/></a> */}

                                {/* <Link to="/BoatRegal38Grande" target="_blank" className="boat-img-a"> */}
                                <Link to="/BoatRegal38Grande" onClick={handleLinkClick} className="boat-img-a">
                                    <img className="boat-img-off" src={boatOffImg4} alt="Regal 38 Grande img off"/>
                                    <img className="boat-img-on"  src={boatOnImg4} alt="Regal 38 Grande img on"/> 
                                </Link>

                                {/* <div className="service-4 service"></div> */}
                                <ServiceList itemClass='4' type='boats' />
                            </div>
                            <div>
                                {/* <a href="Beneteau-Oceanis-60.html" target="_blank" className="boat-img-a">
                                    <img className="boat-img-off"  src="../images/cover5.png" alt="Beneteau Oceanis 60"/>
                                    <img className="boat-img-on"  src="../images/cover5-dark.png" alt="Beneteau Oceanis 60"/></a> */}

                                {/* <Link to="/BoatBeneteauOceanis60" target="_blank" className="boat-img-a"> */}
                                <Link to="/BoatBeneteauOceanis60" onClick={handleLinkClick} className="boat-img-a">
                                    <img className="boat-img-off" src={boatOffImg5} alt="Beneteau Oceanis 60 img off"/>
                                    <img className="boat-img-on"  src={boatOnImg5} alt="Beneteau Oceanis 60 img on"/> 
                                </Link>

                                {/* <div className="service-5 service"></div> */}
                                <ServiceList itemClass='5' type='boats' />
                            </div>
                            <div>
                                {/* <a href="Oceanco-Black-Pearl.html" target="_blank" className="boat-img-a">
                                    <img className="boat-img-off"  src="../images/cover6.png" alt="Oceanco Black Pearl"/>
                                    <img className="boat-img-on"  src="../images/cover6-dark.png" alt="Oceanco Black Pearl"/></a> */}

                                {/* <Link to="/BoatOceancoBlackPearl" target="_blank" className="boat-img-a"> */}
                                <Link to="/BoatOceancoBlackPearl" onClick={handleLinkClick} className="boat-img-a">
                                    <img className="boat-img-off" src={boatOffImg6} alt="Oceanco Black Pearl img off"/>
                                    <img className="boat-img-on"  src={boatOnImg6} alt="Oceanco Black Pearl img on"/> 
                                </Link>

                                {/* <div className="service-6 service"></div> */}
                                <ServiceList itemClass='6' type='boats' />
                            </div>
                            <div>
                                {/* <a href="Bali-5-8.html" target="_blank" className="boat-img-a">
                                    <img className="boat-img-off"  src="../images/cover7.png" alt="Bali 5.8"/>
                                    <img className="boat-img-on"  src="../images/cover7-dark.png" alt="Bali 5.8"/></a> */}

                                {/* <Link to="/BoatBali58" target="_blank" className="boat-img-a"> */}
                                <Link to="/BoatBali58" onClick={handleLinkClick} className="boat-img-a">
                                    <img className="boat-img-off" src={boatOffImg7} alt="Bali 5.8 img off"/>
                                    <img className="boat-img-on"  src={boatOnImg7} alt="Bali 5.8 img on"/> 
                                </Link>

                                {/* <div className="service-7 service"></div> */}
                                <ServiceList itemClass='7' type='boats' />
                            </div>
                        </div>
                    </article>
                </section>

                <div className="payment-button">
                    <button onClick={resetButton} className="payment-button-reset">Reset</button>
                    <button onClick={openTab} className="payment-button-paid">Payment</button>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Boat
