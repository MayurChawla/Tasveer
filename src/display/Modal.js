import React from 'react';

const Modal = ({selectedImage}) => {
    return (
        <div className="modal-bd">
            <img src={selectedImage} alt="showing full img"/>
        </div>
    )
}

export default Modal;