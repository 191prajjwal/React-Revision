import React, { useState } from 'react'

export default function FormsOpti() {

    const[fields,setFields]=useState({username:"",email:"",password:"",show:false})

    //the fields state is an object that is consisting the keys corresponds to each input field and a boolean show .

    //we can use these keys as separate state for each input fileds

    function handleSubmit(e){
        e.preventDefault()
        if(fields.username!==""&&fields.email!==""&&fields.password!=="")
        setFields((prev)=>({...prev,show:true}))

        //we are using other way of set state that remembers previous value like setState((prev)={prev+1})
    else
    alert('all fields are mandatory')
    }
  return (
    <div>
        <hr color="blue"/>
        <h2>I am a form with optimized states</h2>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' value={fields.username} onChange={(e)=>{
                setFields((prev)=> ({...prev,username:e.target.value})
        )}}
        
        // so prev will remember the previous edit and we de structure it and change the keys as we want 
        />
            <br />
            <br />
            <input type="email" placeholder='Email' value={fields.email} onChange={(e)=>{
                setFields((prev)=> ({...prev,email:e.target.value})
        )}} />
            <br />
            <br />
            <input type="password" placeholder='Password' value={fields.password} onChange={(e)=>{
                setFields((prev)=> ({...prev,password:e.target.value})
        )}}/>
            <br />
            <br />
            <button>Submit</button>
        </form>

        {fields.show&& 
        <div>
            <p>Hello {fields.username}</p>
            <p>Your Email is {fields.email}</p>
            <p>Your Password is {fields.password}</p>
        </div>
        }
    </div>
  )
}
