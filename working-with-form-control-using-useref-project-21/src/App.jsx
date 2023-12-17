import { useRef } from 'react'
import './App.css'

function App() {
 
  const Nameref   =   useRef   (null)
  const Maleref   =   useRef   (null)
  const Femaleref =   useRef   (null)
  const Checkref  =   useRef   (null)



  const buttonClick = () => {
    // textbox
    let n = Nameref.current.value;
    console.log(n);
    
    //  Radio Button
    let gender = ''
    if (Maleref.current.checked) {
      gender = 'Male'
      console.log(gender);
    }
    
    else if (Femaleref.current.checked) {
    gender = 'Female'
    console.log(gender);
  }
  
  
  // Check Box
  let s1 = 'Deselect'
  if (Checkref.current.checked) {
    s1 = 'Selected'
  }else{
    console.log('Please Select The Condition');
  }
  console.log(s1)
}
  return (
    <>
      <div>

        <label>
          <input type="text"  ref={Nameref} placeholder='Type Anything Here'/>
        </label>

        <br/><br/>

        <label>
          <input type="radio" value='male' ref={Maleref} name='gender'/>Male
        </label>&nbsp;  &nbsp; &nbsp; 


        <label>
          <input type="radio" value='female' ref={Femaleref} name='gender'/>Female
        </label>
        <br />
        <br />

        <label>
          <input type="checkbox" name="check"  ref={Checkref}/>Select Me <p><strong>Terms And Condition : </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tenetur.</p>
        </label><br />

        <button onClick={buttonClick}>Click Here</button>
      </div>
    </>
  )
  
}

export default App
