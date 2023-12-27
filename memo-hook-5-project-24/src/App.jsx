import { memo, useState } from 'react'
import './App.css'


const ShowName = memo (function Show1({Name}) {
  console.log("ShowName Executedd at",new Date().toLocaleDateString())
  return(
    <h2>Hello {Name}</h2>
  )
})
 
 


const ShowAddress = memo (function Show2({Address}) {
  console.log("Address Executedd at",new Date().toLocaleDateString())
  return(
    <h3>Hello {Address}</h3>
  )
})



function App() {


  const [name , setName] = useState('')
  const [address , setAdress] = useState('')
  


  const HandelChange1 = (e) => {
      setName(e.target.value)
  }

  const HandelChange2 = (e) => {
      setAdress(e.target.value)
  }

  return (
    <>
      <div>
        <label>
        Enter Name
          <input type='text' onChange={HandelChange1} value={name}></input>
        </label>
        <br/>
        <br/>


        <label>
        Enter Address 
          <input type='text' onChange={HandelChange2} value={address}></input>
        </label>
        <br/>

        

        <ShowName value={name}></ShowName>
        <ShowAddress value={address}></ShowAddress>

      </div>
      
    </>
  )
}

export default App
