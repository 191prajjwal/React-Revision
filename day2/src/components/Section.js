import React from 'react'
import About from './About'
import Blog from './Blog'
export default function Section({age}) {
  return (
    <div><hr color="blue"/>
        <h3>I am section component</h3>
        <h4>my age is {age}</h4>
        <About age={age}>
          
          <Blog age={age}/>    {/* here component blog is passed as a prop to about component hence blog is called children prop of about component*/}
        </About>
        <hr color="blue"/>
       
    </div>
  )
}

//from one component passing props to another component even though it is not using it but passing it to its children then this is called prop drilling or threading props