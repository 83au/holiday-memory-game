import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import Services from './components/Services';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Services>
      <App />
    </Services>
  </React.StrictMode>,
  document.getElementById('root')
);


