import React from 'react'

export default function About(props) {
  return (
    <div><hr color="yellow"/>
        <h1>I am about component</h1>
        {props.children}
        <h2>{props.age}</h2>
        <hr color="yellow"/>
    </div>
  )
}
