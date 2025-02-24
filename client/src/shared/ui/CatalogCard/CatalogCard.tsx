import { FC } from 'react';
import s from './CatalogCard.module.css';
import { Link } from 'react-router-dom';
import CatalogButton from '../CatalogButton/CatalogButton';

interface CatalogCardProps {
    cardButtonText: string;
    cardLink: string;
    cardPrice: string;
    cardImg: string;
}

const CatalogCard: FC<CatalogCardProps> = ({
    cardImg,
    cardLink,
    cardPrice,
    cardButtonText,
}) => {
    return (
        <div className={s.catalogCardBlock}>
            <div className={s.catalogCardContent}>
                <img className={s.catalogCardImg} src={cardImg} alt="" />
                <div className={s.catalogCardDescription}>
                    <Link to="/product" className={s.catalogCardLink}>
                        {cardLink}
                    </Link>
                    <p className={s.catalogCardPrice}>{cardPrice}</p>
                </div>
                <CatalogButton>{cardButtonText}</CatalogButton>
            </div>
        </div>
    );
};

export default CatalogCard;
