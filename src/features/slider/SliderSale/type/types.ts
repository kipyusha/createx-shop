
export type TSliderSaleProps = {
    dots?: boolean;
    swipe?: boolean;
    slidesToShow?: number;
    arrows?: boolean;
}

export interface ISliderSale {
    id: number,
    image: string,
    title: string,
    price: number,
    discount: number,
    price_discount: number
}