import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Links from "./components/Links";
import User from './components/User';
import Aadhar from './components/Aadhar'
import UserDetails from "./components/UserDetails";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Increment</button>
      
      <BrowserRouter>
      <Links/>  {/* since it uses navlink which is react router component hence it should be inside BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/aadhar" element={<Aadhar/>}/>
          <Route path="/user/:id" element={<UserDetails/>}/>
          <Route path="/user/:id/aadhar/:no" element={<Aadhar/>}/>
          <Route path ="/Error" element={<h1>This is error route</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
