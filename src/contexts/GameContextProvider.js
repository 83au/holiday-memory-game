import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useImages } from './ImagesContextProvider'


const GameContext = createContext()


function GameContextProvider({ children }) {
  const { images } = useImages()

  const [cards, setCards] = useState(() => {
    return images.map((image, index) => ({
      image,
      id: index,
      active: false,
      matched: false
    }))
  })

  const [activeCards, setActiveCards] = useState([])

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

    if (card1.image !== card2.image) {
      setTimeout(() => {
        alert('SORRY, NOT A MATCH!')
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
      }, 100)
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
      alert('CONGRATS!, YOU FOUND A MATCH!')
    }, 100)

  }, [cards, activeCards])

  useEffect(() => checkForMatch(), [activeCards, checkForMatch])

  useEffect(() => {
    const checkForWin = () => {
      const gameOver = cards.every(card => card.matched)   
      if (gameOver) {
        alert('CONGRATS! YOU MATCHED THEM ALL!')
      }
    }
    checkForWin()
  }, [cards])

  const context = {
    cards,
    flipCard,
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
