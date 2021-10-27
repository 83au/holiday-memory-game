import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import GameContextProvider from './contexts/GameContext';
import ImagesContextProvider from './contexts/ImagesContext'
import ModalContextProvider from './contexts/ModalContext';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ImagesContextProvider>
      <ModalContextProvider>
        <GameContextProvider>
          <App />
        </GameContextProvider>
      </ModalContextProvider>
    </ImagesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


