import React from 'react'
import GameContextProvider from '../contexts/GameContext'
import ImagesContextProvider from '../contexts/ImagesContext'
import ModalContextProvider from '../contexts/ModalContext'

function Services({ children }) {
  return (
    <ImagesContextProvider>
      <ModalContextProvider>
        <GameContextProvider>
          {children}
        </GameContextProvider>
      </ModalContextProvider>
    </ImagesContextProvider>
  )
}

export default Services
