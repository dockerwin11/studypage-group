import React from 'react'

import serviceOff from '../images/homepage/section/yacht_charter_services.png';
import serviceOn from '../images/homepage/section/yacht_charter_services_dark.png';
import boatOff from '../images/homepage/section/yacht_charter_boat.png';
import boatOn from '../images/homepage/section/yacht_charter_boat_dark.png';

function HomePageSec() {
    return (
    <>
        <section className="section" id="main" >
            <div className="section-title">
                <h2>rent yacht</h2> 
            </div>
            <div className="section-center main-center">
                <article className="main-card">
                    <div className="main-img-container">
                        <div>
                            <a href="./en/service.html" className="service-heading" title="service">
                                <img className="service-heading-img-off" src={serviceOff} alt="service img off" />
                                <img className="service-heading-img-on" src={serviceOn} alt="service img on" />
                            </a>
                        </div>
                    </div>
                </article>

                <article className="main-card">
                    <div className="main-img-container">
                        <div>
                            <a href="./en/boat.html" className="boat-heading" title="boat">
                                <img className="boat-heading-img-off" src={boatOff} alt="boat img off" />
                                <img className="boat-heading-img-on" src={boatOn} alt="boat img on" />
                            </a>
                        </div>                   
                    </div>
                </article>
            </div>
        </section>
    </>
  )
}

export default HomePageSec
