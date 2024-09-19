import React from 'react'
import "./links.css"
import { Link,NavLink } from 'react-router-dom'
export default function Links() {
  return (
    //links are just changing the url and based on url where to go is decided by router .
    <div>
        <a href="/">Home</a> {/* it refreshes the whole page so it is not recoomended to use because it restarts the whole webpage so all states and all lose the value*/}
        <br />
        <Link to ="/"> Home </Link>  {/* it do not refreshes the whole page so it can be used*/}
        <br />

        <NavLink to ="/about">About</NavLink> {/* it do not refreshes the whole page and it do have one active class attached to it when it is active which makes easier to target it to do styling and all*/}
        <br />
        <NavLink to ="/contact">Contact</NavLink>
        <br />
        <NavLink to ="/aadhar">Aadhar</NavLink>
        <br />
        <NavLink to ="/user">User</NavLink>
        <br />
        <NavLink to ="user/prajjwal">Prajjwal</NavLink>
        <br />

        <NavLink to ="user/user1/aadhar/123">User1 aadhar</NavLink>
        <br />
        <NavLink to ="user/user2/aadhar/321">User2 aadhar</NavLink>
        <br />
        <NavLink to ="user/user3/aadhar/1234" target="_blank">User 3  aadhar</NavLink>
       
        
        <br />
        
        
    </div>
  )
}
