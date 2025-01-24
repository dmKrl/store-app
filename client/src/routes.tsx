import { Route, Routes } from 'react-router';
import MainPage from './pages/ui/MainPage/MainPage';
import MainLayouts from './components/MainLayouts/MainLayouts';
import NotFound from './pages/ui/NotFound/NotFound';
import PayDelivery from './pages/ui/PayDeliveryPage/PayDelivery';
import ContactsPage from './pages/ui/ContactsPage/ContactsPage';
import InfoProductPage from './pages/ui/InfoProductPage/InfoProductPage';
import InstractionsPage from './pages/ui/InstractionsPage/InstractionsPage';
import CatalogPage from './pages/ui/CatalogPage/CatalogPage';
import BasketPage from './pages/ui/BasketPage/BasketPage';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route element={<ProtectedRoute />}> */}
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
            {/* </Route> */}
        </Routes>
    );
};

export default AppRoutes;
