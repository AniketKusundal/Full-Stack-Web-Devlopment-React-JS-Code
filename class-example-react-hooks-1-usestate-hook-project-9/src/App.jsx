import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const buttonClick = () => {
      setCount(count + 1)
    }

  return (
    <>
      <div>
        
        <button onClick = {buttonClick}>Click To Count</button>
        <p>Count is {count}</p>
      </div>
      
      
    </>
  )
}
export default App