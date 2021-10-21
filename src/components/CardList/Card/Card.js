import { useState } from 'react'
import halloween from '../../../images/halloween.svg'

import './Card.css'


function Card({ image }) {
  const [flipCard, setFlipCard] = useState(false)

  const handleClick = () => setFlipCard(prevFlipCard => !prevFlipCard)

  return (
    <li className="Card" onClick={handleClick}>
      <img className={`Card__front ${flipCard && 'active'}`} src={image} alt={image} />
      <img className={`Card__back ${!flipCard && 'active'}`} src={halloween} alt="Halloween" />
    </li>
  )
}

export default Card
