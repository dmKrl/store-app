import dataProducts from '../../dataProductMOCK.json';
import CatalogMainCard from '../UI/CatalogMainCard/CatalogMainCard';
import s from './CatalogMain.module.css';

const CatalogMain = () => {
    return (
        <div className={s.catalogMain}>
            {dataProducts.map((product) => {
                return (
                    <CatalogMainCard
                        key={product.id}
                        numGen={product.numGen}
                        nameProduct={product.nameProduct}
                        priceProduct={product.priceProduct}
                        imgProduct={product.imgProduct}
                    />
                );
            })}
        </div>
    );
};

export default CatalogMain;
