import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {

  if (action.type === "edit") {
    let state1 = [...state];
    state1[action.index].isEdit = false;
    return state1;
  }

  if (action.type === "save") {
    let state1 = [...state];
    state1[action.index].isEdit = true ;
    return state1;
  }

  let state1 = [...state];
  // state [action.e.target.id].title=action.e.target.value
  state1[action.id].title = action.value;
  return state1;
}

function App() {
  const [data, dispatch] = useReducer(reducer, [  
    { id: 0, title: "aniket", isEdit: false },
    { id: 1, title: "jack", isEdit: false},
    { id: 2, title: "danny", isEdit: false },
  ]);
  //data is the current state, and dispatch is a function used to dispatch actions to the reducer, triggering state updates.



  const handelSaveClick = (index) => {
    dispatch({type:'edit', index:index})
  }

  const handelEditClick = (index) => {
    dispatch({type:'save', index:index})
  }

  const handelChange = (e) => {
    dispatch({type:'change' , id:e.target.id,value:e.target.value})
  }
  //handelChange function dispatches a "change" action to the reducer, providing the id of the item being changed and the new value



  return (
    <>
      <div>
        <table border={1}>
          <thead>
            <tr></tr>
            <tr>Title</tr>
          </thead>

          <tbody>
            {data.map((r) => {
              return (
                <tr key={r.id}>
                  <td>
                  {
                    r.isEdit ? 
                    ( <input type="text" value={r.title} id={r.id} onChange={handelChange}></input>):(r.title)
                  }
                  </td>

                  <td>
                    {
                      r.isEdit ? (
                      <button onClick={() => handelSaveClick(r.id)}>Save</button>) :(<button onClick={() => handelEditClick(r.id)}>Edit</button>)
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
