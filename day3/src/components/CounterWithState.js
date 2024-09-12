import React, { useState } from 'react'

export default function CounterWithState() {
    let count1=0
    const [count,setCount]=useState(0)
function handleClick(){
    console.log(count1);//this is giving zero everytime in console since after each re render the count1 is being initialized with 0.
    
    count1=count1+1
    setCount(count+1)


}
  return (
    <div><hr color="green"/>
        <h2>I am counter with count as a state</h2>
        <h3>The count value is {count}</h3>
        <h3>count1 {count1}</h3>
        <button onClick={handleClick}>Increment</button>
        <hr color="green"/>
        
        {/* even though the whole component is re rendered but since as soon as it re renders the variable count1 is again initialized with 0 hence its effect is not visible in ui. on the other hands state count remembers its value even though the component is re-rendred
        */}

        {/* <button onClick={handleClick()}>Increment</button> */}
        {/* if we call our function like this inside {} the function will be immediately called one our react app starts and setCount will change the state and then re rendering is done then again same thing happens so react stops it and throw error :
        ERROR:Too many re-renders. React limits the number of renders to prevent an infinite loop. 

        so it is better to call function like we called in above this or we can call  it like

        onclick={()=>{handleClick()}}
        
        */}

    </div>
  )
}
