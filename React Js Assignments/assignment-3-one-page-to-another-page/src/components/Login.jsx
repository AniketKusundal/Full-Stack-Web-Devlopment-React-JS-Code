import { useRef } from "react";
import { useNavigate } from "react-router-dom";


export const Login = (p) => {
  const Navigate = useNavigate();
  const ref1 = useRef(); // Here ref1 is the Variable
  
  function Set() {
    console.log(p);

    p.args.fun1(true);
    p.args.fun2(ref1.current.value);
    Navigate('/');
  }

  return (
    <>
      <div>Login</div>
      <input type="text" ref={ref1}></input>
      <br />

      <button onClick={()=>Set()} >Login</button>
    </>
  );
};

export default Login;