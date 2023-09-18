import React, { FC } from "react";
import Slider from "react-slick";
import { TSliderProductProps } from "../type/types";
import { SLIDER_SIMPLE_SETTINGS } from "../../SliderSimple/config/settings";
import isNil from "lodash/isNil";
import { useMediaQuery } from "react-responsive";
import { clsx } from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import SVGHeart from "../../../../assets/svg/SVGHeart";
import { sliderProductImages } from "../../../../widgets/sliderProduct/consts/data";
import RatingComponents from "../../../rating/RatingComponents";

const SliderProduct: FC<TSliderProductProps> = (props) => {
  const settings = SLIDER_SIMPLE_SETTINGS(props).settings;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 320px)" });

  return (
    <StyledSliderProduct {...settings}>
      {!isNil(sliderProductImages) &&
        sliderProductImages.map((el) => {
          return (
            <div className="SliderSimple-Item" key={el.id}>
              <Wrap>
                <img
                  alt=""
                  className={clsx("SliderSimple-Image", {
                    "SliderSimple-Image__mobile": isMobileScreen,
                  })}
                  src={el.images}
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

export default SliderProduct;

const Wrap = styled.div`
  position: relative;
  width: 285px;
  height: 320px;
`;
const WrapRating = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
const StyledSliderProduct = styled(Slider)`
  margin: 0 30px;
  &.slick-slide img {
    width: 100%;
    max-width: 1980px;
    height: 100%;
    max-height: 800px;
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
      top: 50% !important;
      z-index: 1 !important;

      &.slick-disabled {
        .Slider-ArrowButton {
          // display: none;
        }
      }
    }

    &-ArrowButton {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      width: 48px;
      height: 48px;
      background-color: var(--slider-arrow-backgroundColor);

      border-radius: 50%;
      cursor: pointer;
      opacity: var(--slider-arrow-opacity);
      transition: all 500ms ease;

      &__left {
        left: 45px;
      }

      &__right {
        right: 45px;
        transform: rotate(180deg);
      }

      &:hover {
        background-color: rgb(218, 219, 228);

        opacity: 0.8;
      }
    }

    &-ArrowCustom {
      svg {
        fill: red;
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
  right: 24px;
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
