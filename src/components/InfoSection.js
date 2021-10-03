import React from 'react';
import { Button } from './Button';
import './InfoSection.css';

function InfoSection({
    id, lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart, toggleModal, type
}) {

    return (
        <>
            <div id={id} className={lightBg ? 'home__info-section' : 'home__info-section darkBg'}>
                <div className="info-container">
                    <div className="row home__info-row"
                        style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
                    >
                        <div className="col">
                            <div className="home__info-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 style={{ textAlign: 'left' }} className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__info-title' : 'home__info-title dark'}>{description}</p>
                                <Button onClick={() => { toggleModal(type) }} buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__info-img-wrapper">
                                <img onContextMenu={(e) => { e.preventDefault() }} src={img} alt={alt} className="home__info-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoSection
