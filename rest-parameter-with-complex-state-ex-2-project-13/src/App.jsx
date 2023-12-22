import { useState } from 'react'

import './App.css'

function App() {
  const [text , setText] = useState()

  const HandelChange = (e) => {
    let msg = e.target.value;    {/*e.target.value it means tagrget  the the value from text box  */}
    setText(msg)
  }

  return (
    <>
      <div>
          <input type="text" onChange={HandelChange} value={text} placeholder='Type Your texxt Here'/>
          <p>You Type : {text}</p>
      </div>
   </>
  )
}

export default App
