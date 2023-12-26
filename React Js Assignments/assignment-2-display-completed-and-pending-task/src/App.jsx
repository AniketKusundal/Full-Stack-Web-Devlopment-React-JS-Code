
import { useMemo, useState } from 'react'
import './App.css'



function CreateToDo() {
  let arr = []
  for (let i = 1; i < 50; i++) {
    arr.push({id:0, task:"ToDo"+(i), complted:Math.random()>0.5})
    
  }

  return arr
}

let Todo = CreateToDo()
// console.log(Todo); 

function FilterToDo(Type){
  let StartTime  = performance.now()


  while (performance.now().StartTime<1500) { // do noting for 1500 ms to emulate code or show code 
        
  }
    console.log("Filter Called");
    if (Type === 'active') {
      return Todo.filter((r)=>!r.complted)
    }
    else if (Type === 'completed'){
      return Todo.filter((r)=>!r.Notcompleted)
}

    return Todo
}





function App() {
  const [Show, setShow] = useState(null); // or useState('')
  const Todo1 = useMemo(() => FilterToDo(Show), [Show]);

  const buttonClick1 = () => {
    setShow('all');
  };

  const buttonClick2 = () => {
    setShow('completed');
  };

  const buttonClick3 = () => {
    setShow('active');
  };

  const HandelChange = (e) => {
    SetDark(e.target.value);
  };

  return (
    <>
      <div style={{backgroundColor:'gray', color:'black'}}>
       
        <br/>
        &nbsp;&nbsp; &nbsp; &nbsp;    
        <button onClick={buttonClick1}>All</button> &nbsp;&nbsp; &nbsp; &nbsp;
        <button onClick={buttonClick2}>Completed</button>  &nbsp;&nbsp; &nbsp; &nbsp;
        <button onClick={buttonClick3}>Not Completed</button>  &nbsp;&nbsp; &nbsp; &nbsp;
        <br />
        <br />

        <ul>
          {Todo1.map((r) => (
            <li key={r.id}>
              {r.complted ? <s>{r.task}</s> : r.task}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App