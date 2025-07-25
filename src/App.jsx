import { useState } from 'react'
import './App.css'
import {Button, HeroUIProvider} from "@heroui/react";
import Button1 from './components/Button';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroUIProvider>
 <h1 className='text-center'>hello word</h1>
 <Button1/>
    </HeroUIProvider>
   
      
    </>
  )
}

export default App
