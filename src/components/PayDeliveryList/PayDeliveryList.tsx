import s from './PayDeliveryList.module.css';

const PayDeliveryList = () => {
    return (
        <div className={s.payDeliveryListContent}>
            <ul className={s.payDeliveryList}>
                <li>
                    Безопасная предоплата
                    <span>
                        Оплата картами Visa, Mastercard и Мир с полной
                        сохранностью ваших данных
                    </span>
                </li>
                <li>
                    Оплата при получении
                    <span>
                        Платите картой или наличными, когда товар прибудет
                    </span>
                </li>
                <li>
                    Бесконтактное получение
                    <span>Забирайте заказы в постоматах</span>
                </li>
            </ul>
        </div>
    );
};

export default PayDeliveryList;
