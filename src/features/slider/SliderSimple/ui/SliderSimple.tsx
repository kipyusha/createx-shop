import React, { FC } from "react";
import Slider from "react-slick";
import { TSliderSimpleProps } from "../type/types";
import { SLIDER_SIMPLE_SETTINGS } from "../config/settings";
import isNil from "lodash/isNil";
import { useMediaQuery } from "react-responsive";
import { clsx } from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";



const SliderSimple: FC<TSliderSimpleProps> = (props) => {
  const { images } = props;
  const settings = SLIDER_SIMPLE_SETTINGS(props).settings;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 320px)" });

  return (
    <StyledSlider {...settings}>
      {!isNil(images) &&
        images.map((image, index) => {
          return (
            <div className="SliderSimple-Item" key={index}>
              <img
                alt=""
                className={clsx("SliderSimple-Image", {
                  "SliderSimple-Image__mobile": isMobileScreen,
                })}
                src={image}
              />
            </div>
          );
        })}
    </StyledSlider>
  );
};

export default SliderSimple;

const StyledSlider = styled(Slider)`
  &.slick-slide img {
    width: 100%;
    max-width: 1980px;
    height: 100%;
    max-height: 800px;

    margin: 0 auto;
    outline: transparent;
  }
  &.slick-slider {
    position: relative;
    margin-bottom: 30px;
  }
  &.slick-slider .slick-dots {
    display: flex !important;
    justify-content: center;

    left: -345px;
    top: 625px;
  }
  &.slick-slider .slick-dots li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    width: 160px;
    cursor: default;
  }

  &.slick-slider .slick-dots li button {
    position: relative;
    color: #424551;
    
    font-family: Ubuntu;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    top: -50px;
    background-color: none;
    opacity: 0.6;
    cursor: default;
  }
  &.slick-slider .slick-dots li button::before {
    position: absolute;
    cursor: default;
    top: 50px;
    width: 160px;
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
    width: 160px;
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
