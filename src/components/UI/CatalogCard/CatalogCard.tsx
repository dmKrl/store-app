import { FC } from 'react';
import CatalogButton from '../CatalogButton/CatalogButton';
import s from './CatalogCard.module.css';

interface CatalogCardProps {
    cardButtonText: string;
    cardHeading: string;
    cardPrice: string;
    cardImg: string;
}

const CatalogCard: FC<CatalogCardProps> = ({
    cardImg,
    cardHeading,
    cardPrice,
    cardButtonText,
}) => {
    return (
        <div className={s.catalogCardBlock}>
            <div className={s.catalogCardContent}>
                <img className={s.catalogCardImg} src={cardImg} alt="" />
                <div className={s.catalogCardDescription}>
                    <h5 className={s.catalogCardHeading}>{cardHeading}</h5>
                    <p className={s.catalogCardPrice}>{cardPrice}</p>
                </div>
                <CatalogButton>{cardButtonText}</CatalogButton>
            </div>
        </div>
    );
};

export default CatalogCard;
