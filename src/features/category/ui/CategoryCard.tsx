import React from "react";
import styled from "styled-components";
import { CategoryImages } from "../consts";

const CategoryCard = () => {
  return (
    <Container>
      {CategoryImages.map((el) => (
        <WrapCard key={el.id}>
          <ImgCategory src={el.images} alt="" />
          <NameCategory>{el.title}</NameCategory>
        </WrapCard>
      ))}
    </Container>
  );
};

export default CategoryCard;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  gap: 30px;
  justify-content: center;
  text-align: center;
  margin-top: -60px;
  
`;

const WrapCard = styled.div`
  width: 390px;
  height: 390px;
  border-radius: 4px;
  z-index: 10;
`;

const ImgCategory = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover {
    transform: scale(1.01);
  }
`;

const NameCategory = styled.h1`
  color: #424551;
  text-align: center;

  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
