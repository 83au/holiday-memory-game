import { createPortal } from 'react-dom'

import './Modal.css'

function ModalOverlay({ message, onClose }) {
  const handleClick = () => onClose()

  return (
    <div className="Modal" onClick={handleClick}>
      <h2 className="Modal__message">{message}</h2>
      <button className="Modal__close">x</button>
    </div>
  )
}

function Modal({ text, onClose }) {
  return (
    <>
      { 
        createPortal(
          <ModalOverlay message={text} onClose={onClose} />,
          document.getElementById('modal')
        )
      }
    </>
  )
}

export default Modal
