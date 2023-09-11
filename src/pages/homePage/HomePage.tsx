import React from 'react'
import styled from 'styled-components'
import Footer from '../../widgets/footer/Footer'
import Header from '../../widgets/header/Header'

const HomePage = () => {
  return (
    <Container>
        <Header/>
        <Footer/>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  width: 1980px;
  min-height: 100vh;
  height: max-content;
`