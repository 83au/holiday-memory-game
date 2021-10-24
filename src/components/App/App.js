import { useGame } from '../../contexts/GameContext'
import Modal from '../Modal/Modal'
import CardList from '../CardList/CardList'
import './App.css'

function App() {
  const { modal, closeModal, tries, newGame, initNewGame } = useGame()

  const triesClass = tries > 22 ? 'red' : tries > 12 ? 'orange' : 'green'
  
  return (
    <div className="App">
      { 
        modal.show && 
        <Modal
          text={modal.message} 
          onClose={closeModal} 
          newGame={newGame} 
          initNewGame={initNewGame}
        />
      }
      <h1 className="App__heading">Halloween Memory Game!</h1>
      <h2 className={`App__tries ${triesClass}`}>Tries: {tries}</h2>
      <CardList />
    </div>
  );
}

export default App
