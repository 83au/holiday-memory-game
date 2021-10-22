import React from 'react'
import { useGame } from '../../contexts/GameContextProvider'
import Card from './Card/Card'

import './CardList.css'


function CardList() {
  const { cards } = useGame()

  const cardComponents = cards.map(card => (
    <Card key={card.id + card.image} {...card} />
  ))

  return (
    <ul className="CardList">
      { cardComponents }
    </ul>
  )
}

export default CardList
