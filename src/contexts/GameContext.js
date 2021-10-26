import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useImages } from './ImagesContext'


const GameContext = createContext()


function GameContextProvider({ children }) {
  const { images, randomizeImages } = useImages()

  const setupCards = useCallback(() => {
    return images.map((image, index) => ({
      image,
      id: index,
      active: false,
      matched: false
    }))
  }, [images])

  const [cards, setCards] = useState(setupCards)
  const [activeCards, setActiveCards] = useState([])
  const [tries, setTries] = useState(0)
  const [newGame, setNewGame] = useState(false)
  const [modal, setModal] = useState({
    show: false,
    message: null,
    closing: false
  })


  const flipCard = id => {
    setCards(prevCards => {
      const newCards = prevCards.map(card => {
        if (card.id === id) {
          return {
            ...card,
            active: true
          }
        }
        return card
      })
      return newCards
    })

    setActiveCards(prevActive => [...prevActive, id])
  }


  const checkForMatch = useCallback(() => {
    if (activeCards.length < 2) return 

    const card1 = cards[activeCards[0]]
    const card2 = cards[activeCards[1]]

    setActiveCards([])
    setTries(prevTries => prevTries + 1)

    if (card1.image !== card2.image) {
      setTimeout(() => {
        setModal({ 
          show: true,
          message: 'SORRY, NOT A MATCH!'
        })
        
      }, 1000)
      return
    }

    setTimeout(() => {
      setCards(prevCards => {
        const newCards = prevCards.map(card => {
          if (card.id === card1.id || card.id === card2.id) {
            return {
              ...card,
              matched: true
            }
          }
          return card
        })
        return newCards
      })
      setModal({
        show: true,
        message: 'CONGRATS! YOU FOUND A MATCH!',
        closing: false
      })
    }, 1000) 
  }, [cards, activeCards])


  const closeModal = () => setModal(prevModal => ({...prevModal, closing: true }))

  
  const initNewGame = () => {
    randomizeImages()
    setTries(0)
    setNewGame(false)
  }


  useEffect(() => checkForMatch(), [activeCards, checkForMatch])

  
  // Reset game 
  useEffect(() => {
    setCards(setupCards)
  }, [images, setupCards])


  useEffect(() => {
    const checkForWin = () => {
      const gameOver = cards.every(card => card.matched)   
      if (gameOver) {
        setModal({
          show: true,
          message: `CONGRATS! YOU MATCHED ALL THE CARDS IN ${tries} TRIES!`,
          closing: false
        })
        setNewGame(true)
        setTimeout(() => {
          setCards(prevCards => {
            return prevCards.map(card => ({
              ...card,
              active: false
            }))
          })
        }, 500)
      }
    }
    checkForWin()
  }, [cards])


  useEffect(() => {
    if (!modal.closing) return

    if (modal.message === 'SORRY, NOT A MATCH!') {    
      setTimeout(() => {
        setCards(prevCards => {
          const newCards = prevCards.map(card => {
            if (card.matched) return card
            return {
              ...card,
              active: false
            }
          })
          return newCards
        })
      }, 200)
    }
    setModal({
      show: false,
      message: null,
      closing: false
    })  
  }, [modal])


  const context = {
    cards,
    flipCard,
    modal,
    closeModal,
    tries,
    newGame,
    initNewGame
  }


  return (
    <GameContext.Provider value={context}>
      { children }
    </GameContext.Provider>
  )
}


export default GameContextProvider


export function useGame() {
  const context = useContext(GameContext)
  return context
}
