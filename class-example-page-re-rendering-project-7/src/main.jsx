import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

  let i = 0
  const Refresh = () =>{
    i = i + 1
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      
      <App  counter = {i}/>
      
      )
    }
  setInterval(() => Refresh(), 2000);
