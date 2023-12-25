import { useState } from 'react'
import './App.css'

function App() {
  const [isChecked , setChecked] = useState('false')

  const HandelCheck = (e) => {
    setChecked(e.target.isChecked)
  }
 

  return (
    <>
      <div>
        <label><input type="checkbox" onClick={HandelCheck} checked={isChecked}/>You Know React</label>     {/*checked={isChecked} --> this line indicates Checkbox is checked or not  */} 

        <p>{isChecked ? 'you know react' : 'you dont know react'}</p>
      </div>
    </>
  )
}

export default App
