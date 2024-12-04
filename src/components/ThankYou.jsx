import React from 'react'
import { Link } from "react-router-dom";

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import '../css/style.css';
import '../css/thank.css';

function ThankYou() {
    return (
        <>
            <HeadInfo />
            <Nav />  
            <div>
                <BackgroundVideo />
                <section className="section" id="about">
                    <div className="section-title">
                        <h2 className="hero-h2">Enquiry</h2>
                    </div>
                    <article className="thank-info">
                        <h3 className="thank-you-h2">Thank <span>you!!!</span></h3>
                        <i className="fa fa-check"></i>
                        <p className="thank-you-p">Thank you for your question, we would as soon as reply you.</p>
                        {/* <a href="../en/index.html" className="thank-you-a">Back to Home Page</a> */}
                        <Link to="/" className="thank-you-a">Back to Home Page</Link>
                    </article>
                </section>
            </div>
        <Footer />
        </>
    )
}

export default ThankYou
