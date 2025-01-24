import CatalogMainCard from '../../shared/ui/CatalogMainCard/CatalogMainCard';
import s from './CatalogMain.module.css';
import { useCatalogStore } from '../../features/store/CatalogStore/CatalogStore';

const CatalogMain = () => {
    const { allDevices } = useCatalogStore();
    return (
        <div className={s.catalogMain}>
            {allDevices.map((product) => {
                return (
                    <CatalogMainCard
                        key={product.id}
                        numGen={product.numGen}
                        nameProduct={product.name}
                        priceProduct={product.price}
                        imgProduct={product.img}
                    />
                );
            })}
        </div>
    );
};

export default CatalogMain;
