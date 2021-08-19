import React, { useState } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Modal from '../common/Modal';

function Home() {
    const [modal, setModal] = useState({
        isModalActive: false,
        type: ""
    });

    const toggleModal = (type) => {
        console.log(`type: ${type}`)
        setModal({
            isModalActive: !modal.isModalActive,
            type: type
        });
    };

    return (
        <>
            <HeroSection />
            <Cards toggleModal={toggleModal} />
            <Modal isModalActive={modal.isModalActive} modalType={modal.type} toggleModal={toggleModal} />
        </>
    )
}

export default Home;