import About from "src/components/About/About";
import CatalogComponent from "src/components/CatalogList/CatalogList";
import FAQ from "src/components/FAQ/FAQ";
import Characteristics from "src/components/MainCharacteristics/MainCharacteristics";
import TopContent from "src/components/TopContent/TopContent";

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
