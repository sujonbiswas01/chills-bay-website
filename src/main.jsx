import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter, Route, Routes } from "react-router";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>

  </StrictMode>,
)
