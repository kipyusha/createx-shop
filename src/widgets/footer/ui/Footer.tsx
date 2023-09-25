import React from "react";
import styled from "styled-components";
import SVGHeart from "../../../assets/svg/SVGHeart";
import FooterContacts from "../../../features/footer/FooterContacts";
import FooterHelp from "../../../features/footer/FooterHelp";
import FooterShop from "../../../features/footer/FooterShop";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <FooterHelp />
        <FooterShop />
        <FooterContacts />
      </Wrap>
      <Cooperative>
        <Text>
          &#169; All rights reserved. Made with <SVGHeart /> by Createx Studio{" "}
          <LinkTop>Go to top</LinkTop>
        </Text>
      </Cooperative>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 360px;
  background: #1e212c;
  padding-top: 60px;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 285px;
  gap: 150px;
  margin-left: 345px;
`;

const Cooperative = styled.div`
  width: 100%;
  height: 75px;
  border-top: 2px solid #ffffff15;
  background: #1e212c;
  
  
`;

const Text = styled.p`
  color: #fff;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 24px;
  margin-left: 345px;
  
`;

const LinkTop = styled.a`
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  opacity: 0.6;
  margin-left: 880px;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover {
    opacity: 1;
  }
`;
