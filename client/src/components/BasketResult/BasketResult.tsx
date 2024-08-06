import MainButton from '../UI/MainButton/MainButton';
import s from './BasketResult.module.css';

const BasketResult = () => {
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
