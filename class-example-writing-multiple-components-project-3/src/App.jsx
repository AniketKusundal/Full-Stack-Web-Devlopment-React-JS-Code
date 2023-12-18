import { useState } from 'react'

import './App.css'

function App() {
  const Hello = () =>{     {/* Here Hello Is a component  */}
      return(
        <div>
          <p>Hello World</p>
        </div>
      )
  }

  return (
    <>
      <div>
        <Hello></Hello>
        <Hello></Hello>
        <Hello></Hello> {/* hum jitni baar  <Hello></Hello> likhenge utni baar Hello World call hoke Print hoga */}
        <Hello></Hello>
      </div>
    </>
  )
}

export default App
