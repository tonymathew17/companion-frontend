import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { constants } from '../common/constants';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>{constants.HOME_PAGE_CAPTION}</h1>
            <p>Book your session now!</p>
            <div className="hero-btns">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    ABOUT US
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    BOOK AN APPOINTMENT
                    
                </Button>
            </div>
        </div>
    )
}

export default HeroSection