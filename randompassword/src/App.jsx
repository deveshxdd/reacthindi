import { useState , useCallback } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [pass, setpass] = useState("")
const Passwordgenerator = useCallback(()=>{
let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz"
if(number){
  str+="0123456789"
}
if(character){
  str+="!@$%^&*()_+=[]{}"
}
for(let i = 1; i <= length; i++){
  let char = Math.floor(Math.random()*str.length()+1)
   pass = str.charAt(char)
}
setpass(pass)
},[length,number,character,pass])
  

  return (
    <>
    
      <div className="w-full max-w-md mx-auto shadow-md rounder-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className='text- 4xl text-center text-white my-3'>Password generator</h1>
    <div className="flex shadow rouder-lg overflow-hidden mb-4">
      <input type="text" value={pass} placeholder='password' readOnly className= ' outline-none w-full py-1 px-3' />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink 0'>copy</button>
      
    </div>
    <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100}  value={length} className='cursor-pointer'
          onChange={(e)=>{
            setlength(e.target.value)
          }}
          />
          <label>Length: {length} </label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"  defaultChecked = {number} 
          onChange={ ()=>{
            (prev)=>!prev
           } }/>
          <label>Number</label>
          <input type="checkbox"  defaultChecked = {character} 
          onChange={ ()=>{
            (prev)=>!prev
          }}/>
          <label>Character</label>

        </div>
      </div>
      </div>
    </>
  )
  }

export default App
