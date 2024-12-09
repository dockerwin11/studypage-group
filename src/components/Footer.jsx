import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import footerIcon1 from '../images/footer/wcag2.1AA-v.gif';
import footerIcon2 from '../images/footer/wa_gold_logo.jpg';
import footerIcon3 from '../images/footer/logo_brandhk_en.png';

function Footer() {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <>
            <footer className="section footer">
                <ul className="footer-icons">
                    <li>
                        <a href="tel:31291183" className="footer-icon">
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:erbhk@erb.org?subject=Welcome to ERB Yachting, What can I help you?" className="footer-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/MyERB" className="footer-icon">
                            <i className="fa-brands fa-square-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/captaink_erb/" className="footer-icon">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>

                <ul className="footer-links">
                    {/* <li><a href="#home" className="footer-link">home</a></li> */}
                    {/* <li><a href="./en/about.html" className="footer-link">about us</a></li> */}                    
                    {/* <li><a href="#main" className="footer-link">rent yacht</a></li> */}
                    {/* <li><a href="./en/enquiry.html" className="footer-link">enquiry</a></li> */}
                    {/* <li><a href="./en/contact.html" className="footer-link">contact us</a></li> */}

                    <li><Link to="/" className="footer-link">home</Link></li>
                    <li><Link to="/AboutUs" className="footer-link">about us</Link></li>
                    <li><Link to="/Rent" className="footer-link">rent yacht</Link></li>
                    <li><Link to="/Enquiry" className="footer-link">enquiry</Link></li>
                    <li><Link to="/Contact" className="footer-link">contact us</Link></li>
                </ul>

                <ul className="footer-icons">
                    <li>
                        <a href="https://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank" rel="noreferrer" title="Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.1">
                            <img src={footerIcon1} alt="Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.1" className="footer-icon" id="footer-icon-1" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.digitalpolicy.gov.hk/our_work/digital_government/digital_inclusion/accessibility/nurturing_expertise/" target="_blank" rel="noreferrer" title="Web Accessibility Recognition Scheme">
                            <img src={footerIcon2} alt="Web Accessibility Recognition Scheme" className="footer-icon" id="footer-icon-2" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brandhk.gov.hk/" target="_blank" rel="noreferrer" title="Brand Hong Kong">
                            <img src={footerIcon3} alt="Brand Hong Kong" className="footer-icon" id="footer-icon-3" />
                        </a>
                    </li>
                </ul>
                <p className="copyright">
                    {/* copyright &copy; ERB Yachting all right reserved<span id="date">{currentYear}</span> */}
                    copyright &copy; ERB Yachting all right reserved {currentYear}
                </p>
            </footer>
        </>
  )
}

export default Footer
