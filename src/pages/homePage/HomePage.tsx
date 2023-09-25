import React from 'react'
import styled from 'styled-components'
import Carousel from '../../widgets/carousel'
import BannerBlock from '../../widgets/bannerBlock'
import Header from '../../widgets/header/ui/Header'
import SliderMain from '../../widgets/sliderMain'
import SliderProductMain from '../../widgets/sliderProduct/ui/SliderProductMain'
import CategoryCard from '../../widgets/category'
import PopularCategory from '../../widgets/PopularCategory'
import SliderTrend from '../../widgets/SliderTrend'
import SliderSale from '../../widgets/SliderSale'
import Footer from '../../widgets/footer'


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
        <SliderTrend/>
        <SliderSale/>
        <Footer/>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  max-width: 1980px;
  width: 100%;
  height: max-content;
`