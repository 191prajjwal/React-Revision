import React, { useState } from 'react'

export default function Styler() {
    const [color,setColor]=useState 
    ({backgroundColor:"cornflowerblue",textShadow:"2px 2px 2px red"})//giving initial css

//function to generate random values b/w 0 to 255 so that it can be used for giving rgb color
    function changebcg(){

        function rgbGenerator() {
            let num=Math.random()
            return Math.floor(num*(256))
        }

      let r=rgbGenerator()
      let g=rgbGenerator()
      let b=rgbGenerator()

      let r1=rgbGenerator()
      let g1=rgbGenerator()
      let b1=rgbGenerator()

      let r2=rgbGenerator()
      let g2=rgbGenerator()
      let b2=rgbGenerator()

        setColor({transition:"all 0.5s linear",backgroundColor:`rgb(${r},${g},${b})`,color:`rgb(${r1},${g1},${b1})`,textShadow:`2px 2px 2px rgb(${r2},${g2},${b2})`})
    }


  return (
    <>
    <div  style={color}>{/*color state will changed on clicking button and any random color will be generated*/}
        <hr color="green"/>
        <h2>I am styler component</h2>
       
        <button onClick={changebcg}>Change Color</button>
        <hr color="green"/>
    </div>
    </>
  )
}
