import CatalogMain from 'components/CatalogMain/CatalogMain';
import s from './CatalogPage.module.css';

const CatalogPage = () => {

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

export default CatalogPage;
