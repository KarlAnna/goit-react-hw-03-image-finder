import PropTypes from 'prop-types';
import { useEffect } from "react";
import { createPortal } from "react-dom"
import '../../styles.css'


const modalRoot = document.querySelector('#modal-root')

const Modal = ({ imgUrl, toggleModal }) =>  {

    useEffect(() => {
        const handleKeyDown = e => {
        if (e.code === 'Escape') {
            toggleModal()
        }
    };
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
        }
    }, [toggleModal])
    

    const handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
            toggleModal()
        }
    }
    


    return createPortal(
        <div className="overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <img width={1000} src={imgUrl} alt="" />
            </div>
        </div>,
        modalRoot
    )
}

Modal.propTypes = {
    imgUrl: PropTypes.string,
    toggleModal: PropTypes.func
}

export default Modal