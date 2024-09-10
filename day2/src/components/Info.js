import React from 'react'

export default function Info({name,age}) {
  return (
    <div><hr color="cornflowerblue"/>
        <h2>I am Info Component</h2>
        <span>My name is</span><mark>{name}</mark>
        <span>My age is</span><mark>{age}</mark>
        <hr color="cornflowerblue"/>
    </div>
  )
}
