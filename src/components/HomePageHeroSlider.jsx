import React, { useState, useEffect, useRef } from 'react';

const HomePageHeroSlider = ({ images }) => {
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
        <div className="slider">
            {images.map((image, index) => (
                <img
                key={index}
                src={image.coverImgs}
                onClick={image.coverLinks}
                alt={`Slide ${index}`}
                className={index === slideIndex ? 'slide displaySlide' : 'slide'}
                />
            ))}
            <button className="prev" title="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" title="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default HomePageHeroSlider;