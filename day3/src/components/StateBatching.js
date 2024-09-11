import React, { useState } from 'react'

export default function StateBatching
() {
    const [count,setCount]=useState(0)

    const handleClick1=()=>{
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        //even though i used 5 time set count to increment the count but the count will be incremented by one on each click rather than being incremented by 5.

        //this is because when handleClick is called react engine do not execute all setCount() one after another immidiately. it will do something called as batching and scheduling

        //Batching: it will make a batch of all setcounts and delay the execution this is called batching

        //these setCount are batched inside queues and wait for executuion this is called queuing

        //then once batching and queuing is done react starts executing each  setcount one by one in order they came in queue and there is one temporary state associated with the setcount that stores the updated state so this temp state =0 initially then as soon as first setCount(count+1) is done temp state=1 then  2nd setcount came and again count is = count+1 means 0+1 so 1 so temp state is overwritten by 1 and at last 5th setcount will also do same and temp state again overwritten by 1 now 

        //this temp state value will be updated to our original count value and count =1 then a single re rendering is done.

        //this batching,queuing and single re-rendering makes react optimized and efficient
        //setCount(count+1) here the temp state is updated based on current value of count that is 0 so temp state is 0+1.

        setCount(count+5)

        //if this is last then temp state will be 5 at last and count =5 on each click


    }

    function handleClick2(){

        setCount((prev)=>{
            return prev+1
        })
        //same thing we can write as

        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        //in arrow function we may write direct things if only 1 return is there inside {}

        //here also batching and queuing is done 

        //the catch here is prev initially = count means 0 then as soon as first time this setCount with callback is called prev is updated to prev+1 means 0+1 then next time it is 1+1 =2 so prev=2 next time it is prev+1 =3 and then next time it is 4 so finally it is four.
        //now this four is wriiten in our original count and now a single re rendering is done.
        //
        
        //so this setcount with callback will remember previous temporary state too and based on that it will update next temp state.
       


    }


  return (
    <div><hr color="teal"/>
        <h2>State Batching and Scheduling</h2>
        <h3>Count:{count}</h3>
        <p>increment type 1 is using syntax of setState without callback so the final temp state is used to setcount effectively on each click</p>
        <button onClick={handleClick1}>Increment type 1</button>
        <p>increment type 2 is using syntax of setState with callback so each temp state is based on previous temp state value</p>
        <button onClick={handleClick2}>Increment type2</button>
        <hr color="teal"/>
    </div>
  )
}
