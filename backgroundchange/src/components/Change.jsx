import React from 'react'

function Change({color}) {
    
    const colour = ()=>{
        console.log("buttonclicked");
        document.querySelector('body').style.backgroundColor = color
    }
  return (
    <div>
      <button type="button" className={color} onClick={colour}>{color}</button>
    </div>
  )
}

export default Change
