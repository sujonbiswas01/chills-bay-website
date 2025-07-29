import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import Home from '../components/Home';
import DrinkPage from '../pages/DringPage/DrinkPage';
import Error from '../pages/Error/Error';
const Index = () => {
    return (
        <>
            <BrowserRouter>
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dring" element={<DrinkPage/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>


        </>
    )
}

export default Index