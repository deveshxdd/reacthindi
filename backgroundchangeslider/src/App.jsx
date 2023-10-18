import { useState , useCallback , useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setcolor] = useState("black")
  const [length , setlength] = useState(0)
  console.log(length)
const randomcolor = useCallback(()=>{
const randcol = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
setcolor(randcol)
},[length])
useEffect(()=>{
randomcolor()
},[length])
  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      
      <input type="range" min={2} max={100} 
      onChange={(e)=>{
setlength(e.target.value)
      }}/>
      </div>
      
    
  )
}

export default App
