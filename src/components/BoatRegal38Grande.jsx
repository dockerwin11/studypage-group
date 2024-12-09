import React from 'react'

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import BoatSlider from './BoatSlider';

import coverImg1 from '../images/boat/motorBoat/38Grande/1.jpg';
import coverImg2 from '../images/boat/motorBoat/38Grande/2.jpg';
import coverImg3 from '../images/boat/motorBoat/38Grande/3.jpg';
import coverImg4 from '../images/boat/motorBoat/38Grande/4.jpg';
import coverImg5 from '../images/boat/motorBoat/38Grande/5.jpg';

function BoatRegal38Grande() {

    const images = [
        {"coverImgs": coverImg1, "lightBox": '38grande1', "title": 'Regal 38 Grande'}, 
        {"coverImgs": coverImg2, "lightBox": '38grande2', "title": 'Regal 38 Grande'},
        {"coverImgs": coverImg3, "lightBox": '38grande3', "title": 'Regal 38 Grande'},
        {"coverImgs": coverImg4, "lightBox": '38grande4', "title": 'Regal 38 Grande'},
        {"coverImgs": coverImg5, "lightBox": '38grande5', "title": 'Regal 38 Grande'}
    ];

    return (
        <>
            <HeadInfo />
            <Nav />
            <div>
                <BackgroundVideo />
                <section className="section" id="about">
                    <div className="section-title">
                        <h2 className="hero-h2">Regal 38 Grande</h2>
                    </div>
                    <article>
                        {/* <div className="slider">
                            <div className="slides" id="slides">
                                <div>
                                    <a class="slide-boat" href="../images/Motor-boat/38-grande/1.jpg"  data-lightbox="38-grande1" data-title="Regal 38 Grande">
                                    <img class="slide" src="../images/Motor-boat/38-grande/1.jpg" alt="Regal 38 Grande"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Motor-boat/38-grande/2.jpg"  data-lightbox="38-grande2" data-title="Regal 38 Grande">
                                    <img class="slide" src="../images/Motor-boat/38-grande/2.jpg" alt="Regal 38 Grande"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Motor-boat/38-grande/3.jpg"  data-lightbox="38-grande3" data-title="Regal 38 Grande">
                                    <img class="slide" src="../images/Motor-boat/38-grande/3.jpg" alt="Regal 38 Grande"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Motor-boat/38-grande/4.jpg"  data-lightbox="38-grande4" data-title="Regal 38 Grande">
                                    <img class="slide" src="../images/Motor-boat/38-grande/4.jpg" alt="Regal 38 Grande"></a>
                                </div>
                                <div>
                                    <a class="slide-boat" href="../images/Motor-boat/38-grande/5.jpg"  data-lightbox="38-grande5" data-title="Regal 38 Grande">
                                    <img class="slide" src="../images/Motor-boat/38-grande/5.jpg" alt="Regal 38 Grande"></a>
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
                            <p class="boat-information-p">
                                Length: 25m<br />
                                Guests: 10/person<br />
                                Crew: 3/person<br />
                                Cost: HK$8000.00 per day<br /><br />
                                Facilities:<br /><br />
                                3 Room<br />
                                2 Restroom<br />
                                Kitchen<br />
                                Air conditioner<br />
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

export default BoatRegal38Grande
