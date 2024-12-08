import React from 'react'
import { useNavigate } from 'react-router-dom';

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';
import ServiceList from "./ServiceList";

import { cart, getTotal, updateCart  } from '../script/scriptService';

import serviceImg1 from '../images/event/dj_onboard.jpg';
import serviceImg2 from '../images/event/water_toy.jpg';
import serviceImg3 from '../images/event/catering_onboard.jpg';
import serviceImg4 from '../images/event/asian_style.jpg';
import serviceImg5 from '../images/event/mediterranean_style.png';
import serviceImg6 from '../images/event/continental_style.jpg';

import data from '../data/inventory.json';

// import '../css/style.css';

function Service() {

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

    return (
        <>
            <HeadInfo />
            <Nav />  
            {/* <!-- Start Main-Container --> */}
            <div className="main-container">
                <BackgroundVideo />

                {/* <!-- dj-onboard --> */}
                <div className="service-event">
                    <div className="service-img">
                        <figure>
                            <img src={serviceImg1} alt="DJ_onboard" className="service-img-resize" />
                            <figcaption>DJ OnBoard Service</figcaption>
                        </figure>
                    </div>
                    <div className="service-content">
                        <div>
                            <b>DJ Onboard</b>          
                            <p>
                                Experience the ultimate fusion of music and nature with our DJ on the boat service. 
                                As our lively DJ spins your favorite beats on deck, you'll be surrounded by the stunning backdrop of the sea. 
                                This isn't just a tour; it's a musical voyage that promises to create unforgettable memories. 
                                Dance under the open sky, feel the rhythm of the waves, and let the music take you on a journey like no other.
                            </p>
                        </div>
                        {/* <div className="service-1 service"><ServiceList itemClass='1' /></div> */}
                        <ServiceList itemClass='1' type='services' />
                        
                    </div>
                </div>

                {/* <!-- water-toy --> */}
                <div className="service-event"> 
                    <div className="service-img">
                        <figure >
                            <img src={serviceImg2} alt="water_toy" className="service-img-resize" />
                            <figcaption>Water Toy Service</figcaption>
                        </figure>
                    </div>
                    <div className="service-content">
                        <div>
                            <b>Water Toys Set</b>
                            <p> 
                                Elevate your aquatic adventure with our exclusive add-on option of water toys.
                                Dive into the crystal-clear waters with our top-notch snorkeling equipment, glide across the waves on floating bed,
                                floating board, and enjoy endless laughter with our exciting inflatables. 
                                We also provide fresh towels to ensure your comfort throughout the day. 
                                Whether you're exploring underwater wonders or simply basking in the sun, 
                                our water toys guarantee moments of fun and unforgettable memories for everyone.
                            </p>
                        </div>
                        {/* <div className="service-2 service"></div> */}
                        <ServiceList itemClass='2' type='services' />
                    </div>
                </div>

                {/* <!-- catering-onboard --> */}
                <div className="service-event">
                    <div className="service-img">
                        <figure>
                            <img src={serviceImg3} alt="catering_onboard" className="service-img-resize" />
                            <figcaption>Catering Onboard Service</figcaption>
                        </figure>
                    </div>
                    <div className="service-content">
                        <div>
                            <b>Catering Onboard</b>
                            <p> 
                                Immerse yourself in a culinary journey with our onboard catering service.
                                Our yacht buffet experience is bursting with energy, aromas, and flavors, transporting you to the world's local markets.
                                Focusing on both Asian and Western cuisine, our diverse menu offers something for every palate. 
                            </p>
                        </div>
                        {/* <div className="service-3 service"></div> */}
                        <ServiceList itemClass='3' type='services' />
                    </div>
                </div>

                {/* <!-- asian-style --> */}
                <div className="service-event"> 
                    <div className="service-img">
                        <figure>
                            <img src={serviceImg4} alt="asian_style" className="service-img-resize" />
                            <figcaption>Asian Flavors</figcaption>
                        </figure>
                    </div>
                    <div className="service-content">
                        <div>
                            <b>Asian Flavors</b>
                            <ul> 
                                <li>Sushi Platter</li>
                                <li>Thai Tom Yum Soup</li>
                                <li>Peking Duck</li>
                                <li>Indian Chicken Curry</li>
                                <li>Korean BBQ</li>
                                <li>Vietnamese Spring Rolls</li>
                                <li>Mapo Tofu</li>
                            </ul>
                        </div>
                        {/* <div className="service-4 service"></div> */}
                        <ServiceList itemClass='4' type='services' />
                    </div>
                </div>

                {/* <!-- mediterranean-style --> */}
                <div className="service-event"> 
                    <div className="service-img">
                        <figure>
                            <img src={serviceImg5} alt="mediterranean_style" className="service-img-resize" />
                            <figcaption>Mediterranean Style</figcaption>
                        </figure>
                    </div>
                    <div className="service-content">
                        <div>
                            <b>Mediterranean Style</b>
                            <ul> 
                                <li>Greek Salad</li>
                                <li>Spanish Paella</li>
                                <li>Italian Baked Eggplant</li>
                                <li>Moroccan Lamb Stew</li>
                                <li>Turkish Kebab</li>
                                <li>Mediterranean Grilled Fish</li>
                                <li>Sicilian Lemon Cake</li>
                            </ul>
                        </div>
                        {/* <div className="service-5 service"></div> */}
                        <ServiceList itemClass='5' type='services' />
                    </div>
                </div>

                {/* <!-- continental-style --> */}
                <div className="service-event"> 
                    <div className="service-img">
                        <figure>
                            <img src={serviceImg6} alt="continental_style" className="service-img-resize" />
                            <figcaption>Continental Style</figcaption>            
                        </figure>
                    </div>
                    <div className="service-content">
                        <div>
                            <b>Continental Style</b>
                            <ul> 
                                <li>Continental Style</li>
                                <li>French Onion Soup</li>
                                <li>Caesar Salad</li>
                                <li>Pan-Seared Foie Gras</li>
                                <li>Grilled Ribeye Steak</li>
                                <li>Creamy Mushroom Pasta</li>
                                <li>Chocolate Lava Cake</li>
                                <li>Tiramisu</li>
                            </ul>
                        </div>
                        {/* <div className="service-6 service"></div> */}
                        <ServiceList itemClass='6' type='services' />
                    </div>        
                </div>

                <div className="payment-button">
                    <button onClick={resetButton} className="payment-button-reset">Reset</button>
                    <button onClick={openTab} className="payment-button-paid">Payment</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Service
