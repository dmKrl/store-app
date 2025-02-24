// import { current } from 'immer';
import { useBasketStore } from 'src/features/store';
import s from './BasketResult.module.css';
import sumAllPriceBasketDevices from 'src/shared/lib/sumAllPriceBasketDevices';
import MainButton from 'src/shared/ui/MainButton/MainButton';

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
