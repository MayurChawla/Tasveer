import React from 'react';
import {motion} from 'framer-motion';

const Modal = ({selectedImage, setSelectedImage}) => {
    
    const handleModalClick = (e) => {
        if(e.target.classList.contains('modal-bd')){
            setSelectedImage(null);
        }
    }
    
    return (
        <motion.div className="modal-bd" onClick={handleModalClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <motion.img src={selectedImage} alt="showing full img"
                initial={{opacity:0, y:"-100vh"}}
                animate={{opacity:1, y:0}}
            />
        </motion.div>
    )
}

export default Modal;