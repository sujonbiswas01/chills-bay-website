import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import Home from '../components/Home';
import DrinkPage from '../pages/DrinkPage/DrinkPage';
import Error from '../pages/Error/Error';
import ClubPage from '../pages/ClubPage/ClubPage';
import Payment from '../pages/PaymentPage/Payment';
import Contact from '../pages/ContactPage/Contact';
import { Wrapper } from '../pages/ClubPage/common/Wrapper';
const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Wrapper>
                            <Home />
                        </Wrapper>

                    } />
                    <Route path="/drink" element={<Wrapper>
                        <DrinkPage />
                    </Wrapper>} />
                    <Route path="/club" element={<Wrapper isDark>
                        <ClubPage />
                    </Wrapper>} />
                    <Route path="/cart" element={<Wrapper>
                        <Payment />
                    </Wrapper>} />
                    <Route path="/contact" element={<Wrapper>
                        <Contact />
                    </Wrapper>} />
                    <Route path="*" element={<Wrapper isDark>
                        <Error />
                    </Wrapper>} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default Index