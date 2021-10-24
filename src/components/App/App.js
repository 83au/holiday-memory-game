import { useGame } from '../../contexts/GameContext'
import Modal from '../Modal/Modal'
import CardList from '../CardList/CardList'
import './App.css'

function App() {
  const { modal, closeModal } = useGame()
  
  return (
    <div className="App">
      { modal.show && <Modal text={modal.message} onClose={closeModal} />}
      <h1 className="App__heading">Halloween Memory Game!</h1>
      <CardList />
    </div>
  );
}

export default App
