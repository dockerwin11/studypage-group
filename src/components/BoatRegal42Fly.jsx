import React from 'react'

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import BoatSlider from './BoatSlider';

import coverImg1 from '../images/boat/motorBoat/42Fly/1.jpg';
import coverImg2 from '../images/boat/motorBoat/42Fly/2.jpg';
import coverImg3 from '../images/boat/motorBoat/42Fly/3.jpg';
import coverImg4 from '../images/boat/motorBoat/42Fly/4.jpg';
import coverImg5 from '../images/boat/motorBoat/42Fly/5.jpg';

function BoatRegal42Fly() {

    const images = [
        {"coverImgs": coverImg1, "lightBox": '42-fly1', "title": 'Regal 42 Fly'}, 
        {"coverImgs": coverImg2, "lightBox": '42-fly2', "title": 'Regal 42 Fly'},
        {"coverImgs": coverImg3, "lightBox": '42-fly3', "title": 'Regal 42 Fly'},
        {"coverImgs": coverImg4, "lightBox": '42-fly4', "title": 'Regal 42 Fly'},
        {"coverImgs": coverImg5, "lightBox": '42-fly5', "title": 'Regal 42 Fly'}
    ];

    return (
        <>
            <HeadInfo />
            <Nav />
            <div>
                <BackgroundVideo />
                <section className="section" id="about">
                    <div className="section-title">
                        <h2 className="hero-h2">Regal 42 Fly</h2>
                    </div>
                    <article>
                        {/* <div className="slider">
                            <div className="slides" id="slides">
                                <div>
                                    <a class="slide-boat" href="../images/Motor-boat/42-fly/1.jpg"  data-lightbox="42-fly1" data-title="Regal 42 Fly">
                                    <img class="slide" src="../images/Motor-boat/42-fly/1.jpg" alt="Regal 42 Fly"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Motor-boat/42-fly/2.jpg"  data-lightbox="42-fly2" data-title="Regal 42 Fly">
                                    <img class="slide" src="../images/Motor-boat/42-fly/2.jpg" alt="Regal 42 Fly"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Motor-boat/42-fly/3.jpg"  data-lightbox="42-fly3" data-title="Regal 42 Fly">
                                    <img class="slide" src="../images/Motor-boat/42-fly/3.jpg" alt="Regal 42 Fly"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Motor-boat/42-fly/4.jpg"  data-lightbox="42-fly4" data-title="Regal 42 Fly">
                                    <img class="slide" src="../images/Motor-boat/42-fly/4.jpg" alt="Regal 42 Fly"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Motor-boat/42-fly/5.jpg"  data-lightbox="42-fly5" data-title="Regal 42 Fly">
                                    <img class="slide" src="../images/Motor-boat/42-fly/5.jpg" alt="Regal 42 Fly"></a>
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
                            <p  class="boat-information-p">
                                Length: 10m<br />
                                Guests: 7/person<br />
                                Crew: 1/person<br />
                                Cost: HK$5000.00 per day<br /><br />
                                Facilities:<br /><br />
                                Restroom<br />
                                Sound System
                            </p>
                        </div>
                    </article>
                </section>
            </div>
            
            <Footer />
        </>
    )
}

export default BoatRegal42Fly
