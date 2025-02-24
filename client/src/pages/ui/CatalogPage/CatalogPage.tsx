import CatalogMain from 'src/components/CatalogMain/CatalogMain';
import s from './CatalogPage.module.css';

export const CatalogPage = () => {

    return (
        <div className={s.catalogPageContainer}>
            <div className="container">
                <div className={s.catalogPage}>
                    <h2 className={s.catalogPageHeading}>Каталог</h2>
                    <CatalogMain />
                </div>
            </div>
        </div>
    );
};

