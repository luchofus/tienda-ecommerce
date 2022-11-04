import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { firestoreInit } from './firebase/configuracion'
import './index.css'

firestoreInit()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
