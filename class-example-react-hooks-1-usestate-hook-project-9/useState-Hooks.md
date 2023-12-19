<!-- 
      
   ----==---===--===--=--=--=--=>>       React Hooks       <<---- ---===--===--=--=--=--=---==--==

    [1] useState Hook  ===>>



    [#]--- WE are add state to  the component with the help of react hooks
    
    [#]--- there are many react hooks provided by the react in this case we are going to use   {[useState]} React Hook

    [#]---  useState Declaration syntax is 

    const [state , setState] = useState(initial value)         // here State is a variable   AND  setState is a function



    [2]   PARAMETERS  ====>>  When we call useState we have to pass initial value to the function that value can be any type    ( number , string ,object , array ....etc)

    [#]--- this parameter is ignored after initial render 






    [3]  RETURN TYPE =====>>  useState returns an array with exaactly two values 

        [1]  Current State ==>>==>> during the first render it contains the initial value

        [2] the state funnction that let you to Update the state 
        to diffrent value and render the component 


        [#]--- modify App.jsx As follows 


        import { useState } from 'react'
        import './App.css'

    function App() {
      const [count, setCount] = useState(0)
        const buttonClick = () => {
          setCount(count + 1)
        }

      return (
        <>
          <div>

            <button onClick = {buttonClick}>Click To Count</button>
            <p>Count is {count}</p>
          </div>


        </>
      )
    }
export default App

    [#]--- in above example we called useState function with the initial value 0 it will retunn array which cinsist of two values 

        [1] name of the variable (count)

        [2] function to update value of varibable (setCount)

    [#]---on buttonClick we are changing the value of count variable when the value of count variable changes app component is re-render

  
 -->