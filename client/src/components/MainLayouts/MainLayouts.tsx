import About from "components/About/About";
import CatalogComponent from "components/CatalogList/CatalogList";
import FAQ from "components/FAQ/FAQ";
import Characteristics from "components/MainCharacteristics/MainCharacteristics";
import TopContent from "components/TopContent/TopContent";

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
