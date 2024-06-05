import CatalogMain from '../../components/CatalogMain/CatalogMain';
import s from './CatalogPage.module.css';
import '../../App.css';

const CatalogPage = () => {
    return (
        <div className="container">
            <div className={s.catalogPage}>
                <h2 className={s.catalogPageHeading}>Каталог</h2>
                <CatalogMain />
            </div>
        </div>
    );
};

export default CatalogPage;
