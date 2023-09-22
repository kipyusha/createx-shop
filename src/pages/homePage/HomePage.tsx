import React from 'react'
import styled from 'styled-components'
import Carousel from '../../widgets/carousel'
import BannerBlock from '../../widgets/bannerBlock'
import Footer from '../../widgets/footer/Footer'
import Header from '../../widgets/header/ui/Header'
import SliderMain from '../../widgets/sliderMain'
import SliderProductMain from '../../widgets/sliderProduct/ui/SliderProductMain'
import CategoryCard from '../../widgets/category'
import PopularCategory from '../../widgets/PopularCategory'


const HomePage = () => {
  return (
    <Container>
        <Header/>
        <Carousel/>
        <SliderMain/>
        <CategoryCard/>
        <SliderProductMain/>
        <BannerBlock/>
        <PopularCategory/>
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