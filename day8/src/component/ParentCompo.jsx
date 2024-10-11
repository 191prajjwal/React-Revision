import { useCallback, useState } from "react";
import ChildCompo from "./ChildCompo";


export default function ParentCompo(){
    console.log("parent is rendered")
    const[parentCount,setParentCount]=useState(0)

    const[childCount,setChildCount]=useState(0)

    const  handleChildCountClick=useCallback(()=>{
        
            setChildCount(childCount+1)

    },[childCount])

    return (
        <div>
            <h1>Parent Component</h1>
            <h2>Parent Count : {parentCount}</h2>
            <button onClick={()=>setParentCount(parentCount+1)}>Increment Parent Count</button>


            <hr />
           <ChildCompo childCount={childCount} handleChildCountClick={handleChildCountClick}  />
        </div>
    )
}