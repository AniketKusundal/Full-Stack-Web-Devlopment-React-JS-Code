import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const [count , setCount] = useState(0)
  const ref = useRef({count:0})

  const inr = () => {
    setCount(count + 1)
  }
  const inrref = () => {
    ref.current.count+=1
    console.log("Count is " + ref.current.count);
  }
  

  return (
    <>
      <div>
       <button onClick={inr}>Increment </button> &nbsp; &nbsp;
       <button onClick={inrref}>Increment Ref</button>
      </div>

      <div>
        <p>setcount {count}</p>
        <p>useRef Count {ref.current.count}</p>
      </div>
    </>
  )
}

export default App
