import MainButton from 'src/shared/ui/MainButton/MainButton';
import KitDelivery from 'src/shared/ui/KitDelivery/KitDelivery';
import ProductCharacteristics from 'src/shared/ui/ProductCharacteristics/ProductCharacteristics';
import s from './InfoProductPage.module.css';

export const InfoProductPage = () => {
    return (
        <div className={s.infoProduct}>
            <div className="container">
                <div className={s.infoProductBox}>
                    <h2 className={s.infoProductHeading}>
                        Комплект AirPods Max
                    </h2>
                    <div className={s.infoProductContent}>
                        <div className={s.infoProductLeft}>
                            <img
                                src="image/headphonesProduct.png"
                                alt="headphones"
                            />
                            <MainButton>Добавить в корзину</MainButton>
                        </div>
                        <div className={s.infoProductRight}>
                            <div className={s.infoProductRightUp}>
                                <h3 className={s.infoProductRightHeading}>
                                    Описание
                                </h3>
                                <p className={s.infoProductRightDescription}>
                                    AirPodsMax — это новый взгляд на
                                    полноразмерные наушники. Все элементы
                                    AirPodsMax спроектированы таким образом,
                                    чтобы наушники оптимально прилегали к голове
                                    любой формы. Благодаря этому достигается
                                    невероятное качество и богатство звука.
                                </p>
                            </div>
                            <div className={s.infoProductRightDown}>
                                <h3 className={s.infoProductRightHeading}>
                                    Характеристики
                                </h3>
                                <ProductCharacteristics />
                            </div>
                        </div>
                    </div>
                    <KitDelivery />
                </div>
            </div>
        </div>
    );
};

