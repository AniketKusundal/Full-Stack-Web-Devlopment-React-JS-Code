import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState({left:0 , right:0})

  const HandelClick1 = () => {
    let x = {...count, left: count.left+1}
    setCount(x)
  }

  const HandelClick2 = () => {
    let x = {...count , right: count.right+1}
    setCount(x)
  }

  return (
    <>
      <div>
        <button onClick={HandelClick1}>Left Count</button>
        <p>Left Count {count.left}</p>
        <button onClick={HandelClick2}>Right Count</button>
        <p>Right Count {count.right}</p>
      </div>
    </>
  )
}

export default App
