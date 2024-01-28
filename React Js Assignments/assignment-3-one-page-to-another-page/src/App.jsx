import './App.css'
import { useState } from 'react'
import {Home} from './components/Home'
import {Login} from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [Name ,setName] = useState("")
  const [isLogin , setisLogin] = useState(false)


  const HanddelClick1 = (f) => {
    console.log("App function called");
    setisLogin(f)
  }

  const HanddelClick2 = (n) => {
    console.log("App function called");
    setName(n)  
  }

  const obj = { fun1: HanddelClick1, fun2: HanddelClick2 };



  return (
    <>
      <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home prop={isLogin}></Home>}></Route>
            <Route path='/Login' element={<Login args={obj}></Login>}></Route>
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
