import React from 'react'
import { useImages } from '../../contexts/ImagesContextProvider'
import Card from './Card/Card'

import './CardList.css'


function CardList() {
  const { images } = useImages()

  const cards = images.map((image, idx) => (
    <Card key={idx + image} image={image} />
  ))

  return (
    <ul className="CardList">
      { cards }
    </ul>
  )
}

export default CardList
