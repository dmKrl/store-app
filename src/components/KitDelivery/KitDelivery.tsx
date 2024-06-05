import s from './KitDelivery.module.css';

const KitDelivery = () => {
    return (
        <div className={s.infoProductKit}>
            <h2 className={s.infoProductKitHeading}>Комплект поставки</h2>
            <div className={s.infoProductKitBlock}>
                <div className={s.infoProductKitItem}>
                    <img src="image/headphonesProduct.png" alt="airpods" />
                    <p>Наушники AirPods Max</p>
                </div>
                <div className={s.infoProductKitItem}>
                    <img src="image/headphonesCase.png" alt="airpods-case" />
                    <p>Чехол Smart Case</p>
                </div>
                <div className={s.infoProductKitItem}>
                    <img src="image/wireLight.png" alt="airpods-cable" />
                    <p>Кабель для зарядки</p>
                </div>
            </div>
        </div>
    );
};

export default KitDelivery;
