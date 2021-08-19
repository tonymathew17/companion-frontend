import React from "react";
import "./Modal.css";
import { constants } from "../../common/constants";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function Modal({ isModalActive, modalType, toggleModal }) {

    isModalActive ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')

    return (
        <>
            {(isModalActive && modalType) && (
                <div className="modal">
                    <div onClick={() => {
                        toggleModal("")
                    }} className="overlay"></div>
                    <div className="modal-content">
                        <h2>{constants.MODAL_CONTENT.HOME_PAGE_CARDS[modalType].header}</h2>
                        <p>{constants.MODAL_CONTENT.HOME_PAGE_CARDS[modalType].content}</p>
                        <button className="close-modal" onClick={() => {
                            toggleModal("")
                        }}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
