import { FC, useEffect, useState } from 'react';
import s from './BasketItem.module.css';
import changePriceView from '../../../app/changePriceView';
import { useBasketStore } from '../../../store/BasketStore';

interface BasketItemProps {
    key: string;
    name: string;
    price: number;
    quantity: number;
    img: string;
}

const BasketItem: FC<BasketItemProps> = ({
    key,
    name,
    price,
    quantity,
    img,
}) => {
    const [counter, setCounter] = useState<number>(quantity);
    const { setAllPrice } = useBasketStore();

    function handlerCounterPlus(): void {
        setCounter(counter + 1);
    }

    function handlerCounterMinus(): void {
        if (counter <= 0) {
            return;
        }
        setCounter(counter - 1);
    }

    function sumPriceAndQuantityDevice(
        price: number,
        quantity: number,
    ): number {
        return price * quantity;
    }

    useEffect(() => {
        setAllPrice(sumPriceAndQuantityDevice(price, quantity));
    }, []);

    //Починить путь src к картинке товара в корзине.
    //Нужно исколючить в пути localhost по аналогии с Catalog-card
    return (
        <div className={s.basketItem} id={key}>
            <div className={s.basketItemDescription}>
                <img
                    src={`http://localhost:5000/${img}`}
                    alt="product-airPods"
                />
                <p
                    className={`${s.basketItemMainText} ${s.basketItemNameItem}`}
                >
                    {name}
                </p>
            </div>
            <p className={s.basketItemMainText}>{changePriceView(price)}</p>
            <div className={s.basketItemQuantityBlock}>
                <button type="button" onClick={handlerCounterMinus}>
                    <img src="image/minus.svg" alt="minus-button" />
                </button>
                <label htmlFor="">{counter}</label>
                <button type="button" onClick={handlerCounterPlus}>
                    <img src="image/plus.svg" alt="plus-button" />
                </button>
            </div>
            <p
                className={s.basketItemMainText}
            >{`${changePriceView(price * quantity)} Р.`}</p>
        </div>
    );
};

export default BasketItem;
