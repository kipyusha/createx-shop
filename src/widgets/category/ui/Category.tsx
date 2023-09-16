import React from 'react'
import styled from 'styled-components'
import CategoryCard from '../../../features/category/ui/CategoryCard'


const Category = () => {
  return (
    <Container><CategoryCard/></Container>
    
  )
}

export default Category

const Container = styled.div`
  width: 100%;
  height: 440px;
  display: block;
`