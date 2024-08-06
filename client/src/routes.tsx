import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage/MainPage';
import MainLayouts from './components/MainLayouts/MainLayouts';
import NotFound from './pages/NotFound/NotFound';
import PayDelivery from './pages/PayDeliveryPage/PayDelivery';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import InfoProductPage from './pages/InfoProductPage/InfoProductPage';
import InstractionsPage from './pages/InstractionsPage/InstractionsPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import BasketPage from './pages/BasketPage/BasketPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<MainLayouts />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/pay-delivery" element={<PayDelivery />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/product" element={<InfoProductPage />} />
                <Route path="/instraction" element={<InstractionsPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/basket" element={<BasketPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
