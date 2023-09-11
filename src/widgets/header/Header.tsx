import React from 'react'
import styled from 'styled-components'
import Carousel from '../carousel/Carousel'
import NavBar from './NavBar'
import TopBar from './TopBar'

const Header = () => {
  return (
    <Container>
        <TopBar/>
        <NavBar/>
        <Carousel/>
    </Container>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 130px;
    
`



