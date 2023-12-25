import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({fname:'Aniket',lname:'Kusundal' , email:'ak@gmail.com'})


  const HandelfnameChange = (e) => {
    let msg = e.target.value 
    setData({...data,fname:msg})
    // setData({fname:msg, lname:data.lname, email:data.email})
  }

  const HandellnameChange = (e) => {
    let msg = e.target.value
    setData({...data,lname:msg})
    
  }

  const HandelEmailChange = (e) => {
    let msg = e.target.value
    setData({...data , email:msg})
    
  }

  return (
    <>
      <div>
          <p><input type="text" value={data.fname} onChange={HandelfnameChange}/></p>
          <p><input type="text" value={data.lname} onChange={HandellnameChange}/></p>
          <p><input type="text" value={data.email} onChange={HandelEmailChange}/></p>
      </div>

      <p>First Name : {data.fname}</p>
      <p>last Name : {data.lname}</p>
      <p>Email Address : {data.email}</p>
    </>
  )
}

export default App
