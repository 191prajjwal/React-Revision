import React, { useState } from 'react'

export default function Forms() {

    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setpassword]=useState("")
    const[show,setShow]=useState(false)


   function handleSubmit(e){
            e.preventDefault()
            //by default on submitting forms the webpage is refreshed and our react app start from fresh so to avoid it we do prevent this defult behaviour
            if(username!=="" && email!=="" && password!=="")
            setShow(true)
        else{
            alert("all fields are mandatory")
            setShow(false)
        }
   }
  return (
    <div>
        <hr color="violet"/>
        <h2>Form Handling</h2>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />

            {/* e is the event that is triggered and e.target refers to the element that triggered the event */}
            {/* by setting value as state now whatever the state is will be the value of this input and then onchanging value we set state to the changed value that is typed in input so we are making both value of input and state binded together so that consistancy is there at any point of time b/w these two so at any point of time state is value and value is state this is called 2 way data binding 

            also the components in react such as form which are controlled using states are known as controlled components.
            
            */}
            <br />
            <br />
            <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <br />
            <br />
            <input type="password" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
            <br />
            <br />
            <button>Submit</button>
        </form>

        {show&&<div>
            <p>Hello {username}</p>
            <p>your email is {email}</p>
            <p>Your password is {password}</p>
            </div>
            }
            {/* this is conditonal rendering so when show is true then the div is created and if show is wrong div will not be created this is one application of short circuit propery of boolean operators */}
        
    </div>

    // here we used 4 states to serve our purpose but we may use a single state to do that and it is done in FormsOpti component
  )
}
