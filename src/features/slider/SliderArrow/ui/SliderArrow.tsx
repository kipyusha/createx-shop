import React, {
  CSSProperties,
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
} from "react";
import { ESliderArrow } from "../enums/enums";
import { clsx } from "clsx";
import SVGArrow from "../../../../assets/svg/SVGArrow";

type IProps = {
  backgroundColor?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  opacity?: number;
  style?: CSSProperties;
  styles?: CSSProperties;
  type?: ESliderArrow;
  fill?: string;
};  

export const SliderArrow: FC<IProps> = ({
  backgroundColor = "#FFF",
  className,
  onClick,
  opacity = 1,
  style,
  styles,
  type,
  fill = 'rgba(66, 69, 81, 1)',
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.style.setProperty(
        "--slider-arrow-backgroundColor",
        backgroundColor
      );
      arrowRef.current.style.setProperty(
        "--slider-arrow-opacity",
        opacity.toString()
      );
      arrowRef.current.style.setProperty(
        "--slider-arrow-fill",
        fill.toString()
      );
    }
  }, [backgroundColor, opacity, fill]);
  return (
    <div
      className={clsx("Slider-Arrow", className)}
      onClick={onClick}
      ref={arrowRef}
      style={{ ...style, ...styles }}
    >
      <div
        className={clsx("Slider-ArrowButton", {
          "Slider-ArrowButton__left": type === ESliderArrow.Previous,
          "Slider-ArrowButton__right": type === ESliderArrow.Next,
        })}
      >
        <SVGArrow 
          
          className="Slider-ArrowCustom"
          
          type={type === ESliderArrow.Previous ? "ArrowLeft" : "ArrowRight"}
        />
      </div>
    </div>
  );
};
