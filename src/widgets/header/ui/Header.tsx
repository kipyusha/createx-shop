import React from 'react'
import styled from 'styled-components'
import NavBar from '../../../features/navBar/ui/NavBar'
import TopBar from '../../../features/topBar/ui/TopBar'

const Header = () => {
  return (
    <Container>
        <TopBar/>
        <NavBar/>
    </Container>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 130px;
    
`



