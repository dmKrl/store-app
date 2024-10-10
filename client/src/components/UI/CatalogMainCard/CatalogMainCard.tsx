import { FC } from 'react';
import CatalogButton from '../CatalogButton/CatalogButton';
import s from './CatalogMainCard.module.css';
import changePriceView from '../../../app/changePriceView';
interface CatalogMainCardProps {
    numGen: string;
    nameProduct: string;
    priceProduct: string;
    imgProduct: string;
}

const CatalogMainCard: FC<CatalogMainCardProps> = ({
    numGen,
    nameProduct,
    priceProduct,
    imgProduct,
}) => {
    return (
        <div className={s.catalogMainCard}>
            <img
                className={s.catalogMainCardImg}
                src={`http://localhost:5000/${imgProduct}`}
                alt="img-card-product-airPods"
            />
            {numGen && <span>{numGen}</span>}
            <h4 className={s.catalogMainCardHeading}>{nameProduct}</h4>
            <div className={s.catalogMainCardPriceBlock}>
                <p className={s.catalogMainCardPrice}>
                    {changePriceView(parseInt(priceProduct))} ₽
                </p>
                <button className={s.catalogMainCardButtonBasket}>
                    <img src="image/basket.png" alt="basket" />
                </button>
            </div>
            <CatalogButton>Купить</CatalogButton>
        </div>
    );
};

export default CatalogMainCard;
