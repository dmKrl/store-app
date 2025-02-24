import { useEffect, useState } from 'react';
import s from './BasketPage.module.css';
import { useBasketStore, useUsersStore } from 'features/store';
import BasketDescription from 'components/BasketDescription/BasketDescription';
import BasketItem from 'shared/ui/BasketItem/BasketItem';
import BasketResult from 'components/BasketResult/BasketResult';

interface BasketPriceDevices {
    counter: number;
}

const BasketPage = () => {
    const {
        basketDevices,
        getAllBasketDevices,
        resetAllPrice,
        totalSetAllPrice,
    } = useBasketStore();
    const [allPriceLocal] = useState<BasketPriceDevices[]>([]);
    const { userState } = useUsersStore();

    //Постараться перенести функцию resetAllPrice из эффекта в функцию changeAllPrice
    //Также разобраться с всплывающей ошибкой в консоли, при обновлении локального стейта
    const changeAllPrice = () => {
        basketDevices.forEach((item) => {
            const sumPriceAndQuantity = item.device.price * item.quantity;
            allPriceLocal.push({ counter: sumPriceAndQuantity });
        });
    };

    useEffect(() => {
        getAllBasketDevices(Number(userState.userId));
        resetAllPrice();
        changeAllPrice();
        totalSetAllPrice(allPriceLocal);
    }, [userState.userId]);

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
