import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "@heroui/react";
import MyNavbar from './components/Navbar';
import HeroArea from './components/HeroArea';
import ImgSection from './components/ImgSection';
import ThngsCard from './components/ThngsCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyNavbar/>
    <HeroArea/>
    <ImgSection/>
    <ThngsCard/>
    
    </>
  )
}

export default App
