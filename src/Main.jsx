import React from 'react'
import { Routes, Route } from "react-router-dom";

// import './css/index.css';
import HomePage from './components/HomePage.jsx';
import AboutUs from './components/AboutUs.jsx'
import Enquiry from './components/Enquiry.jsx'
import ThankYou from './components/ThankYou.jsx'

function Main() {
    return (      
        <>
        <Routes>    
            {/* <Route index element={<Homepage />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            {/* <Route path="/Rent" element={<Rent />} /> */}
            <Route path="/Enquiry" element={<Enquiry />} />
            {/* <Route path="/Contact" element={<Contact />} /> */}
            {/* <Route path="/Game" element={<Game />} /> */}
            {/* <Route path="/SiteMap" element={<SiteMap />} /> */}
            <Route path="/ThankYou" element={<ThankYou />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
        </>
    );
}

export default Main