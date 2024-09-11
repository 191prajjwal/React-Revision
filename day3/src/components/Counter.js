import React from 'react'

export default function Counter() {
    let count=0;
    function handleClick(){
        console.log(count)
         count= count+1 
         
        

    }

  return (
    <div>
        <hr/>
        <h2>I am counter with count as a variable</h2>
         <h3>The count value is {count}</h3>{/*//on clicking below button the count variable is updated but since count is a local variable in this functional component and react is designed in such a way that on changing variables the ui component is nor re rendered hence the changes are not reflected in UI.
         
         to trigger re render and remember the values we have to use states*/}
        <button onClick={handleClick}>Increment</button>
        <hr/>
    </div>
  )
}
