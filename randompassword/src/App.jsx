import { useState , useCallback , useEffect , useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [pass, setpass] = useState("")
  const passref = useRef(null)
 const copypasstoclipboard = useCallback(()=>{
  passref.current?.select()
  passref.current?.setSelectionRange(0,3)
window.navigator.clipboard.writeText(pass)
 },[pass])
 
const Passwordgenerator = useCallback(()=>{
let pas = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz"
if(number){
  str+="0123456789"
}
if(character){
  str+="!@$%^&*()_+=[]{}"
}
for(let i = 1; i <= length; i++){
  let char = Math.floor(Math.random()*str.length+1)
   pas += str.charAt(char)
}
setpass(pas)
},[length,number,character,setpass])
  
useEffect(()=>{
Passwordgenerator()
},[length,number,character,Passwordgenerator])

  return (
    <>
    
      <div className="w-full max-w-md mx-auto shadow-md rounder-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className='text- 4xl text-center text-white my-3'>Random Password Generator</h1>
    <div className="flex shadow rouder-lg overflow-hidden mb-4">
      <input type="text" value={pass} placeholder='password' readOnly className= ' outline-none w-full py-1 px-3' ref={passref}/>
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink 0'
      onClick={copypasstoclipboard}>copy</button>
      
    </div>
    <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={10}  value={length} className='cursor-pointer'
          onChange={(e)=>{
            setlength(e.target.value)
          }}
          />
          <label>Length: {length} </label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"  defaultChecked = {number} 
          onChange={ ()=>{
            setnumber(prev=>!prev)
           } }/>
          <label>Number</label>
          <input type="checkbox"  defaultChecked = {character} 
          onChange={ ()=>{
            setcharacter(prev=>!prev)
          }}/>
          <label>Character</label>

        </div>
      </div>
      </div>
    </>
  )
  }

export default App
