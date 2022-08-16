import React from 'react'
import { CarouselComp } from '../../components/carousel/CarouselComp'
import { DefaultLayout } from '../../components/layout/DefaultLayout'
import { BatHome } from '../product-bat/BatHome'
import { GlovesHome } from '../product-gloves/GlovesHome'
import { HelmetHome } from '../product-helmet/HelmetHome'
import { ShoesHome } from '../product-shoes/ShoesHome'

export const Home = () => {
  return (
    <div className="home">
<DefaultLayout>
      <CarouselComp/>
      <BatHome/>
      <HelmetHome/>
      <GlovesHome/>
      <ShoesHome/>
    </DefaultLayout>
    </div>
    
  )
}
