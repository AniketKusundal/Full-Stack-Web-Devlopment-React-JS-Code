import { useRef } from 'react'
import './App.css'

function App() {

  const multiRef = useRef()
  const singleRef = useRef()


  const ButtonClick = () => {

    // Multi Selection
    // const arr = [...multiRef.current.option]
    // const arr1 = arr.filter((op)=> op.select)
    // let arr2 = arr1.map((op)=>op.value)
    // console.log(arr2);
    


    const arr = [...multiRef.current.options].filter((op)=> op.selected).map((op)=>op.value)
    console.log(arr);


    // Single Selection

    const arr1 = [...singleRef.current.options].filter((op)=>op.selected).map((op)=>op.value)
    console.log(arr1);
  }



  return (
    <>
      <div>
      <p>Multi selection</p>
        <select ref={multiRef} multiple>
          <option value='C'>C</option>
          <option value='C++'>C++</option>
          <option value='JAVA'>JAVA</option>
          <option value='JAVASCRIPT'>JAVASCRIPT</option>
        </select>



        <p>Single Selection</p>
        <select ref={singleRef}>
          <option value="Full Stack Devloper">Full Stack Devloper</option>
          <option value="AI & ML Engineer">AI & ML Engineer </option>
          <option value="IoT">IoT</option>
          <option value="Cloud Computing">Cloud Computing</option>
        </select>
        <br />
        <br />

        <button onClick={ButtonClick}>Click Here </button>
      </div>
    </>
  )
}

export default App
