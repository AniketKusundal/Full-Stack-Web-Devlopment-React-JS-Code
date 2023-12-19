import { useState } from 'react'
import './App.css'

function App() {
  const [count , setCount ] = useState({left:0,right:0});  {/* here we passing object as a parametr */}
  
  const buttonClick = () => {
    let x = {left:count.left + 1 , right:count.right}
    setCount(x)
  }

  const buttonClick1 = () => {
    let x = {left:count.left , right:count.right + 1}
    setCount(x)
  }

  // const resetValue = () => {
  //   let x = {left:count.left=0 , right:count.right=0}
  //   setCount(x)
  // }


  return (
    <>
      <div>
          <button onClick={buttonClick}>Increment left</button>
          <p>Left Count {count.left}</p>

          <button onClick={buttonClick1}>Increment Right</button>
          <p>Right Count {count.right}</p>

          {/* <button onClick={resetValue}>Reset Value</button> */}
      </div>
      
    </>
  )
}

export default App
