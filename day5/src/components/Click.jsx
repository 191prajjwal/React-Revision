import React, { useEffect, useState } from "react";

export default function Click() {
  const [clicks, setClicks] = useState(0);
  useEffect(() => {


    function fun() {
      console.log("Clicked"); 
    }

    document.addEventListener("click", fun); //setup

    return () => document.removeEventListener("click", fun);//cleanup
    
  }, [clicks]);
  function handleClick() {
    setClicks(clicks + 1);
  }
  return (
    <div>
      <h2>button is clicked {clicks} times</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
