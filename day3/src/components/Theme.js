import React, { useState } from 'react'

export default function Theme() {
const [bgColor,setBgColor]=useState("white")
const [color,setColor]=useState("black")
const [theme,setTheme]=useState("Dark")
//used three states one for changing bckgrnd color , one for font color and one to change the button text

//in next component named as ThemeOpti.js
//we will use only one state and perform the same task


  function handleTheme(){

    if(theme==="Dark")
    {
setBgColor("black")
setColor("white")
setTheme("Light")
return
    }
    setBgColor("white")
    setColor("black")
    setTheme("Dark")



    }
  return (
    <div style={{backgroundColor:`${bgColor}`,color:`${color}`,transition:"all 0.6s ease-in"}}>
        <hr color="orange"/>
        <h2>This is theme switcher</h2>
        <p style={{textAlign:"justify",padding:`10px`}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate voluptatum, perferendis suscipit modi distinctio atque accusantium repellendus quisquam reprehenderit minus rerum aut et nemo earum recusandae! Libero, quas qui? Inventore maxime assumenda earum modi molestias dolorum illo delectus, optio, fugiat, quae iusto animi libero hic suscipit adipisci nam blanditiis veniam deleniti. Minima fugit dolore possimus numquam, nam eum debitis, similique nisi quidem, quibusdam nostrum ab atque tenetur officia molestiae eligendi quis? Ducimus nisi quibusdam quidem eum enim laborum pariatur aliquam quisquam, cum repudiandae placeat commodi incidunt, dicta a porro explicabo cupiditate fugit impedit ad minima nostrum laudantium eius consectetur?</p>

        <button onClick={handleTheme}>{theme} Mode</button>
        <hr color="orange"/>
    </div>
  )
}
