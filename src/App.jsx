import { useState } from 'react'
import Index from './Routes/Index'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Index/>
    </>
  )
}

export default App
