import React from "react";
import Contact from './Contact'
export default function Header(props) {
  return (
    <>
    <div>
    <hr color="green"/>
      <h1>I am Header component</h1>
      
      <h2>My name is {props.name} and age is {props.age}</h2>
    </div>
    <Contact mob={contactNumber} age={props.age}/>
    <hr/>
    <hr color="green"/>
    </>
  );
}
const contactNumber= 7067854380