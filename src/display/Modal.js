import React from 'react';

const Modal = ({selectedImage, setSelectedImage}) => {
    
    const handleModalClick = (e) => {
        if(e.target.classList.contains('modal-bd')){
            setSelectedImage(null);
        }
    }
    
    return (
        <div className="modal-bd" onClick={handleModalClick}>
            <img src={selectedImage} alt="showing full img"/>
        </div>
    )
}

export default Modal;