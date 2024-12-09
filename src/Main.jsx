import React from 'react'
import { Routes, Route } from "react-router-dom";

// import './css/index.css';
import HomePage from './components/HomePage.jsx';
import AboutUs from './components/AboutUs.jsx'
import Rent from './components/Rent.jsx'
import Service from './components/Service.jsx'
import Boat from './components/Boat.jsx'
import Boat38Surf from './components/Boat38Surf.jsx'                       
import BoatRegalLs4 from './components/BoatRegalLs4.jsx'                    
import BoatRegal42Fly from './components/BoatRegal42Fly.jsx'                
import BoatRegal38Grande from './components/BoatRegal38Grande.jsx'          
import BoatBeneteauOceanis60 from './components/BoatBeneteauOceanis60.jsx'  
import BoatOceancoBlackPearl from './components/BoatOceancoBlackPearl.jsx'  
import BoatBali58 from './components/BoatBali58.jsx'                        
import Invoice from './components/Invoice.jsx'
import Enquiry from './components/Enquiry.jsx'
import Contact from './components/Contact.jsx'
import Game from './components/Game.jsx'
// import Game from './components/GameDesktop.jsx'  // develop
import SiteMap from './components/SiteMap.jsx'
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
            <Route path="/Boat" element={<Boat />} />
            <Route path="/Boat38Surf" element={<Boat38Surf />} />
            <Route path="/BoatRegalLs4" element={<BoatRegalLs4 />} />
            <Route path="/BoatRegal42Fly" element={<BoatRegal42Fly />} />
            <Route path="/BoatRegal38Grande" element={<BoatRegal38Grande />} />
            <Route path="/BoatBeneteauOceanis60" element={<BoatBeneteauOceanis60 />} />
            <Route path="/BoatOceancoBlackPearl" element={<BoatOceancoBlackPearl />} />
            <Route path="/BoatBali58" element={<BoatBali58 />} />

            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/Enquiry" element={<Enquiry />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Game" element={<Game />} />
            {/* <Route path="/GameDesktop" element={<GameDesktop />} /> */}
            <Route path="/SiteMap" element={<SiteMap />} />
            <Route path="/ThankYou" element={<ThankYou />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
        </>
    );
}

export default Main