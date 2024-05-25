import About from '../About/About';
import CatalogComponent from '../CatalogComponent/CatalogComponent';
import Characteristics from '../Characteristics/Characteristics';
import TopContent from '../TopContent/TopContent';

const MainLayouts = () => {
    return (
        <div>
            <TopContent />
            <CatalogComponent />
            <Characteristics />
            <About />
        </div>
    );
};

export default MainLayouts;
