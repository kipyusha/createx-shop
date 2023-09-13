import React from 'react'
import styled from 'styled-components'
import Carousel from '../../features/carousel'
import Footer from '../../widgets/footer/Footer'
import Header from '../../widgets/header/ui/Header'
import SliderPage from '../sliderPage/SliderPage'


const HomePage = () => {
  return (
    <Container>
        <Header/>
        <Carousel/>
        <SliderPage/>
        
        
        <Footer/>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  max-width: 1980px;
  width: 100%;
  min-height: 100vh;
  height: max-content;
  
  
`