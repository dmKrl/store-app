import About from '../About/About';
import CatalogComponent from '../CatalogList/CatalogList';
import Characteristics from '../MainCharacteristics/MainCharacteristics';
import FAQ from '../FAQ/FAQ';
import TopContent from '../TopContent/TopContent';

const MainLayouts = () => {
    return (
        <div className="mainContent">
            <TopContent />
            <CatalogComponent />
            <Characteristics />
            <About />
            <FAQ />
        </div>
    );
};

export default MainLayouts;
