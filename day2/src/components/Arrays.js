import React from 'react'

export default function Arrays({skills,title,multi}) {

  let arr=skills.map((item,index)=>{return <h4 key={index}><li>{item}</li></h4>})

  let final = multi.map((item,index)=>{
    return <h4 key={index}>{item.map((item,index2)=>{return <li key={index2}>{item}</li> })}</h4>
  })

    // each item in arr is list item
  return (
    
    <div>
        <h2>I am array component</h2>
        <h3>{title}</h3>
        {/* <ul>
          <li>{skills[0]}</li>
          <li>{skills[1]}</li>
          <li>{skills[2]}</li>
          <li>{skills[3]}</li>
          <li>{skills[5]}</li>
          <li>{skills[6]}</li>
          <li>{skills[7]}</li>
         
        </ul> */}
        {/* //this was manual way */}


<ul >
  {arr}
  {/* {skills.map((item)=>{return <li>{item}</li>})} */}

  {final}
</ul>
<hr/>

        

    </div>
  )
}
