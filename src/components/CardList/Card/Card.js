
import { useGame } from '../../../contexts/GameContextProvider'
import halloween from '../../../images/halloween.svg'

import './Card.css'


function Card({ image, id, active }) {
  const { flipCard } = useGame()

  const handleClick = () => flipCard(id)

  return (
    <li className="Card" onClick={handleClick}>
      <img className={`Card__front ${active && 'active'}`} src={image} alt={image} />
      <img className={`Card__back ${!active && 'active'}`} src={halloween} alt="Halloween" />
    </li>
  )
}

export default Card
