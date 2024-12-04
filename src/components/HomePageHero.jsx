import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";

import coverImg1 from '../images/homepage/cover1.png';
import coverImg2 from '../images/homepage/cover2.png';
import coverImg3 from '../images/homepage/cover3.png';
import coverImg4 from '../images/homepage/cover4.png';
import coverImg5 from '../images/homepage/cover5.png';
import coverImg6 from '../images/homepage/cover6.png';
import coverImg7 from '../images/homepage/cover7.png';

// import { cover1, cover2, cover3, cover4, cover5, cover6, cover7 } from '../script/pageIndex';

import BackgroundVideo from './BackgroundVideo';
import HomePageHeroSlider from './HomePageHeroSlider';

import '../css/style.css';
import '../css/slider.css';

function HomePageHero() {

    // const navigate = useNavigate();

    const cover = (index) => { 
        const urls = [ 
            '38-Surf.html',
            'Regal-LS4.html',
            'Regal-42-Fly.html',
            'Regal-38-Grande.html',
            'Beneteau-Oceanis-60.html',
            'Oceanco-Black-Pearl.html',
            'Bali-5.8.html'
        ];
        console.log(urls[index]);
        window.open(`/en/${urls[index]}`, '_blank');
        // navigate(`/en/${urls[index]}`);
        // window.open(urls[index], '_blank');
    };

    const images = [
        {"coverImgs": coverImg1, "coverLinks": () => cover(0)}, 
        {"coverImgs": coverImg2, "coverLinks": () => cover(1)},
        {"coverImgs": coverImg3, "coverLinks": () => cover(2)},
        {"coverImgs": coverImg4, "coverLinks": () => cover(3)},
        {"coverImgs": coverImg5, "coverLinks": () => cover(4)},
        {"coverImgs": coverImg6, "coverLinks": () => cover(5)},
        {"coverImgs": coverImg7, "coverLinks": () => cover(6)}
    ];

    return (

    <>
    <div>
        <BackgroundVideo /> 
        <section className="hero" id="home">
            <div className="hero-banner">
                <h2 className="hero-h2">Home</h2>
                {/* <div className="slider">
                    <div className="slides" ref={slidesRef}>
                        <img onClick={cover1} src={coverImg1} className={0 === slideIndex ? 'slide displaySlide' : 'slide'} alt="38 Surf" />
                        <img onClick={cover2} src={coverImg2} className={1 === slideIndex ? 'slide displaySlide' : 'slide'} alt="Regal LS4" />
                        <img onClick={cover3} src={coverImg3} className={2 === slideIndex ? 'slide displaySlide' : 'slide'} alt="Regal 42 Fly" />
                        <img onClick={cover4} src={coverImg4} className={3 === slideIndex ? 'slide displaySlide' : 'slide'} alt="Regal 38 Grande" />
                        <img onClick={cover5} src={coverImg5} className={4 === slideIndex ? 'slide displaySlide' : 'slide'} alt="Beneteau Oceanis 60" />
                        <img onClick={cover6} src={coverImg6} className={5 === slideIndex ? 'slide displaySlide' : 'slide'} alt="Oceanco-Black-Pearl" />
                        <img onClick={cover7} src={coverImg7} className={6 === slideIndex ? 'slide displaySlide' : 'slide'} alt="Bali 5.8" />
                    </div>
                    <button className="prev" title="prev" onClick={prevSlide}>&#10094;</button>
                    <button className="next" title="next" onClick={nextSlide}>&#10095;</button>
                </div> */}
                <HomePageHeroSlider images={images} />
            </div>
        </section>
    </div>
    </>
  );
}

export default HomePageHero;
