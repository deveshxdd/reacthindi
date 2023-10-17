
import { useState } from "react"
function App() {
  const [color, setcolor] = useState("green")

  return (
    
   <div className="w-full h-screen" style={{backgroundColor: color}}>
    <button className = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium" style={{backgroundColor: 'red'}} onClick={setcolor("red")}> RED</button>
    <button className = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium" style={{backgroundColor: 'red'}} onClick={setcolor("green")}> GREEN</button>
    <button className = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium" style={{backgroundColor: 'red'}} onClick={setcolor("blue")}> BLUE</button>
    <button className = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium" style={{backgroundColor: 'red'}} onClick={setcolor("yellow")}> YELLOW</button>
   </div>
   
  )
}

export default App
