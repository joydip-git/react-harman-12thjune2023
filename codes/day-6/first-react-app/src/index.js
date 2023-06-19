import React, { StrictMode } from 'react'
//import { render } from 'react-dom'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')
//render(<StrictMode><App /></StrictMode>, root)
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>
)