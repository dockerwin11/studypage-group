import React from 'react'
import { Routes, Route } from "react-router-dom";

// import './css/index.css';
import HomePage from './components/HomePage.jsx';
import AboutUs from './components/AboutUs.jsx'
import Rent from './components/Rent.jsx'
import Service from './components/Service.jsx'
import Invoice from './components/Invoice.jsx'
import Enquiry from './components/Enquiry.jsx'
import Contact from './components/Contact.jsx'
import ThankYou from './components/ThankYou.jsx'

import CssStyle from './components/CssStyle.jsx'

function Main() {

    return (      
        <>
        <CssStyle />
        <Routes>    
            {/* <Route index element={<Homepage />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Rent" element={<Rent />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/Enquiry" element={<Enquiry />} />
            <Route path="/Contact" element={<Contact />} />
            {/* <Route path="/Game" element={<Game />} /> */}
            {/* <Route path="/SiteMap" element={<SiteMap />} /> */}
            <Route path="/ThankYou" element={<ThankYou />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
        </>
    );
}

export default Main