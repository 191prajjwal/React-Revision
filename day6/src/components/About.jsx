import { NavLink, useNavigate } from "react-router-dom";


export default function About() {
  const navigate= useNavigate()
  return (
    <>
    <h1>You came to About page</h1>
    <button onClick={()=>{
      navigate("/")
    }}>Home</button>
    <br />
    <br />
    <button onClick={()=>{navigate("/contact")}}>Contact</button>
    <br />
    <br />
    <button onClick={()=>{navigate(-2)}}>Prev</button>{/* use navigate remembers the previous route if -1 is there and 2nd last previous if -2 there */}
    <br />
    <br />
    <NavLink style={{backgroundColor:"#1a1a1a", padding:"10px 20px",color:"white",borderRadius:"5px"}}to ="/user">User Navlink</NavLink>
    </>
  )
}

// in somecases we can use useNavigate and Navlinks interchangebly but when we have to navigate based on somecondition automatically without anyclick and all like if login successfull navigate to /dashboard this can be done using useNavigate.
