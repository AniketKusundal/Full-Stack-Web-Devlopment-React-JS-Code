import { useReducer } from 'react'
import './App.css'

const Reducer =  (state , action)  => {

  switch (action.type) {
    case 'increment':
      return({count:state.count + action.value})

    case 'decrement':
      return({count:state.count-action.value})
  }
  return({count : 0})
}



function App() {


  const [state , dispatch] = useReducer (Reducer , {count:0})   // UseReducer Syntax


  const increment = () => {
    dispatch({type:'increment' , value:+10})
  }

  const decrement = () => {
    dispatch({type:'increment' , value:-5})
  }

  const reset = () => {

    dispatch({type:'reset' , count:0})
  }
  
  return (
    <>
     <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>  
     </div>

     <div>
      <p>count is : {state.count}</p>
     </div>
    </>
  )
}

export default App
