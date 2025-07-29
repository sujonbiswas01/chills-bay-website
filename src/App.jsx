import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "@heroui/react";
import MyNavbar from './components/Navbar';
import HeroArea from './components/HeroArea';
import ImgSection from './components/ImgSection';
import ThngsCard from './components/ThngsCard';
import ChillsBay from './components/ChillsBay';
import Carousel from './components/Carousel';
import Gallary from './components/Gallary';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyNavbar/>
    <HeroArea/>
    <ImgSection/>
    <ThngsCard/>
    <ChillsBay/>
    <Carousel/>
    <Gallary/>
    <Footer/>
    
    </>
  )
}

export default App
