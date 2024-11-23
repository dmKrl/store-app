import { useEffect } from 'react';
import { useBasketStore } from '../../store/BasketStore';
import BasketDescription from '../../components/BasketDescription/BasketDescription';
import BasketResult from '../../components/BasketResult/BasketResult';
import BasketItem from '../../components/UI/BasketItem/BasketItem';
import s from './BasketPage.module.css';
import '../../App.css';
import { useUsersStore } from '../../store/UsersStore';

const BasketPage = () => {
    const { basketDevices, getAllBasketDevices } = useBasketStore();
    const { userState } = useUsersStore();
    console.log(basketDevices);
    useEffect(() => {
        getAllBasketDevices(Number(userState.userId));
    }, [getAllBasketDevices, userState.userId]);
    return (
        <div className={s.basketPageContainer}>
            <div className="container">
                <div className={s.basketPage}>
                    <h2 className={s.basketPageHeading}>Корзина</h2>
                    <div className={s.basketPageContent}>
                        <BasketDescription />
                        {basketDevices.length ? (
                            <>
                                <div className={s.basketPageItems}>
                                    {basketDevices.map((item) => {
                                        return (
                                            <BasketItem
                                                key={item.device.id}
                                                name={item.device.name}
                                                price={item.device.price}
                                                quantity={item.quantity}
                                                img={item.device.img}
                                            />
                                        );
                                    })}
                                </div>
                                <BasketResult />
                            </>
                        ) : (
                            <p className={s.basketPageInfoText}>
                                Корзина пуста
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketPage;
