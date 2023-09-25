import React from "react";
import styled from "styled-components";
import SliderSaleBlock from "../../../features/slider/SliderSale";


const SliderSale = () => {
  return (
    <Container>
      <WrapSlider>
        <Title>Sale up to 70%</Title>
        <SliderSaleBlock dots={false} slidesToShow={3} arrows={true}/>
        <Button>See all sale products</Button>
      </WrapSlider>
    </Container>
  );
};

export default SliderSale;

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 950px;
  padding-top: 80px;
`;

const WrapSlider = styled.div`
  margin: 0 345px;
`;

const Title = styled.h1`
  color: #1e212c;
  font-family: Lato;
  font-size: 46px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%; 
`;

const Button = styled.div`
width: 210px;
background: transparent;
padding: 0px 40px;
border-radius: 4px;
border: 1px solid  #17696A;
color:  #17696A;
text-align: center;
font-family: Lato;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 52px; 
letter-spacing: 0.5px;
margin: 100px auto 0;
cursor: pointer;
`