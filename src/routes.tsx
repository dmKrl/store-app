import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage/MainPage';
import MainLayouts from './components/MainLayouts/MainLayouts';
import NotFound from './pages/NotFound/NotFound';
import PayDelivery from './pages/PayDeliveryPage/PayDelivery';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<MainLayouts />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/pay-delivery" element={<PayDelivery />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
