import React from 'react'
import { useState } from "react"

function Apps() {
    const [color, setcolor] = useState("green")
  return (
   

    
      
     <div className="w-full h-screen" style={{backgroundColor: color}}>
        
      <button className = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" style={{backgroundColor: "red"}} onClick={()=>setcolor("red")}> RED</button>
      <button className = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" style={{backgroundColor: "green"}} onClick={()=>setcolor("green")}> GREEN</button>
      <button className = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" style={{backgroundColor: "blue"}} onClick={()=>setcolor("blue")}> BLUE</button>
      <button className = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" style={{backgroundColor: "yellow"}} onClick={()=>setcolor("yellow")}> YELLOW</button>
      </div>
    

     
  )
}

export default Apps
