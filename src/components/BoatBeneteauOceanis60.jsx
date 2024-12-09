import React from 'react'

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import BoatSlider from './BoatSlider';

import coverImg1 from '../images/boat/sailingBoat/oceanis60/1.jfif';
import coverImg2 from '../images/boat/sailingBoat/oceanis60/2.jfif';
import coverImg3 from '../images/boat/sailingBoat/oceanis60/3.jfif';
import coverImg4 from '../images/boat/sailingBoat/oceanis60/4.jfif';

function BoatBeneteauOceanis60() {

    const images = [
        {"coverImgs": coverImg1, "lightBox": 'oceanis601', "title": 'Beneteau Oceanis 60'}, 
        {"coverImgs": coverImg2, "lightBox": 'oceanis602', "title": 'Beneteau Oceanis 60'},
        {"coverImgs": coverImg3, "lightBox": 'oceanis603', "title": 'Beneteau Oceanis 60'},
        {"coverImgs": coverImg4, "lightBox": 'oceanis604', "title": 'Beneteau Oceanis 60'}
    ];

    return (
        <>
            <HeadInfo />
            <Nav />
            <div>
                <BackgroundVideo />
                <section className="section" id="about">
                    <div className="section-title">
                        <h2 className="hero-h2">Beneteau Oceanis 60</h2>
                    </div>
                    <article>
                        {/* <div className="slider">
                            <div class="slides" id="slides">
                                <div>
                                    <a class="slide-boat" href="../images/Sailing-boat/oceanis60/1.jfif"  data-lightbox="oceanis601" data-title="Beneteau Oceanis 60">
                                    <img class="slide" src="../images/Sailing-boat/oceanis60/1.jfif" alt="Beneteau Oceanis 60"></a>
                                </div>
                                    <div><a class="slide-boat" href="../images/Sailing-boat/oceanis60/2.jfif"  data-lightbox="oceanis602" data-title="Beneteau Oceanis 60">
                                    <img class="slide" src="../images/Sailing-boat/oceanis60/2.jfif" alt="Beneteau Oceanis 60"></a>
                                </div>
                                    <div><a class="slide-boat" href="../images/Sailing-boat/oceanis60/3.jfif"  data-lightbox="oceanis603" data-title="Beneteau Oceanis 60">
                                    <img class="slide" src="../images/Sailing-boat/oceanis60/3.jfif" alt="Beneteau Oceanis 60"></a>
                                </div>
                                    <div><a class="slide-boat" href="../images/Sailing-boat/oceanis60/4.jfif"  data-lightbox="oceanis604" data-title="Beneteau Oceanis 60">
                                    <img class="slide" src="../images/Sailing-boat/oceanis60/4.jfif" alt="Beneteau Oceanis 60"></a>
                                </div>
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

export default BoatBeneteauOceanis60
