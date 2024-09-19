import React from 'react'
import { useParams } from 'react-router-dom'
import Prajjwal from './Prajjwal'

export default function UserDetails() {

    const {id}=useParams()//use params is used to get dynamic params present in our url
  return (
    <div>
        <h1>User Details</h1>
        {id==="prajjwal" && <Prajjwal/>}
        {id==="user1"  && <h2>I am user1</h2>}
    </div>
  )
}
