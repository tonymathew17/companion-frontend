import React, { useState } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import ModalDialog from '../common/Modal';
import InfoSection from '../InfoSection';
import { constants } from '../../common/constants';

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
            <h1 className="info-heading">Initiatives</h1>
            <InfoSection {...constants.INFO_SECTION.schoolPrograms} toggleModal={updateModalType} type="schoolPrograms" />
            <InfoSection {...constants.INFO_SECTION.collegePrograms} toggleModal={updateModalType} type="collegePrograms" />
            <InfoSection {...constants.INFO_SECTION.campaigns} toggleModal={updateModalType} type="campaigns" />
        </>
    )
}

export default Home;