import clsx from 'clsx';
import isNil from 'lodash/isNil';
import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import styled from 'styled-components';
import SVGHeart from '../../../../assets/svg/SVGHeart';
import RatingComponents from '../../../rating';
import { SLIDER_SIMPLE_SETTINGS } from '../../SliderSimple/config/settings';
import { SLIDER_TREND_PRODUCT } from '../consts/data';
import { TSliderTrendProps } from '../type/types';

const SliderTrendBlock: FC<TSliderTrendProps> = (props) => {
    const settings = SLIDER_SIMPLE_SETTINGS(props).settings;
    const isMobileScreen = useMediaQuery({ query: "(max-width: 320px)" });
  
    return (
      <StyledSliderProduct {...settings}>
        {!isNil(SLIDER_TREND_PRODUCT) &&
          SLIDER_TREND_PRODUCT.map((el) => {
            return (
              <div className="SliderSimple-Item" key={el.id}>
                <Wrap>
                  <img
                    alt=""
                    className={clsx("SliderSimple-Image", {
                      "SliderSimple-Image__mobile": isMobileScreen,
                    })}
                    src={el.image}
                  />
                  <WrapRating>
                    <RatingComponents />
                  </WrapRating>
                  <Favorites>
                    <SVGHeart />
                  </Favorites>
                </Wrap>
  
                <Title>{el.title}</Title>
                <Price>${el.price}</Price>
              </div>
            );
          })}
      </StyledSliderProduct>
    );
  };
  
  export default SliderTrendBlock;
  
  const Wrap = styled.div`
    position: relative;
    width: 390px;
    height: 440px;
  `;
  const WrapRating = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
  `;
  const StyledSliderProduct = styled(Slider)`
    &.slick-slide img {
      width: 100%;
      max-width: 390px;
      height: 100%;
      max-height: 440px;
      margin: 0 auto;
      outline: transparent;
    }
    &.slick-slider {
      margin-bottom: 30px;
    }
    &.slick-slider .slick-dots {
      display: flex !important;
      justify-content: center;
      bottom: -80px;
    }
    &.slick-slider .slick-dots li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
      width: 30px;
      cursor: pointer;
    }
  
    &.slick-slider .slick-dots li button {
      position: relative;
      color: transparent;
      width: 0;
      height: 0;
      font-family: Ubuntu;
      font-size: 0;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      top: -50px;
      background-color: none;
      opacity: 0.6;
    }
    &.slick-slider .slick-dots li button::before {
      position: absolute;
      top: 50px;
      width: 30px;
      height: 2px;
      background-color: #424551;
      display: none;
      font-size: 0;
      opacity: 0.3;
    }
    &.slick-slider .slick-dots li button:hover {
    }
    &.slick-slider .slick-dots li.slick-active button {
      background-color: none;
      opacity: 1;
      outline: transparent;
    }
    &.slick-slider .slick-dots li.slick-active button:before {
      width: 30px;
      opacity: 1;
    }
    &.slick-list,
    .slick-track {
      touch-action: pan-y;
    }
    &.slick-slider .slick-track,
    .slick-slider .slick-list {
      touch-action: pan-y;
    }
    &.slick-prev:before .slick-next:before {
      opacity: 0 !important;
      display: none !important;
    }
  
    .Slider {
      &-Arrow {
        position: absolute !important;
        top: 0 !important;
        z-index: 1 !important;
  
        &.slick-disabled {
          .Slider-ArrowButton {
            
          }
        }
      }
  
      &-ArrowButton {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -70px;
        
        z-index: 1;
        width: 48px;
        height: 48px;
        background-color: #17696A;
  
        border-radius: 50%;
        cursor: pointer;
        opacity: var(--slider-arrow-opacity);
        transition: all 500ms ease;
  
        &__left {
          left: 1100px;
          background: transparent;
        }
  
        &__right {
          right: 0px;
          transform: rotate(180deg);
          
        }
  
        &:hover {
          background-color: rgb(218, 219, 228);
  
          opacity: 0.8;
        }
      }
  
      &-ArrowCustom {
        svg {
          fill: #fff;
          height: 16px;
          width: 8px;
        }
      }
    }
    &.slick-prev .slick-next {
      display: none;
      
    }
  `;

const Favorites = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  bottom: 24px;
  right: 16px;
  background: #fff;
  border-radius: 50%;
  & svg {
    width: 16px;
    height: 16px;
    padding: 8px;
  }
`;

const Title = styled.h1`
  color: #424551;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 16px 0 8px;
  padding: 0 16px;
`;

const Price = styled.h5`
  color: #1e212c;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin: 0;
  padding: 0 16px;
`;