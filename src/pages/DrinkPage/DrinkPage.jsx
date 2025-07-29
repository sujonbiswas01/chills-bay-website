import React from 'react'
import DrinkHero from './DrinkHero'
import FindPlace from './FindPlace'
import DrinkCarousel from './DrinkCarousel'
import Restuarants from './common/RestuarantsCard'
import Mymap from './Mymap'

const DrinkPage = () => {
  return (
    <>
    <DrinkHero/>
    <FindPlace/>
    <Restuarants title="Popular Restuarants in Lagos"/>
    <DrinkCarousel/>
    <Restuarants title="Resturants nearby"/>
    <Mymap/>
    </>
  )
}

export default DrinkPage