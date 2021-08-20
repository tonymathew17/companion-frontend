import React, { useState } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import ModalDialog from '../common/Modal';

function Home() {

    const [open, setOpen] = useState(false);
    const onCloseModal = () => { setOpen(false) };

    const [modalType, setModalType] = useState(null);
    const updateModalType = modalType => {
        setModalType(modalType)
        setOpen(!open)
    };

    return (
        <>
            <HeroSection />
            {<Cards toggleModal={updateModalType} />}
            <ModalDialog isModalActive={open} modalType={modalType} toggleModal={onCloseModal} />
        </>
    )
}

export default Home;