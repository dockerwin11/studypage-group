import React, { useState, useEffect, useRef } from 'react';

import LightBox from './LightBox';

const BoatSlider = ({ images }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    // const [intervalID, setIntervalID] = useState(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        // console.log(images.length);
        // console.log(images[0]);
        if (images.length > 0) {
            intervalRef.current = setInterval(() => { setSlideIndex(prevIndex => (prevIndex + 1) % images.length); }, 5000);
        }
        
        return () => clearInterval(intervalRef.current);
    }, []);

    const prevSlide = () => {
       
        console.log("pre before");
        clearInterval(intervalRef.current);
        setSlideIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
        intervalRef.current = setInterval(() => { setSlideIndex(prevIndex => (prevIndex + 1) % images.length); }, 5000);
        console.log("pre after");
    };

    const nextSlide = () => {
        console.log("next before");
        clearInterval(intervalRef.current);
        setSlideIndex(prevIndex => (prevIndex + 1) % images.length);
        intervalRef.current = setInterval(() => { setSlideIndex(prevIndex => (prevIndex + 1) % images.length); }, 5000);
        console.log("next after");
    };

    return (
        <>
            <LightBox />
            
            {images.map((image, index) => (
                
                <a key={index} className="slide-boat" href={image.coverImgs} data-lightbox={image.lightBox} data-title={image.title}>
                <img
                src={image.coverImgs}
                // onClick={image.coverLinks}
                alt={`Slide ${index}`}
                className={index === slideIndex ? 'slide displaySlide' : 'slide'}
                />
                </a>
            
            ))}
            
            <button className="prev" title="prev" type="button" onClick={prevSlide}>&#10094;</button>
            <button className="next" title="next" type="button" onClick={nextSlide}>&#10095;</button>
        
        </>
    );
};


export default BoatSlider
