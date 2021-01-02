import React from 'react';
import './video-phone-frame.scss';

export default function VideoPhoneFrame({ imgSrc, videoSrc, style = {}, className = '', ...otherProps }) {


    return (
        <div style={{style}} className={`video-phone-frame ${className}`} {...otherProps}>
            <video autoPlay loop>
                <source src={videoSrc}></source>
            </video>
        </div>
    )
}