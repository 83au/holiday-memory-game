import { createContext, useContext, useState } from 'react'


const ModalContext = createContext()


function ModalContextProvider({ children }) {
  const [modal, setModal] = useState({
    show: false,
    message: null,
    closing: false
  })

  const closeModal = () => setModal(prevModal => ({...prevModal, closing: true }))

  const context = {
    modal,
    setModal,
    closeModal
  }

  return (
    <ModalContext.Provider value={context}>
      { children }
    </ModalContext.Provider>
  )
}

export default ModalContextProvider


export function useModal() {
  const context = useContext(ModalContext)
  return context
}
