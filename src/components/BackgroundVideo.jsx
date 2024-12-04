import React from 'react'

import backVideo from '../video/background-video-1.mp4';

function BackgroundVideo() {
    return (
        <div>
            <video className="background-video" autoPlay muted loop>
                <source src={backVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default BackgroundVideo
