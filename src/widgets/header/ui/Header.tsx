import React from 'react'
import styled from 'styled-components'
import Carousel from '../../carousel/Carousel'
import NavBar from '../../../features/navBar/ui/NavBar'
import TopBar from '../../../features/topBar/ui/TopBar'

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



