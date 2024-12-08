import React from 'react'
import { Link } from "react-router-dom";

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

// import '../css/style.css';
// import '../css/about.css';
// import '../css/contact.css';

function Contact() {
    return (
        <>
            <HeadInfo />
            <Nav />  
            <div>
                <BackgroundVideo />

                {/* <!-- contact --> */}
                <section className="section" id="about">
                    <div className="section-title">
                        <h2>Open <span>Hours</span></h2>
                    </div>

                    <div className="table-center">
                        <article className="about-info">
                            <table>
                                <tbody>
                                    <tr >
                                        <th >Week</th>
                                        <th >Time</th>
                                    </tr>
                                    <tr >
                                        <td >Sunday</td>
                                        <td >Closed</td>
                                    </tr>
                                    <tr >
                                        <td >Monday</td>
                                        <td >9 a.m. to 5p.m.</td>
                                    </tr>
                                    <tr >
                                        <td >Tuesday</td>
                                        <td >9 a.m. to 5p.m.</td>
                                    </tr>
                                    <tr >
                                        <td >Wednesday</td>
                                        <td >9 a.m. to 5p.m.</td>
                                    </tr>
                                    <tr >
                                        <td >Thursday</td>
                                        <td >9 a.m. to 5p.m.</td>
                                    </tr>
                                    <tr >
                                        <td >Friday</td>
                                        <td >9 a.m. to 5p.m.</td>
                                    </tr>
                                    <tr >
                                        <td >Saturday</td>
                                        <td >10 a.m. to 2p.m.</td>
                                    </tr>
                                    <tr >
                                        <td >Public Holidays</td>
                                        <td >Closed</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7382.397686987232!2d114.2234344310752!3d22.308318401850837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040143fee1e02f%3A0xe6489affb46b486!2z6aaZ5riv6KeA5aGY5qau5qWt6KGX6KeA5aGY5rih6Lyq56K86aCt!5e0!3m2!1szh-TW!2sus!4v1730213365021!5m2!1szh-TW!2sus" class="iframe" width="600" height="500" style="order:0;" allowfullscreen="" loading="lazy"></iframe> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7382.397686987232!2d114.2234344310752!3d22.308318401850837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040143fee1e02f%3A0xe6489affb46b486!2z6aaZ5riv6KeA5aGY5qau5qWt6KGX6KeA5aGY5rih6Lyq56K86aCt!5e0!3m2!1szh-TW!2sus!4v1730213365021!5m2!1szh-TW!2sus" className="iframe" title="map" width="600" height="500" style={{ order: 0 }} allowFullScreen="" loading="lazy"></iframe>
                            

                            <p className="address"><strong>Our Location:</strong></p>
                            <p className="address">Kwun Tong Ferry Pier</p>

                            {/* <span><a class="back-to-top" href="#Top">Back to Top</a></span> */}
                            <span><Link to="#about" className="back-to-top">Back to Contact</Link></span>
                        </article>
                    </div>            
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Contact
