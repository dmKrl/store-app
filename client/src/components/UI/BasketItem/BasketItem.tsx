import { FC, useState } from 'react';
import s from './BasketItem.module.css';

interface BasketItemProps {
    key: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const BasketItem: FC<BasketItemProps> = ({
    key,
    name,
    price,
    quantity,
    image,
}) => {
    const [counter, setCounter] = useState<number>(quantity);

    function handlerCounterPlus(): void {
        setCounter(counter + 1);
    }

    function handlerCounterMinus(): void {
        if (counter <= 0) {
            return;
        }
        setCounter(counter - 1);
    }

    return (
        <div className={s.basketItem} id={key}>
            <div className={s.basketItemDescription}>
                <img src={image} alt="product-airPods" />
                <p
                    className={`${s.basketItemMainText} ${s.basketItemNameItem}`}
                >
                    {name}
                </p>
            </div>
            <p className={s.basketItemMainText}>{price}</p>
            <div className={s.basketItemQuantityBlock}>
                <button type="button" onClick={handlerCounterMinus}>
                    <img src="image/minus.svg" alt="minus-button" />
                </button>
                <label htmlFor="">{counter}</label>
                <button type="button" onClick={handlerCounterPlus}>
                    <img src="image/plus.svg" alt="plus-button" />
                </button>
            </div>
            <p className={s.basketItemMainText}>62 990.00 ₽</p>
        </div>
    );
};

export default BasketItem;
