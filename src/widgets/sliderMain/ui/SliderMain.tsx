import React from "react";
import styled from "styled-components";
import SliderSimple from "../../../features/slider/SliderSimple/ui/SliderSimple";
import { sliderImages } from "../consts/data";

const SliderMain = () => {
  return (
    <Container>
      <SliderSimple images={sliderImages} arrows={true} />
      <TitleTop>New collection</TitleTop>
      <TitleSeason>Menswear 2020</TitleSeason>
    </Container>
  );
};

export default SliderMain;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
`;

const TitleTop = styled.h3`
  position: absolute;
  top: 140px;
  left: 345px;
  color: #1e212c;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const TitleSeason = styled.h1`
  position: absolute;
  top: 160px;
  left: 345px;
  color: #1e212c;
  font-family: Lato;
  font-size: 72px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  letter-spacing: 1px;
`;
