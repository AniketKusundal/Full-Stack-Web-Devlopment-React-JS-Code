import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([

    {id:0 , title:"type box 1" , isEdit: false},
    {id:1 , title:"type box 2" , isEdit: false},
    {id:2 , title:"type box 3" , isEdit: false},
    {id:3 , title:"type box 4" , isEdit: false}
  ])


  const handelEditClick = (index) =>{
    console.log(index);
    const data1 = [...data]
    data1 [index].isEdit = true
    setData(data1)
  }
  const handelSaveClick = (index) =>{
    console.log(index);
    const data1 = [...data]
    data1 [index].isEdit = false
    setData(data1)
  }


  const handelChange = (e) =>{
    
    const data1 = [...data]
    data1 [e.target.id]. title=e.target.value
    setData(data1)
  }





  return (
    <>
      <div>
        <table border={1}>
          <thead>
            <tr></tr>
            <tr>Title</tr>
          </thead>

          <tbody>
            {
              data.map((r)=>{
                return(
                  <tr key={r.id}>
                    <td>
                      {r.isEdit? <input type='text' value={r.title} id={r.id} onChange={handelChange}></input>:r. title}
                    </td>

                    <td>
                    {
                      r.isEdit ? 
                     <button onClick={()=>handelSaveClick(r.id)}>Save</button> 
                    :<button onClick={()=>handelEditClick(r.id)}>Edit</button>
                    }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      
    </>
  )
}

export default App
