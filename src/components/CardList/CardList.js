import React from 'react'
import { useGame } from '../../contexts/GameContext'
import Card from './Card/Card'

import './CardList.css'


function CardList() {
  const { cards, flipCard } = useGame()

  const cardComponents = cards.map(card => (
    <Card 
      key={card.id + card.image} 
      flipCard={flipCard}
      {...card} 
    />
  ))

  return (
    <ul className="CardList">
      { cardComponents }
    </ul>
  )
}

export default CardList
