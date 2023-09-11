import React from "react";
import styled from "styled-components";
import DownChevron from "../../assets/svg/DownChevron";
import SVGFlagUSA from "../../assets/svg/SVGFlagUSA";

const TopBar = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          Available 24/7 at <b>(405) 555-0128</b>
        </Text>
        <Menu>
          <Link>Delivery & returns</Link>
          <Link>Track order</Link>
          <Link>Blog</Link>
          <Link>Contacts</Link>
        </Menu>
        <Wrap>
          <LangCurrency>
            <SVGFlagUSA />
            <Text>Eng / $</Text>
            <DownChevron/>
          </LangCurrency>
          <Account>Log in / Register</Account>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  width: 100%;
  height: 45px;
  background: rgba(30, 33, 44, 1);
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: center;
  transform: translateY(30%);
`;
const Text = styled.span`

  opacity: 60%;
`;

const Menu = styled.div`
  
  opacity: 60%;
`;

const Link = styled.a`
  text-decoration: none;
  padding: 0 16px;
`;

const LangCurrency = styled.div`
  display: flex;
  gap: 12px;
`;

const Account = styled.div`
  opacity: 60%;
`;

const Wrap = styled.div`
  display: flex;
  gap: 60px;
`;
