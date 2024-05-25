import CatalogComponent from '../CatalogComponent/CatalogComponent';
import Characteristics from '../Characteristics/Characteristics';
import TopContent from '../TopContent/TopContent';

const MainLayouts = () => {
    return (
        <div>
            <TopContent />
            <CatalogComponent />
            <Characteristics />
        </div>
    );
};

export default MainLayouts;
