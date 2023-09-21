import React from "react";
import styled from "styled-components";
import SliderProduct from "../../../features/slider/SliderProduct/ui/SliderProduct";

const SliderProductMain = () => {
  return (
    <Container>
      <TitleBlockText>
        <TitleNew>New arrivals</TitleNew>
        <Description>
          Check out our latest arrivals for the upcoming season
        </Description>
        <LinkDescription>See the collection here</LinkDescription>
      </TitleBlockText>

      <SliderProduct dots={true} slidesToShow={6} swipe={true} />
    </Container>
  );
};

export default SliderProductMain;

const Container = styled.div`
  width: 100%;
  max-width: 1860px;
  height: 690px;
  margin: 0 30px;
`

const TitleBlockText = styled.div`
  text-align: center;
  margin-top: 160px;
  margin-bottom: 60px;
`;

const TitleNew = styled.h1`
  color: #1e212c;
  font-family: Lato;
  font-size: 46px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  margin: 0 0 24px;
`;

const Description = styled.p`
  color: #787a80;
  text-align: center;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
`;

const LinkDescription = styled.a`
  color: #17696a;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration-line: underline;
  cursor: pointer;
`;
