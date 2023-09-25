import React from "react";
import styled from "styled-components";
import { LINK_CONTACTS_ROUT } from "../consts";

const FooterContacts = () => {
  return (
    <Container>
      <Title>Get in touch</Title>
      <ContactText>
        Call:<span>(405) 555-0128</span>
      </ContactText>
      <ContactText>
        Email:<span>hello@createx.com</span>
      </ContactText>
      <SocialsWrap>
        {LINK_CONTACTS_ROUT.map((el) => (
          <LinkSocials key={el.id} src={el.icon} />
        ))}
      </SocialsWrap>
    </Container>
  );
};

export default FooterContacts;

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

const ContactText = styled.p`
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin: 0;
  & span {
    opacity: 0.6;
    margin-left: 4px;
  }
`;

const SocialsWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const LinkSocials = styled.img`
  width: 16px;
  height: 16px;
  background: #ffffff12;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;
