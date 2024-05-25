import CatalogCard from '../UI/CatalogCard/CatalogCard';
import s from './CatalogComponent.module.css';

const CatalogComponent = () => {
    return (
        <div className={s.catalogWrapper}>
            <h2 className={s.catalogMainHeading}>Каталог</h2>
            <div className={s.catalogContainer}>
                <CatalogCard
                    cardButtonText="Купить"
                    cardPrice="200"
                    cardHeading="Наушники AirPods"
                    cardImg="image/airpods1Card.png"
                />
                <CatalogCard
                    cardButtonText="Купить"
                    cardPrice="200"
                    cardHeading="Наушники AirPods"
                    cardImg="image/airpods1Card.png"
                />
                <CatalogCard
                    cardButtonText="Купить"
                    cardPrice="200"
                    cardHeading="Наушники AirPods"
                    cardImg="image/airpods1Card.png"
                />
                <CatalogCard
                    cardButtonText="Купить"
                    cardPrice="200"
                    cardHeading="Наушники AirPods"
                    cardImg="image/airpods1Card.png"
                />
            </div>
        </div>
    );
};

export default CatalogComponent;
