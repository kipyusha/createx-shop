
export type TSliderTrendProps = {
    dots?: boolean;
    swipe?: boolean;
    slidesToShow?: number;
    arrows?: boolean;
}

export interface ISliderTrend {
    id: number,
    image: string,
    title: string,
    price: number,
}