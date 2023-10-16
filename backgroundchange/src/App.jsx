import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Change from "./components/Change";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Change color = "bg-red-400"/>
      <Change color = "bg-green-400"/>
      <Change color = "bg-blue-400"/>
      <Change color = "bg-yellow-400"/>
    </>
  )
}

export default App
