import React from 'react'
import Section from './Section'

export default function Contact({mob,age}) {
  return (
    <div><hr color="violet"/>
        <h2>I am contact component</h2>
        <h3>My contact number is {mob}</h3>
        
        <Section age={age}/>
        <hr color="violet"/>
        
    </div>
  )
}
