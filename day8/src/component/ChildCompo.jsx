import React, { useState } from "react"

 function ChildCompo({childCount,handleChildCountClick}){
    const[personalCount,setPersonalCount]=useState(0)
    console.log("child is rendered")
    return(
        <div>
            <h1>Child Component</h1>
            <h2>Child Count : {childCount}</h2>

<button onClick={handleChildCountClick}>Inc child Counter</button>


            <h3>Personal Count : {personalCount}</h3>

            <button onClick={()=>setPersonalCount(personalCount+1)}>Inc</button>
        </div>
    )
}

export default React.memo(ChildCompo)