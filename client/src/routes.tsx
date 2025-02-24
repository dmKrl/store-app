import MainLayouts from 'src/pages/ui/MainLayouts/MainLayouts';
import {
    BasketPage,
    CatalogPage,
    ContactsPage,
    InfoProductPage,
    InstractionsPage,
    MainPage,
    NotFound,
    PayDelivery
} from 'src/pages';
import { Route, Routes } from 'react-router';

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
