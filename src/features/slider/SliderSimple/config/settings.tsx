import React from "react";
import { ESliderArrow } from "../../SliderArrow/enums/enums";
import { SliderArrow } from "../../SliderArrow/ui/SliderArrow";
import { TSliderSimpleProps } from "../type/types";


export const SLIDER_SIMPLE_SETTINGS = (props: TSliderSimpleProps) => {
  
  const {
    arrows = false,
    nextArrow,
    prevArrow,
    slidesToShow = 1,
    swipe = false,
  } = props;

  return {
    settings: {
      arrows,
      dots: true,
      swipe,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      nextArrow: arrows ? (
        <SliderArrow styles={{right: "5px"}} type={ESliderArrow.Next}/>
      ) : (
        nextArrow
      ),
      prevArrow: arrows ? (
        <SliderArrow styles={{left: "5px"}} type={ESliderArrow.Previous}/>
      ) : (
        prevArrow
      ),
      slidesToShow,
      swipeToSlide: true,
      speed: 500,
      
    },
    
  
  };
  
}






