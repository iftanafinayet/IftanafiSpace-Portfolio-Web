import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Pastikan file App.jsx ada di folder src
import './styles/index.css' // Alamat folder styles yang benar

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)