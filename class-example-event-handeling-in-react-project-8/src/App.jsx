

import './App.css'

function App() {
  
  const ButtonClick = () =>{
    console.log("Your Button is  Clicked")
  }
  const ButtonClick2 = () =>{
    console.log("Your Button 2 is  Clicked")
  }

  return (
    <>
      <div>
        <button onClick={ButtonClick}>Click</button> {/* Here is a OnClick Event is fired  */}

        <input type="button" value={"ok"} onClick={ButtonClick2} />  {/* we can create button by using input type="button" */}
      </div>
    </>
  )
}

export default App
