import React from "react";
import styled from "styled-components";
import SVGCard from "../../assets/svg/SVGCard";
import SVGHeart from "../../assets/svg/SVGHeart";
import SVGLogo from "../../assets/svg/SVGLogo";
import Search from "./Search";
const NavBar = () => {
  return (
    <Container>
      <Logo>
        <SVGLogo />
      </Logo>
      <Menu>
        <Link color="#424551">Women</Link>
        <Link color="#424551">Men</Link>
        <Link color="#424551">Girls</Link>
        <Link color="#424551">Boys</Link>
        <Link color="#FF4242">Sale</Link>
      </Menu>
      <Search />
      <Static>
        <WishList>
          <SVGHeart />
          <Check>2</Check>
        </WishList>
        <Divider />
        <Card>
          <SVGCard />
          <Checks>4</Checks>
        </Card>
      </Static>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  width: 100%;
  height: 85px;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  text-align: center;
  
`;

const Logo = styled.div`
    transform: translateY(40%);
`;

const Menu = styled.div`
  display: flex;
  gap: 40px;
  
`;

const Link = styled.p`
  
  color: ${(props) => props.color};
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  transform: translateY(30%);
`;

const Static = styled.div `
    display: flex;
    gap: 20px;
    transform: translateY(40%);
`
const WishList = styled.div`
  width: 40px;
  height: 25px;
  display: flex;
  text-align: center;
  gap: 8px;
`;

const Check = styled.div`
  color: #424551;
  transform: translateY(-10%);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

const Divider = styled.div`
  width: 1px;
  height: 22px;

  background: linear-gradient(
    270deg,
    rgba(218, 219, 221, 0) 0%,
    rgba(218, 219, 221, 0.5) 12.33%,
    #dadbdd 51.91%,
    rgba(218, 219, 221, 0.5) 87.85%,
    rgba(218, 219, 221, 0) 100%
  );
`;

const Card = styled.div`
  display: flex;
  gap: 8px;
`;

const Checks = styled.div`
  width: max-content;
  height: max-content;
  padding: 1px 8px;
  border-radius: 4px;
  background: #03cea4;
  color: #fff;

  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
`;
