import { useGame } from '../../contexts/GameContext'
import Modal from '../Modal/Modal'
import CardList from '../CardList/CardList'
import './App.css'

function App() {
  const { modal, closeModal, tries, newGame, initNewGame } = useGame()

  const triesClass = tries > 22 ? 'red' : tries > 14 ? 'orange' : 'green'
  
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
      <footer>Icons by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a></footer>
    </div>
  );
}

export default App
