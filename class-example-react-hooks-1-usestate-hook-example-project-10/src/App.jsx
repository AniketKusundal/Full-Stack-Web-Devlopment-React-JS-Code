import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handelIncrement = () =>{
    setCount(count + 1)
  }
  const handelDecrement = () =>{
    setCount(count - 1)
  }
  const handelReset = () =>{
    setCount(0)
  }

  return (
    <>
      <div>
        <button onClick={handelIncrement}>Increment</button>
        <button onClick={handelDecrement}>Decrement</button>
        <button onClick={handelReset}>Reset</button>
      </div>
      <p>count is {count}</p>
    </>
  )
}

export default App
