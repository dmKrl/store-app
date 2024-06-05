import { FC } from 'react';
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
    return (
        <div className={s.basketItem}>
            <img src={imgItem} alt="product-airPods" />
            <p className={`${s.basketItemMainText} ${s.basketItemNameItem}`}>
                {nameItem}
            </p>
            <p className={s.basketItemMainText}>{priceItem}</p>
            <div className={s.basketItemQuantityBlock}>
                <input type="button" value="-" />
                <label htmlFor="">{quantityItem}</label>
                <input type="button" value="+" />
            </div>
            <p className={s.basketItemMainText}>62 990.00 ₽</p>
        </div>
    );
};

export default BasketItem;
