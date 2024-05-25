import About from '../About/About';
import CatalogComponent from '../CatalogComponent/CatalogComponent';
import Characteristics from '../Characteristics/Characteristics';
import FAQ from '../FAQ/FAQ';
import TopContent from '../TopContent/TopContent';
import '../../App.css'

const MainLayouts = () => {
    return (
        <div className='mainContent'>
            <TopContent />
            <CatalogComponent />
            <Characteristics />
            <About />
            <FAQ />
        </div>
    );
};

export default MainLayouts;
