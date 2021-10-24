import { createPortal } from 'react-dom'
import './Modal.css'


function ModalOverlay({ message, onClose, newGame, initNewGame }) {
  const handleClose = () => onClose()

  const handleNewGame = () => {
    console.log('HANLDING NEW GAME')
    initNewGame()
    onClose()
  }

  return (
    <div className="Modal">
      <h2 className="Modal__message">{message}</h2>
      {!newGame && <button className="Modal__close" onClick={handleClose}>&times;</button>}
      {newGame && <button className="Modal__new-game" onClick={handleNewGame}>New game?</button>}
    </div>
  )
}


function Modal({ text, onClose, newGame, initNewGame }) {
  return (
    <>
      { 
        createPortal(
          <ModalOverlay message={text} onClose={onClose} newGame={newGame} initNewGame={initNewGame} />,
          document.getElementById('modal')
        )
      }
    </>
  )
}

export default Modal
