import { useCatalogStore } from 'src/features/store';
import CatalogMainCard from 'src/shared/ui/CatalogMainCard/CatalogMainCard';
import s from './CatalogMain.module.css';

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
