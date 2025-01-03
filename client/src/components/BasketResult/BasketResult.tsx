// import { current } from 'immer';
import { useBasketStore } from '../../store/BasketStore';
import MainButton from '../UI/MainButton/MainButton';
import s from './BasketResult.module.css';
import sumAllPriceBasketDevices from '../../helpers/sumAllPriceBasketDevices';

const BasketResult = () => {
    const { allPrice } = useBasketStore();
    console.log(allPrice);

    return (
        <div className={s.basketResult}>
            <p className={s.basketResultText}>
                Итого:
                <span>
                    {allPrice[1]?.counter
                        ? sumAllPriceBasketDevices(allPrice).toFixed(2)
                        : 0}{' '}
                    P
                </span>
            </p>
            <MainButton>Перейти к оформлению</MainButton>
        </div>
    );
};

export default BasketResult;
