import React from 'react'

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import BoatSlider from './BoatSlider';

import coverImg1 from '../images/boat/sailingBoat/bali/1.jpg';
import coverImg2 from '../images/boat/sailingBoat/bali/2.jpg';
import coverImg3 from '../images/boat/sailingBoat/bali/3.jpg';
import coverImg4 from '../images/boat/sailingBoat/bali/4.jpg';

function BoatBali58() {

    const images = [
        {"coverImgs": coverImg1, "lightBox": 'bali1', "title": 'Bali 5.8'}, 
        {"coverImgs": coverImg2, "lightBox": 'bali2', "title": 'Bali 5.8'},
        {"coverImgs": coverImg3, "lightBox": 'bali3', "title": 'Bali 5.8'},
        {"coverImgs": coverImg4, "lightBox": 'bali4', "title": 'Bali 5.8'}
    ];

    return (
        <>
            <HeadInfo />
            <Nav />
            <div>
                <BackgroundVideo />
                <section className="section" id="about">
                    <div className="section-title">
                        <h2 className="hero-h2">Bali 5.8</h2>
                    </div>
                    <article>
                        {/* <div className="slider">
                            <div className="slides" id="slides">
                                <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/bali/1.jpg"  data-lightbox="bali1" data-title="Bali 5.8">
                                    <img class="slide" src="../images/Sailing-boat/bali/1.jpg" alt="Bali 5.8"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/bali/2.jpg"  data-lightbox="bali2" data-title="Bali 5.8">
                                    <img class="slide" src="../images/Sailing-boat/bali/2.jpg" alt="Bali 5.8"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/bali/3.jpg"  data-lightbox="bali3" data-title="Bali 5.8">
                                    <img class="slide" src="../images/Sailing-boat/bali/3.jpg" alt="Bali 5.8"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/bali/4.jpg"  data-lightbox="bali4" data-title="Bali 5.8">
                                    <img class="slide" src="../images/Sailing-boat/bali/4.jpg" alt="Bali 5.8"></a>
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

export default BoatBali58
