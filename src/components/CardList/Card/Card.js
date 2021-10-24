import halloween from '../../../images/halloween.svg'

import './Card.css'


function Card({ flipCard, image, id, active, }) {
  const handleClick = () => flipCard(id)

  return (
    <li className="Card" onClick={!active && handleClick}>
      <img className={`Card__front ${active && 'active'}`} src={image} alt={image} />
      <img className={`Card__back ${!active && 'active'}`} src={halloween} alt="Halloween" />
    </li>
  )
}

export default Card
