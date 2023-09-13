import React, { FC } from "react";
import Slider from "react-slick";
import { TSliderSimpleProps } from "../type/types";
import { SLIDER_SIMPLE_SETTINGS } from "../config/settings";
import isNil from "lodash/isNil";
import { useMediaQuery } from "react-responsive";
import { clsx } from "clsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/SliderSimple.scss";
import "../styles/Slider.scss";


const SliderSimple: FC<TSliderSimpleProps> = (props) => {
  const { alt = "", height, images, width } = props;
  const settings = SLIDER_SIMPLE_SETTINGS(props).settings;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 320px)" });

  return  (
    <Slider {...settings}>
      { !isNil(images) &&
        images.map((image, index) => {
          console.log(image)
          return (
            <div className="SliderSimple-Item" key={index}>
              <img
                alt={alt}
                className={clsx("SliderSimple-Image", {
                  "SliderSimple-Image__mobile" : isMobileScreen,
                })}
                height={height}
                src={image}
                width={width}
              />
            </div>
          );
        })}
    </Slider>
    ) 
};

export default SliderSimple;
