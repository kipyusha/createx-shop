
export type TSliderProductProps = {
    dots?: boolean;
    swipe?: boolean;
    slidesToShow?: number;
}

export interface ISliderProduct {
    id: number,
    image: string,
    title: string,
    price: number
}