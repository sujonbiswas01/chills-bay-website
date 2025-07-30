import React from 'react'
import ClubHero from './ClubHero'
import DrinkCard from './common/DrinkCard'
import ClubCarousel from './ClubCarousel'
import Mymap from './Mymap'

const ClubPage = () => {
  return (
    <>
      <ClubHero />
      <DrinkCard title="Popular Night Clubs" />
      <ClubCarousel />
      <DrinkCard title="Bars and Night clubs near you" />
      <Mymap />
    </>
  )
}

export default ClubPage