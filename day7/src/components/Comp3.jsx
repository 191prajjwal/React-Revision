import React, { useContext } from 'react'
import { myContext } from '../App'
export default function Comp3() {
  const value= useContext(myContext)
  return (
    <div>
      <hr />
      <br />
      comp3

      <h2>Name is {value}</h2>
      <br />
      <br />
      <hr />
      </div>
      
  )
}
