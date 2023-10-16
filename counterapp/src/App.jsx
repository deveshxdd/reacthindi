import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter , setcounter] = useState(15)  // use state is hook iske andr jo variable declare hota hai usko humlog as a fuction use krskte h
const up = ()=>{
  // counter = counter+1
  // console.log("cliced");
setcounter(counter+1)
}
let down = ()=>{
  // counter = counter-1
  // console.log("cliced");
  if(counter==0){
    return
  }
  setcounter(counter-1)
  
}
  return (
    <>
      <div>
       <p>counter value is {counter}</p>
       <br />
       <button onClick={up}>levelup</button>
       <br />
       <button onClick={down}>leveldown</button>
      </div> 
     
    </>
  )
}

export default App
