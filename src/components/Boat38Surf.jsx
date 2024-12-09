import React from 'react'

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import BoatSlider from './BoatSlider';

import coverImg1 from '../images/boat/speedBoat/38Surf/1.jpg';
import coverImg2 from '../images/boat/speedBoat/38Surf/2.jpg';
import coverImg3 from '../images/boat/speedBoat/38Surf/3.jpg';
import coverImg4 from '../images/boat/speedBoat/38Surf/4.jpg';
import coverImg5 from '../images/boat/speedBoat/38Surf/5.jpg';


function Boat38Surf() {

    const images = [
        {"coverImgs": coverImg1, "lightBox": '38-Surf1', "title": '38-Surf'}, 
        {"coverImgs": coverImg2, "lightBox": '38-Surf2', "title": '38-Surf'},
        {"coverImgs": coverImg3, "lightBox": '38-Surf3', "title": '38-Surf'},
        {"coverImgs": coverImg4, "lightBox": '38-Surf4', "title": '38-Surf'},
        {"coverImgs": coverImg5, "lightBox": '38-Surf5', "title": '38-Surf'}
    ];

    return (
        <>
            <HeadInfo />
            <Nav />
            <div>
                <BackgroundVideo />
                <section className="section" id="about">
                    <div className="section-title">
                        <h2 className="hero-h2">38-Surf</h2>
                    </div>
                    <article>
                        {/* <div className="slider">
                            <div className="slides" id="slides">
                                <div>
                                    <a className="slide-boat" href="../images/Speed-boat/38-surf/1.jpg" data-lightbox="38-Surf1" data-title="38-Surf">
                                    <img className="slide" src="../images/Speed-boat/38-surf/1.jpg" alt="38 Surf"/></a>
                                </div>
                                <div>
                                    <a className="slide-boat" href="../images/Speed-boat/38-surf/2.jpg" data-lightbox="38-Surf2" data-title="38-Surf">
                                    <img className="slide" src="../images/Speed-boat/38-surf/2.jpg" alt="38 Surf"/></a>
                                </div>
                                <div>
                                    <a className="slide-boat" href="../images/Speed-boat/38-surf/3.jpg" data-lightbox="38-Surf3" data-title="38-Surf">
                                    <img className="slide" src="../images/Speed-boat/38-surf/3.jpg" alt="38 Surf"/></a>
                                </div>
                                <div>
                                    <a className="slide-boat" href="../images/Speed-boat/38-surf/4.jpg" data-lightbox="38-Surf4" data-title="38-Surf">
                                    <img className="slide" src="../images/Speed-boat/38-surf/4.jpg" alt="38 Surf"/></a>
                                </div>
                                <div>
                                    <a className="slide-boat" href="../images/Speed-boat/38-surf/5.jpg" data-lightbox="38-Surf5" data-title="38-Surf">
                                    <img className="slide" src="../images/Speed-boat/38-surf/5.jpg" alt="38 Surf"/></a>
                                </div>
                            </div>
                            <button className="prev" onclick="prevSlide()">&#10094</button>
                            <button className="next" onclick="nextSlide()">&#10095</button>
                        </div> */}

                        <div className="slider">
                            <div className="slides" id="slides">
                                <BoatSlider images={images} />
                            </div>
                        </div>
                        <div className="boat-information-container">
                            <h2 className="boat-information-h2">Information</h2>
                            <p className="boat-information-p">
                                Length: 15m<br />
                                Guests: 10/person<br />
                                Crew: 2/person<br />
                                Cost: HK$5000.00 per day<br /><br />
                                Facilities:<br /><br />
                                Room<br />
                                Restroom<br />
                                Kitchen<br />
                                Air Conditioner<br />
                                TV<br />
                                WiFi
                            </p>
                        </div>
                    </article>
                </section>
            </div>
            
            <Footer />
        </>
    )
}

export default Boat38Surf
