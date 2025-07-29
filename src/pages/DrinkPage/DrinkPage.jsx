import React from 'react'
import DrinkHero from './DrinkHero'
import FindPlace from './FindPlace'
import DrinkCarousel from './DrinkCarousel'
import Restuarants from './common/RestuarantsCard'

const DrinkPage = () => {
  return (
    <>
    <DrinkHero/>
    <FindPlace/>
    <Restuarants title="Popular Restuarants in Lagos"/>
    <DrinkCarousel/>
       <Restuarants title="Resturants nearby"/>
   

    </>
  )
}

export default DrinkPage