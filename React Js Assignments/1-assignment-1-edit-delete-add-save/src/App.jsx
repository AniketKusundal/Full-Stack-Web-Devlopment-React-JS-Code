import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [data , setData] = useState([
    
    {id: 0 , fname:"Aniket", isEdit :false },
    {id: 1 , fname:"Aniket", isEdit :false },
    {id: 2 , fname:"Aniket", isEdit :false }
  ])
  const ref1 = useRef(null)

  const handelEditClick =(index) =>{
    console.log(index);
    const data1 = [...data]
    data1 [index].isEdit=true
    setData(data1)
  }

  const handelSaveClick =(index) =>{
    console.log(index);
    const data1 = [...data]
    data1[index].isEdit=false
    setData(data1)
  }


  const handelDeleteClick = (id) => {
    console.log(id);
    const deleteData = data.filter(r => r.id != id)
    setData(deleteData)
    
  }

  const  handelClickToAdd = () => {
    let s1 = ref1.current.value
    console.log(s1);
    let x = data.length
    let ob = {id:x,fname:s1,isEdit:false}
    setData([...data,ob]) // Use spread operator here
  }

  const HandelChange =(e) =>{
    const data1 = [...data]
    data1 [e.target.id] . fname = e.target.value 
    setData(data1)
  }

  return (
    <>
          <div >
            <input ref={ref1} />&nbsp;&nbsp;&nbsp;
            <button onClick={handelClickToAdd}>Add Data</button>
          </div><br /><br />
        
      <div>
        <table border={1}>
          <thead>
          
            <tr >
              <td>Name</td>
              <td>Edit/Save</td>
              <td>Delete Data</td>
            </tr>

          </thead>

          <tbody>
            {
              data.map((r)=>{

                return(
                  <tr key={r.id}>
                    <td><input value={r.fname} id={r.id} onChange={HandelChange}></input></td>
                    <td>
                    {

                      r.isEdit ? 
                    <button onClick={()=>handelSaveClick(r.id)}>Save</button> 
                    :
                    
                    <button onClick={()=>handelEditClick(r.id)}>Edit</button>
                    }
                    </td>

                    <td>
                     <button onClick={()=>handelDeleteClick(r.id)}>Delete</button> 
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
