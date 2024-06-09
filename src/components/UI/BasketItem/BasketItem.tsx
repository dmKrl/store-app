import { FC, useState } from 'react';
import s from './BasketItem.module.css';

interface BasketItemProps {
    nameItem: string;
    priceItem: string;
    quantityItem: number;
    imgItem: string;
}

const BasketItem: FC<BasketItemProps> = ({
    nameItem,
    priceItem,
    quantityItem,
    imgItem,
}) => {
    const [counter, setCounter] = useState<number>(quantityItem);

    function handlerCounterPlus(): void {
        counter > 0 ? setCounter(counter + 1) : null;
    }
    
    function handlerCounterMinus(): void {
        counter > 0 ? setCounter(counter - 1) : null;
    }

    return (
        <div className={s.basketItem}>
            <div className={s.basketItemDescription}>
                <img src={imgItem} alt="product-airPods" />
                <p
                    className={`${s.basketItemMainText} ${s.basketItemNameItem}`}
                >
                    {nameItem}
                </p>
            </div>
            <p className={s.basketItemMainText}>{priceItem}</p>
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
