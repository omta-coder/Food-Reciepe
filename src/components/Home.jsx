import React from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import PopularSlider from './PopularSlider'

const Home = () => {
  return (
    <>
   <div className="main">
    <Navbar/>
    <PopularSlider/>
    <TrendingSlider/>
   </div>
    </>
  )
}

export default Home