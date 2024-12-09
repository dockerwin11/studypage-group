import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

function Game() {

    const navigate = useNavigate();

    const [gameIndex, setGameIndex] = useState('');


    useEffect(() => {
        console.log("Game Type " + gameIndex);
        switch (gameIndex) {
            case 1:
                {
                console.log("here");
                navigate('/GameDesktop'); 
                // window.open(`GameDesktop.html` , `_self`); 1
                break;
            }
            case 2:
                navigate('/GameIpad'); 
                // window.open(`GameIpad.html` , `_self`); 2
                break;
            case 3:
                navigate('/GameMobile'); 
                // window.open(`GameMobile.html` , `_self`); 3
                break;
            default:
                navigate('/Game');
        }        
        
    }, [gameIndex]);

    const gameType = (index) => {

        setGameIndex(prevIndex => (prevIndex = index));
    };

    return (
        <>
            <HeadInfo />
            <Nav />
            <div>
                <BackgroundVideo />
                
                <section className="section" id="about">
                    <div className="section-title">
                        <h2 className="hero-h2">Game</h2>
                    </div>
                    <article className="game-info">
                        <button type="button" className="button1" onClick={() => gameType(1)}>Start Game</button>
                        <button type="button" className="button2" onClick={() => gameType(2)}>Start Game</button>
                        <button type="button" className="button3" onClick={() => gameType(3)}>Start Game</button>
                    </article>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Game
