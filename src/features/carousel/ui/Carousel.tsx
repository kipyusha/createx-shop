import React from "react";
import styled from "styled-components";
import DownChevron from "../../../assets/svg/DownChevron";

const Carousel = () => {
  return (
    <Container>
      <ArrowLeft>
        <DownChevron />
      </ArrowLeft>
      <Content>
        <b>Up to 70% Off.</b> <span>Shop our latest sale styles</span>
      </Content>
      <ArrowRight>
        <DownChevron />
      </ArrowRight>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 35px;
  background: #17696a;
  
  justify-content: center;
`;

const ArrowLeft = styled.div`
  transform: rotate(90deg);
`;

const ArrowRight = styled.div`
  transform: rotate(-90deg);
`;

const Content = styled.p`
  color: #fff;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  transform: translateY(-30%);
  & b {
    text-decoration-line: none;
  }
  & span {
    text-decoration-line: underline;
  }
`;
