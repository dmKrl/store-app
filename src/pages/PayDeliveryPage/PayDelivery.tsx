import PayDeliveryList from '../../components/PayDeliveryList/PayDeliveryList';
import PayDeliveryItem from '../../components/UI/PayDeliveryItem/PayDeliveryItem';
import s from './PayDelivery.module.css';

const PadDelivery = () => {
    return (
        <div className={s.payDelivery}>
            <div className={s.payDeliveryBox}>
                <div className={s.payDeliveryContent}>
                    <h2 className={s.payDeliveryHeading}>Оплата и доставка</h2>
                    <div className={s.payDeliveryBlockItems}>
                        <PayDeliveryItem
                            nameDelivery="СДЭК / PICK POINT / ПОЧТА РОССИИ"
                            priceDelivery="от 130 руб."
                            description="До пунктов выдачи"
                        />
                        <PayDeliveryItem
                            nameDelivery="В пределах МКАД"
                            priceDelivery="350 рублей"
                            description="Курьером по Москве"
                        />
                        <PayDeliveryItem
                            nameDelivery="Доставка по России"
                            priceDelivery="от 350 руб."
                            description="*Для просмотра точек доставки, их стоимости и итоговой суммы заказа - 
                    добавьте товар в корзину и перейдите на оформление"
                        />
                    </div>
                    <PayDeliveryList />
                </div>
            </div>
        </div>
    );
};

export default PadDelivery;
