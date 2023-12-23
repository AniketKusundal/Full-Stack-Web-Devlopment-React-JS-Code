import { useState } from 'react'
import './App.css'

function App() {

  // Define an array 'arr' with some sample data
    let arr = [
      {id:1 , fname:'Aniket'},
      {id:2 , fname:'jack'},
      {id:3 , fname:'jhonn'}
    ]

      // Use the 'useState' hook to create a state variable 'data' and a function 'setData'
  // The initial state of 'data' is set to the contents of the 'arr' array
  const [data ,setData] = useState(arr)

  return (
    <>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {/* Use the 'map' function to iterate over the 'data' array */}
            {/* For each element 'r' in 'data', create a table row (<tr>) */}
            {/* Display the 'id' and 'fname' properties of each element in table cells (<td>) */}

          {
            data.map((r) => 
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.fname}</td>
              </tr>
            )
          }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
