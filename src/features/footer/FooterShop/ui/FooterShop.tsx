import React from 'react'
import styled from 'styled-components';
import { LINK_SHOP_ROUT } from '../consts';

const FooterShop = () => {
  return (
    <Container>
      <Title>SHOP</Title>
      {LINK_SHOP_ROUT.map((el) => (
        <Link key={el.id}>{el.title}</Link>
      ))}
    </Container>
  )
}

export default FooterShop

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Link = styled.a`
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  opacity: 0.6;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover {
    opacity: 1;
  }
`;