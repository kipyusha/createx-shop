import React from "react";
import styled from "styled-components";
import { POPULAR_CATEGORY_DATA } from "../consts/data";

const PopularCategory = () => {
  return (
    <Container>
      <Title>Popular categories</Title>
      <Wrapper>
      {POPULAR_CATEGORY_DATA.map((el) => {
        return (
          <Wrap key={el.id}>
            <Img src={el.image} alt={el.title} />
            <TitleCategory>{el.title}</TitleCategory>
          </Wrap>
        );
      })}
      </Wrapper>
    </Container>
  );
};

export default PopularCategory;

const Container = styled.div`
  width: 1230px;
  height: 360px;
  margin: 180px auto;
  
  text-align: center;
`;

const Title = styled.h1`
  color: #1e212c;
  font-family: Lato;
  font-size: 46px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
`;

const Wrapper = styled.div` 
display: flex;
margin-top: 60px;
gap: 30px;
`

const Wrap = styled.div`
  width: 180px;
  height: 180px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 180px;
  cursor: pointer;
`;

const TitleCategory = styled.h3`
  color: #1e212c;
  text-align: center;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
