
import './App.css'

function App() {
  
  const a = 10; 
  const b = 20;

  const d = new Date()

  return (
    <>
      
      <p> Dynamic Content  Render</p>

       <p> a = {a} and b = {b}</p><br />  {/*in curly braket we can access variable  */}
      <h4>Addition Of two Number is</h4>
      <p>{a}+{b} = {a+b}</p>



      <h5>Today date is {d.toString()}</h5>  {/* Here we can access the current date  */}

    </>
  )
}

export default App
