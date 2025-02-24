import About from "src/shared/ui/About/About";
import CatalogComponent from "src/shared/ui/CatalogList/CatalogList";
import FAQ from "src/shared/ui/FAQ/FAQ";
import Characteristics from "src/shared/ui/MainCharacteristics/MainCharacteristics";
import TopContent from "src/shared/ui/TopContent/TopContent";

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
