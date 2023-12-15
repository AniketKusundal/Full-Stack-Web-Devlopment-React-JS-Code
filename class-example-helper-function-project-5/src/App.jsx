
import './App.css'


const Hello = (values) =>{
  //Helper Function 

  const getYear = () =>{
    const d = new Date()
    
    const year = d.getFullYear()
    return year - (values.age)

  }

  return(
    <div>
          <p>Hello {values.fname} your Birth year is {getYear()}</p>
        </div>
  )
}
function App() {

  return (
    <>
        <div>
          <Hello fname = "ani" age = "20"></Hello>
          <Hello fname = "janiii" age = "21"></Hello>
        </div>
    </>
  )
}

export default App
