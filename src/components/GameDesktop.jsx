import React from 'react';

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import '../script/gameDesktop';

function GameDesktop() {
    return (
        <>
            <HeadInfo />
            <Nav />
            <div>
                <BackgroundVideo />
                {/* <section className="section" id="about">
                    <div className="section-title">
                        <h2 className="hero-h2">Game</h2>
                    </div>
                    <article>
                        <h2 className="game-h2">Please click and use the button "UP" and "DOWN" that play the boat game.</h2>
                        <div className="game-flex" >
                            <div id="myfilter" className="game-myfilter"></div>
                            <div id="myrestartbutton" className="game-myrestartbutton">
                                <button className="restartGame" onClick="restartGame()">Restart</button>
                            </div>
                            <div id="canvascontainer"></div>
                            <br />
                            <div className="game-move-button">
                                <button className="up" onTouchStart="moveup()" onMouseDown="moveup()" onMouseup="clearmove()">UP</button>
                                <br /><br />
                                <button className="down" onTouchStart="movedown()" onMouseDown="movedown()" onMouseUp="clearmove()">DOWN</button>
                            </div>
                        </div>
                        
                        
                        {/* <button type="button" className="button1" onClick={() => gameType(1)}>Start Game</button> */}
                        {/* <button type="button" className="button2" onClick={() => gameType(2)}>Start Game</button> */}
                        {/* <button type="button" className="button3" onClick={() => gameType(3)}>Start Game</button> */}
                    </article>
                </section> */}
            </div>
            <Footer />
        </>
    )
}

export default GameDesktop
