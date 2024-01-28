import { useNavigate } from "react-router-dom";
import { Login } from "./Login";
import App from "../App";

export const Home = (prop) => {
  const Navigate = useNavigate();
  console.log(prop.prop);


  

  return (
    <>
      <div>
        {prop.prop ? `You are Logged In  ` : (
          
            <button onClick={() => Navigate('./Login')}>Login Here</button>

        )}

   


      </div>
    </>
  );
};
