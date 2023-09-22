import React from "react";
import styled from "styled-components";
import img1 from "../../../assets/svg/banner/banner1.svg";
import img2 from "../../../assets/svg/banner/banner2.svg";
import img3 from "../../../assets/svg/banner/banner3.svg";
import img4 from "../../../assets/svg/banner/banner4.svg";
import SVGArrowBanner from "../../../assets/svg/SVGArrowBanner";
import CountdownTimer from "../../../features/countdownTimer/ui/CountdownTimer";

const BannerBlock = () => {
  return (
    <Container>
      <Wrap>
        <BannerItem1 imgUrl={img1}>
          <ItemWrap>
            <TitleCol>Summer Collections</TitleCol>
            <TitleSale>Sale Up to 70%</TitleSale>
            <BannerButton>Explore new prices</BannerButton>
          </ItemWrap>
        </BannerItem1>
        <BannerItem2 imgUrl={img2}>
        <ItemWrap>
            <TitleCol>Deal of the week</TitleCol>
            <TitleSale>Stay Warm With Our<br /> New Sweaters</TitleSale>
            <BannerButton>Shop now</BannerButton>
          </ItemWrap>
          <CountdownTimer targetDate={new Date('2023-09-28T23:59:59')} />
        </BannerItem2>
      </Wrap>
      <Wrap>
        <BannerItem3 imgUrl={img3}>
          <ItemWrap>
            <TitleCol>New collection</TitleCol>
            <TitleSale>Shoes & Bags<br /> autumn / winter 2020 </TitleSale>
            <BannerButton>See offers <span><SVGArrowBanner/></span></BannerButton>
          </ItemWrap>
        </BannerItem3>
        <BannerItem4>
          <BannerImg src={img4} alt="banner" />
          <ItemWrap>
            <TitleCol>For All new Email Subscribers</TitleCol>
            <TitleSale>Get 5% Off & Free Delivery</TitleSale>
            <TitleEmail>Email</TitleEmail>
            <InputWrap>
             <InputEmail placeholder="Your working email"/>
             <button>Subscribe</button>
            </InputWrap>
            <Description>*Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.</Description>
          </ItemWrap>
        </BannerItem4>
      </Wrap>
    </Container>
  );
};

export default BannerBlock;

const Container = styled.div`
  width: 1860px;
  margin: 0 auto;
  margin-top: 160px;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const BannerItem1 = styled.div<{ imgUrl: string }>`
  position: relative;
  width: 735px;
  height: 500px;
  background: url(${(props) => props.imgUrl});
`;

const ItemWrap = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
`;

const BannerItem2 = styled.div<{ imgUrl: string }>`
  position: relative;
  width: 1110px;
  height: 500px;
  background: url(${(props) => props.imgUrl});
`;

const BannerItem3 = styled.div<{ imgUrl: string }>`
position: relative;
  width: 1110px;
  height: 500px;
  background: url(${(props) => props.imgUrl});
`;

const BannerItem4 = styled.div`
  position: relative;
  width: 735px;
  height: 500px;
  background: #e5e8ed;
`;

const BannerImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const InputWrap = styled.div` 
display: flex;
 & button {
  height: 45px;
  padding: 0 32px;
  border: 1px solid #17696A;
  border-radius: 0px 4px 4px 0px;
  border: none;
background:  #17696A;
  color:  #FFF;
text-align: center;
font-family: Lato;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 44px; 
letter-spacing: 0.5px;
}
`

const TitleEmail = styled.h3` 
  color:  #424551;
font-family: Lato;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; 

`

const InputEmail = styled.input` 
  width: 230px;
  height: 44px;
  padding: 0 0 0 16px;
 
align-items: center;

border: 1px solid #D7DADD;
border-right: none;
border-bottom-left-radius: 4px;
border-top-left-radius: 4px;
background:  #FFF;
margin-bottom: 20px;
&:focus-visible {
    outline: none !important;
    outline-offset: 0;
    border: 1px solid rgba(30, 33, 44, 1);
    color: rgba(30, 33, 44, 1);
}
`

const Description = styled.p` 
  width: 360px;
  color:  #424551;
font-family: Lato;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
margin: 0;
`
const BannerButton = styled.button`
  display: flex;
  justify-content: center;
  width: 190px;
  height: 45px;
  border-radius: 4px;
  border: 1px solid #17696a;
  background: transparent;
  color: #17696a;
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0.5px;
  & span {
    height: 45px;
    padding: 3px 0 0 8px;
  }
`;

const TitleCol = styled.h1`
  color: #1e212c;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const TitleSale = styled.h1`
  color: #1e212c;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  margin-top: 0;
  margin-bottom: 40px;
`;
