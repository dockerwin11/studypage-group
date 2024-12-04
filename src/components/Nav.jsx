import React, { useState } from 'react';
import { Link } from "react-router-dom";

import erbLogo from "../images/nav/erb_logo.png";

function Nav() {

    const [navActive, setNavActive] = useState(false);

    const [isHoveredGameIcon, setIsHoveredGameIcon] = useState(false);
    const [isHoveredSiteIcon, setIsHoveredSiteIcon] = useState(false);

    const HoveredGameIcon = () => {
        setIsHoveredGameIcon(!isHoveredGameIcon);
    };

    const HoveredSiteIcon = () => {
        setIsHoveredSiteIcon(!isHoveredSiteIcon);
    };
    
    const toggleNav = () => {
        setNavActive(!navActive);
    };
    
    return (
        <>
        <nav className="navbar">
            <div className="nav-logo">
                {/* <a href="index.html"><img src={erbLogo} className="logo-link" alt="logo" /></a> */}
                <Link to="/"><img src={erbLogo} className="logo-link" alt="logo" /></Link>
            </div>
            <div className="nav-links">
                <ul className="nav-list" id="nav-list">
                    {/* <li><a href="#home" className="nav-link">home</a></li> */}
                    {/* <li><a href="./en/about.html" className="nav-link">about us</a></li> */}
                    {/* <li><a href="#main" className="nav-link">rent yacht</a></li> */}
                    {/* <li><a href="./en/enquiry.html" className="nav-link">enquiry</a></li> */}
                    {/* <li><a href="./en/contact.html" className="nav-link">contact us</a></li> */}

                    <li><Link to="/" className="nav-link">home</Link></li>
                    <li><Link to="/AboutUs" className="nav-link">about us</Link></li>
                    <li><Link to="/Rent" className="nav-link">rent yacht</Link></li>
                    <li><Link to="/Enquiry" className="nav-link">enquiry</Link></li>
                    <li><Link to="/Contact" className="nav-link">contact us</Link></li>
                </ul>
            </div>
            <div className="nav-icons">
                <ul className="nav-icons-list">
                    <li>
                        {/* <a href="./en/game.html" title="game" className="nav-icon" onMouseEnter={HoveredGameIcon} onMouseLeave={HoveredGameIcon}>
                            <i className={isHoveredGameIcon ? "fa-solid fa-gamepad fa-2xs fa-flip" : "fa-solid fa-gamepad fa-2xs"} id="mark-3"></i>
                        </a> */}

                        <Link to="/Game" title="game" className="nav-icon" onMouseEnter={HoveredGameIcon} onMouseLeave={HoveredGameIcon}>
                            <i className={isHoveredGameIcon ? "fa-solid fa-gamepad fa-2xs fa-flip" : "fa-solid fa-gamepad fa-2xs"} id="mark-3"></i>
                        </Link>
                    </li>
                    <li>
                        {/* <a href="./en/sitemap.html" title="sitemap" className="nav-icon" onMouseEnter={HoveredSiteIcon} onMouseLeave={HoveredSiteIcon}>
                            <i className={isHoveredSiteIcon ? "fa-solid fa-sitemap fa-flip" : "fa-solid fa-sitemap"} id="mark-1"></i>
                        </a> */}

                        <Link to="/SiteMap" title="sitemap" className="nav-icon" onMouseEnter={HoveredSiteIcon} onMouseLeave={HoveredSiteIcon}>
                            <i className={isHoveredSiteIcon ? "fa-solid fa-sitemap fa-flip" : "fa-solid fa-sitemap"} id="mark-1"></i>
                        </Link>
                    </li>
                    <li>
                        <div className="nav-language">
                            <button type="button" aria-label="lang" className="nav-language-toggle" id="nav-language-toggle">
                                <i className="fa-solid fa-language" id="mark-2"></i>
                            </button>
                            <ul className="language-nav-list" id="language-nav-list">
                                <li><a href="./tc/index.html" className="language-nav-link" title="繁體中文">繁體中文</a></li>
                                <li><a href="./sc/index.html" className="language-nav-link" title="簡體中文">簡體中文</a></li>
                            </ul>
                        </div>
                    </li>       
                </ul>
            </div>
            {/* <!-- mobile hamburger --> */}
            <div className="nav-mobile">
                <button type="button" title="mobile" className="nav-mobile-toggle" id="nav-mobile-toggle" onClick={toggleNav}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <ul className={navActive ? 'mobile-nav-list active' : 'mobile-nav-list'} id="mobile-nav-list">
                    {/* <li><a href="#home" className="mobile-nav-link">home</a></li> */}
                    {/* <li><a href="./en/about.html" className="mobile-nav-link">about us</a></li> */}
                    {/* <li><a href="#main" className="mobile-nav-link">rent yacht</a></li> */}
                    {/* <li><a href="./en/enquiry.html" className="mobile-nav-link">enquiry</a></li> */}
                    {/* <li><a href="./en/contact.html" className="mobile-nav-link">contact us</a></li> */}
                    {/* <li><a href="./en/game.html" className="mobile-nav-link">game</a></li> */}
                    {/* <li><a href="./en/sitemap.html" className="mobile-nav-link">sitemap</a></li> */}
                    {/* <!-- <li><a href="./tc/index.html" className="lmobile-nav-link" title="繁體中文">繁體中文</a></li> --> */}
                    {/* <!-- <li><a href="./sc/index.html" className="mobile-nav-link" title="簡體中文">簡體中文</a></li> --> */}

                    <li><Link to="/" className="mobile-nav-link">home</Link></li>
                    <li><Link to="/AboutUs" className="mobile-nav-link">about us</Link></li>
                    <li><Link to="/Rent" className="mobile-nav-link">rent yacht</Link></li>
                    <li><Link to="/Enquiry" className="mobile-nav-link">enquiry</Link></li>
                    <li><Link to="/Contact.html" className="mobile-nav-link">contact us</Link></li>
                    <li><Link to="/Game" className="mobile-nav-link">game</Link></li>
                    <li><Link to="/SiteMap" className="mobile-nav-link">sitemap</Link></li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Nav