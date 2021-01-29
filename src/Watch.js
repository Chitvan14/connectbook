import React from 'react';
import './Watch.css';

function Watch() {
    return (
        <div className="watch">
            <iframe src='https://www.youtube.com/embed/0GSghT3PT1w'
            height='60%'
            width='90%'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>  
        </div>
    )
}

export default Watch
