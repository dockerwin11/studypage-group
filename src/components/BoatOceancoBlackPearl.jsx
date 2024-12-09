import React from 'react'

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import BoatSlider from './BoatSlider';

import coverImg1 from '../images/boat/sailingBoat/obp/1.jpeg';
import coverImg2 from '../images/boat/sailingBoat/obp/2.jpeg';
import coverImg3 from '../images/boat/sailingBoat/obp/3.jpeg';
import coverImg4 from '../images/boat/sailingBoat/obp/4.jpeg';
import coverImg5 from '../images/boat/sailingBoat/obp/5.jpeg';
import coverImg6 from '../images/boat/sailingBoat/obp/6.jpeg';
import coverImg7 from '../images/boat/sailingBoat/obp/7.jpeg';

function BoatOceancoBlackPearl() {

    const images = [
        {"coverImgs": coverImg1, "lightBox": 'obp1', "title": 'Oceanco-Black-Pearl'}, 
        {"coverImgs": coverImg2, "lightBox": 'obp2', "title": 'Oceanco-Black-Pearl'},
        {"coverImgs": coverImg3, "lightBox": 'obp3', "title": 'Oceanco-Black-Pearl'},
        {"coverImgs": coverImg4, "lightBox": 'obp4', "title": 'Oceanco-Black-Pearl'},
        {"coverImgs": coverImg5, "lightBox": 'obp5', "title": 'Oceanco-Black-Pearl'},
        {"coverImgs": coverImg6, "lightBox": 'obp6', "title": 'Oceanco-Black-Pearl'},
        {"coverImgs": coverImg7, "lightBox": 'obp7', "title": 'Oceanco-Black-Pearl'}
    ];

    return (
        <>
            <HeadInfo />
            <Nav />
            <div>
                <BackgroundVideo />
                <section className="section" id="about">
                    <div className="section-title">
                        <h2 className="hero-h2">Oceanco-Black-Pearl</h2>
                    </div>
                    <article>
                        {/* <div className="slider">
                            <div className="slides" id="slides">
                                 <div class="slides" id="slides">
                                    <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/obp/1.jpeg"  data-lightbox="obp1" data-title="Oceanco-Black-Pearl">
                                    <img class="slide" src="../images/Sailing-boat/obp/1.jpeg" alt="Oceanco-Black-Pearl"></a></div>
                                    <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/obp/2.jpeg"  data-lightbox="obp2" data-title="Oceanco-Black-Pearl">
                                    <img class="slide" src="../images/Sailing-boat/obp/2.jpeg" alt="Oceanco-Black-Pearl"></a></div>
                                    <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/obp/3.jpeg"  data-lightbox="obp3" data-title="Oceanco-Black-Pearl">
                                    <img class="slide" src="../images/Sailing-boat/obp/3.jpeg" alt="Oceanco-Black-Pearl"></a></div>
                                    <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/obp/4.jpeg"  data-lightbox="obp4" data-title="Oceanco-Black-Pearl">
                                    <img class="slide" src="../images/Sailing-boat/obp/4.jpeg" alt="Oceanco-Black-Pearl"></a></div>
                                    <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/obp/5.jpeg"  data-lightbox="obp5" data-title="Oceanco-Black-Pearl">
                                    <img class="slide" src="../images/Sailing-boat/obp/5.jpeg" alt="Oceanco-Black-Pearl"></a></div>
                                    <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/obp/6.jpeg"  data-lightbox="obp6" data-title="Oceanco-Black-Pearl">
                                    <img class="slide" src="../images/Sailing-boat/obp/6.jpeg" alt="Oceanco-Black-Pearl"></a></div>
                                    <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/obp/7.jpeg"  data-lightbox="obp7" data-title="Oceanco-Black-Pearl">
                                    <img class="slide" src="../images/Sailing-boat/obp/7.jpeg" alt="Oceanco-Black-Pearl"></a></div>
                                </div>
                                <button class="prev" onclick="prevSlide()">&#10094</button>
                                <button class="next" onclick="nextSlide()">&#10095</button>
                        </div> */}

                        <div className="slider">
                            <div className="slides" id="slides">
                                <BoatSlider images={images} />
                            </div>
                        </div>
                        <div className="boat-information-container">
                            <h2 className="boat-information-h2">Information</h2>
                            <p class="boat-information-p">
                                Length: 25m<br />
                                Guests: 12/person<br />
                                Crew: 3/person<br />
                                Cost: HK$8000.00 per day<br /><br />
                                Facilities:<br /><br />
                                4 Room<br />
                                2 Restroom<br />
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

export default BoatOceancoBlackPearl
