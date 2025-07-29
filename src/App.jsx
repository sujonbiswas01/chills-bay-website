import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "@heroui/react";
import MyNavbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyNavbar/>
    
    </>
  )
}

export default App
