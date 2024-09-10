import React from 'react'

export default function Blog({age}) {
  return (
    <div><hr color="pink"/>
        <h3>I am blog component</h3>
        <p>I am passed as a children prop of about component</p>
        <p>{age}</p>
        <hr color="pink"/>
    </div>
  )
}
