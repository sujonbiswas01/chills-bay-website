import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import Home from '../components/Home';
import DrinkPage from '../pages/DrinkPage/DrinkPage';
import Error from '../pages/Error/Error';
import ClubPage from '../pages/ClubPage/ClubPage';
const Index = () => {
    return (
        <>
            <BrowserRouter>
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/drink" element={<DrinkPage/>}/>
                    <Route path="/club" element={<ClubPage/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>


        </>
    )
}

export default Index