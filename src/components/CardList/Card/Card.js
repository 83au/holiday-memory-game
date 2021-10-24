import halloween from '../../../images/halloween.svg'

import './Card.css'


function Card({ flipCard, image, id, active, }) {
  const handleClick = () => flipCard(id)

  return (
    <li className="Card" onClick={!active ? handleClick : undefined}>
      <div className={`Card__side Card__side--front ${active && 'active'}`}>
        <img src={image} alt={image} />
      </div>
      <div className={`Card__side Card__side--back ${!active && 'active'}`}>
        <img src={halloween} alt="Halloween" />
      </div>
    </li>
  )
}

export default Card
