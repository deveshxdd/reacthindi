import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Profile from "./components/Profile";
function App() {


  return (
    <>
      <Profile username = "Sweater" img ="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" price = "120"/>
      <Profile username = "Jacket" img ="https://images.pexels.com/photos/1805853/pexels-photo-1805853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" price = "80"/>
      <Profile username = "Hoodie" img ="https://images.pexels.com/photos/18567071/pexels-photo-18567071/free-photo-of-man-posing-in-black-hoodie-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" price = "180"/>
      <Profile username = "Leather Jacket" img ="https://images.pexels.com/photos/4012266/pexels-photo-4012266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" price = "300"/>
    </>
  )
}

export default App
