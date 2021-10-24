import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import GameContextProvider from './contexts/GameContext';
import ImagesContextProvider from './contexts/ImagesContext'

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ImagesContextProvider>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </ImagesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


