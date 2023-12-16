import { useState } from 'react'

import './App.css'

function App() {
  
  const Hello = (value) =>{

    return (

      <div>
        <p>Hello {value.fname} Your age is {value.age}</p>
      </div>
    )
  }

  return (
    <>
      <div>
        <Hello fname = "Aniket" age = "20"></Hello>
        <Hello fname = "bono" age = "21"></Hello>
      </div>
    </>
  )
}

export default App
