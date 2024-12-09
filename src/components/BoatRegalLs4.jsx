import React from 'react'

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import BoatSlider from './BoatSlider';

import coverImg1 from '../images/boat/speedBoat/regalLs4/1.jpg';
import coverImg2 from '../images/boat/speedBoat/regalLs4/2.jpg';
import coverImg3 from '../images/boat/speedBoat/regalLs4/3.jpg';
import coverImg4 from '../images/boat/speedBoat/regalLs4/4.jpg';


function BoatRegalLs4() {

    const images = [
        {"coverImgs": coverImg1, "lightBox": 'regal-LS41', "title": 'Regal LS4'}, 
        {"coverImgs": coverImg2, "lightBox": 'regal-LS42', "title": 'Regal LS4'},
        {"coverImgs": coverImg3, "lightBox": 'regal-LS43', "title": 'Regal LS4'},
        {"coverImgs": coverImg4, "lightBox": 'regal-LS44', "title": 'Regal LS4'}
        
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
                                <a class="slide-boat" href="../images/Speed-boat/regal-LS4/1.jpg"  data-lightbox="regal-LS41" data-title="Regal LS4">
                                <img class="slide" src="../images/Speed-boat/regal-LS4/1.jpg" alt="Regal LS4"></a>
                            </div>
                                <div><a class="slide-boat" href="../images/Speed-boat/regal-LS4/2.jpg"  data-lightbox="regal-LS42" data-title="Regal LS4">
                                <img class="slide" src="../images/Speed-boat/regal-LS4/2.jpg" alt="Regal LS4"></a>
                            </div>
                                <div><a class="slide-boat" href="../images/Speed-boat/regal-LS4/3.jpg"  data-lightbox="regal-LS43" data-title="Regal LS4">
                                <img class="slide" src="../images/Speed-boat/regal-LS4/3.jpg" alt="Regal LS4"></a>
                            </div>
                                <div><a class="slide-boat" href="../images/Speed-boat/regal-LS4/4.jpg"  data-lightbox="regal-LS44" data-title="Regal LS4">
                                <img class="slide" src="../images/Speed-boat/regal-LS4/4.jpg" alt="Regal LS4"></a>
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
                            Length: 15m<br />
                            Guests: 20/person<br />
                            Crew: 2/person<br />
                            Cost: HK$5000.00 per day<br /><br />
                            Facilities:<br /><br />
                            2 Room<br />
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

export default BoatRegalLs4
