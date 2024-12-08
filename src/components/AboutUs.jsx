import React from 'react'

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';


import aboutImg from '../images/about/about.png';

// import '../css/style.css';
// import '../css/about.css';

function AboutUs() {
  return (
    <>
        <HeadInfo />
        <Nav />    
        <div>
            <BackgroundVideo />
            <section className="section" id="about">
                <div className="section-title">
                    <h2>about us</h2>
                </div>
                <div className="section-center about-center">
                    <div className="about-img">
                        <img src={aboutImg} className="about-photo" alt="awesome landscape" />
                    </div>
                    <article className="about-info">
                        <p className="paragraph">Welcome to the world of ERB Yachting – an ocean journey that combines luxury and freedom. Since our establishment, we have gone through ten years and have always been committed to providing customers with excellent yacht charter services. Whether you want to enjoy a stunning sunset with your clients or spend a romantic evening under the bright lights with your best friends on Victoria Harbour, our yachts can perfectly meet your needs.</p>
                        <p className="paragraph">At ERB Yachting, we understand that every trip out to sea is a unique experience. Therefore, we offer a wide range of yachts, from mid-sized Western-style yachts to luxury catamarans, all available for charter. Our services are not limited to short-term hourly rentals, but also provide daily rental options, allowing you and your family or business partners to go to a hidden bay to enjoy a night of tranquility and comfort, or engage in team-building activities to promote mutual cooperation and communication.</p>
                        <p className="paragraph">Our commitment is not only to provide first-className yachts, but also to ensure the safety and satisfaction of every customer. We are proud to hold ISO 22876:2021 certification, which is recognition of the high standards we adhere to in the yacht charter industry. This certification not only reflects our pursuit of service quality, but also demonstrates our professionalism in the field of tourism and related services.</p>
                        <p className="paragraph">ERB Yachting is not only a rental platform, but also a place where you can create beautiful memories. Our team is composed of professional staff who love the ocean. They will wholeheartedly provide you with personalized service to ensure that each of your sea journeys is full of pleasure and surprises.</p>
                        <p className="paragraph">Whatever your needs, ERB Yacht Charter will be the ideal choice for you. We look forward to exploring the boundless ocean with you and creating your own wonderful moments.</p>
                    </article>
                </div>
            </section>
        </div>
        <Footer />
    </>
  )
}

export default AboutUs
