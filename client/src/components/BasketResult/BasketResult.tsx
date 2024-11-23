// import { current } from 'immer';
import { useBasketStore } from '../../store/BasketStore';
import MainButton from '../UI/MainButton/MainButton';
import s from './BasketResult.module.css';

// Остановился на написании функции сложения общей суммы в корзине
const BasketResult = () => {
    const { allPrice } = useBasketStore();
    console.log(allPrice);

    // function sumAllPriceBasketDevices() {
    //     allPrice.reduce((sum: number, current: number): void => {
    //         sum += current;
    //     }, 0);
    // }

    return (
        <div className={s.basketResult}>
            <p className={s.basketResultText}>
                Итого:
                <span>83 970.00 ₽</span>
            </p>
            <MainButton>Перейти к оформлению</MainButton>
        </div>
    );
};

export default BasketResult;
