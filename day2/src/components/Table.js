import React from 'react'

export default function Table({data}) {
    let final= data.map((obj,index)=>{return <tr key={index} > 
    <td>{obj.name}</td>
    <td>{obj.age} </td>
    <td> {obj.city}</td>
    </tr>})
  return (
    <div>
       <h3>Table</h3>
       <table>
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
            </tr>
        </thead>
        <tbody>
            {final}
        </tbody>
       </table>
    </div>
  )
}
