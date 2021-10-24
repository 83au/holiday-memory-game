import { useGame } from '../../contexts/GameContext'
import Modal from '../Modal/Modal'
import CardList from '../CardList/CardList'
import './App.css'

function App() {
  const { modal, closeModal, tries } = useGame()

  const triesClass = tries > 24 ? 'red' : tries > 12 ? 'orange' : 'green'
  
  return (
    <div className="App">
      { modal.show && <Modal text={modal.message} onClose={closeModal} />}
      <h1 className="App__heading">Halloween Memory Game!</h1>
      <h2 className={`App__tries ${triesClass}`}>Tries: {tries}</h2>
      <CardList />
    </div>
  );
}

export default App
