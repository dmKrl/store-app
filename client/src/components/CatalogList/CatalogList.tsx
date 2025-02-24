import CatalogCard from 'src/shared/ui/CatalogCard/CatalogCard';
import s from './CatalogList.module.css';

const CatalogComponent = () => {
    return (
        <div className="container">
            <div className={s.catalogWrapper}>
                <h2 className={s.catalogMainHeading}>Каталог</h2>
                <div className={s.catalogContainer}>
                    <CatalogCard
                        cardButtonText="Купить"
                        cardPrice="200"
                        cardLink="Наушники AirPods"
                        cardImg="image/airpods1Card.png"
                    />
                    <CatalogCard
                        cardButtonText="Купить"
                        cardPrice="200"
                        cardLink="Наушники AirPods"
                        cardImg="image/airpods1Card.png"
                    />
                    <CatalogCard
                        cardButtonText="Купить"
                        cardPrice="200"
                        cardLink="Наушники AirPods"
                        cardImg="image/airpods1Card.png"
                    />
                    <CatalogCard
                        cardButtonText="Купить"
                        cardPrice="200"
                        cardLink="Наушники AirPods"
                        cardImg="image/airpods1Card.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default CatalogComponent;
