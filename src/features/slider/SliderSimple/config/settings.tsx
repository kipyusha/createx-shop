import { ESliderArrow } from "../../SliderArrow/enums/enums";
import { SliderArrow } from "../../SliderArrow/ui/SliderArrow";
import { TSliderSimpleProps } from "../type/types";

export const SLIDER_SIMPLE_SETTINGS = (props: TSliderSimpleProps) => {
  const {
    arrows = false,
    className,
    fade = false,
    nextArrow,
    prevArrow,
    slidesToScroll = 1,
    slidesToShow = 1,
    speed = 500,
    swipeToSlide = false,
  } = props;
  return {
    settings: {
      arrows,
      className,
      dots: true,
      swipe: false,
      fade,
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
      slidesToScroll,
      slidesToShow,
      speed,
      swipeToSlide,
    },
  };
};


