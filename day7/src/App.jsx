import "./App.css";
import Counter from './components/counter'
import {useSelector,useDispatch} from 'react-redux'
import { setBgColor } from "./components/Redux/actions";
import Comp1 from "./components/comp1";
import { createContext } from "react";

const myContext=createContext()


export default function App() {
  
  const bgColor=useSelector((state)=>state.bgColor)
  const dispatch=useDispatch()

  const name= "Prajjwal shukla"
  
  
  return (
    <div style={bgColor}>
      <br />
      <button onClick={()=>{
        dispatch(setBgColor("green"))
      }}>Change BG color</button>
      <Counter />
      <br />
      <br />
      <br />
      <br />
      <myContext.Provider value={name}>
      <Comp1/>
      {/* we are giving context value to whole path og comp1 */}
      </myContext.Provider>
    
      
    </div>
  );
  
}

export {myContext}

 

