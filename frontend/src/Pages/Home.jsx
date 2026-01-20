import React from 'react'
import HeroSec from '../Components/HomeComps/HeroSec'
import FeaturedSec from '../Components/HomeComps/FeaturedSec'
import TrustedSec from '../Components/HomeComps/TrustedSec'
import ServiceSec from '../Components/HomeComps/ServiceSec'
import ReviewSec from '../Components/HomeComps/ReviewSec'

const Home = () => {
  return (
    <>
      <HeroSec />
      <ReviewSec />
      <FeaturedSec />
      <TrustedSec />
    </>
  )
}

export default Home