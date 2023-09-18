import React from 'react'
import styled from 'styled-components'
import Carousel from '../../features/carousel'
import Category from '../../widgets/category'
import Footer from '../../widgets/footer/Footer'
import Header from '../../widgets/header/ui/Header'

import SliderMain from '../../widgets/sliderMain'
import SliderProductMain from '../../widgets/sliderProduct/ui/SliderProductMain'


const HomePage = () => {
  return (
    <Container>
        <Header/>
        <Carousel/>
        <SliderMain/>
        <Category/>
        <SliderProductMain/>
        <Footer/>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  max-width: 1980px;
  width: 100%;
  
  height: 3000px;
  
  
`