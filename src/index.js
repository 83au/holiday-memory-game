import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import ImagesContextProvider from './contexts/ImagesContextProvider'

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ImagesContextProvider>
      <App />
    </ImagesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


