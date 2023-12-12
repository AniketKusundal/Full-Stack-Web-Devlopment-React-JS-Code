
import './App.css'

function App() {
  const Hello = ({fname,age}) =>{
    return(
      <div>
        <p>Hello {fname} your age is {age}</p>
      </div>
    )
  }

  return (
    <>
      <Hello fname="aniket" age = '20'></Hello>
      <Hello fname="nike" age = '10'></Hello>
    </>
  )
}

export default App
// About
// This Is the repository for my React JS code this repository is Connected with my Previous repository Full-Stack-Web-Development-Course-Assignments In This repository Here I can upload my All the React Code Daily class examples And Assignments of the REACT JS