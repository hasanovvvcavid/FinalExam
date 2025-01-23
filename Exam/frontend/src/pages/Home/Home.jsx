import React from 'react'
import Hero from '../../components/Hero/Hero'
import Products from '../../components/Products/Products'
import Trusted from '../../components/Trusted/Trusted'
import Leadership from '../../components/Leadership/Leadership'
import Services from '../../components/Services/Services'

const Home = () => {
  return (
    <div>
        <Hero />
        <Products />
        <Trusted />
        <Leadership />
        <Services />
    </div>
  )
}

export default Home