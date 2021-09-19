import React from "react";
import { constants } from "../../common/constants";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./ModalDialog.css"

export default function ModalDialog({ isModalActive, modalType, toggleModal }) {

    return (
        (modalType &&
            <Modal
                open={isModalActive}
                onClose={toggleModal}
                center
                blockScroll={false}
                animationDuration={400}
                classNames={{ overlay: 'overlay', modal: 'modalContainer' }}
                focusTrapped={false}>
                {constants.MODAL_CONTENT.HOME_PAGE_CARDS[modalType].header && <h2>{constants.MODAL_CONTENT.HOME_PAGE_CARDS[modalType].header}</h2>}
                <br></br>
                {constants.MODAL_CONTENT.HOME_PAGE_CARDS[modalType].content && <p>{constants.MODAL_CONTENT.HOME_PAGE_CARDS[modalType].content}</p>}
            </Modal>
        )
    );
}
