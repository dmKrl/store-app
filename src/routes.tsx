import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage/MainPage';
import MainLayouts from './components/MainLayouts/MainLayouts';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<MainLayouts />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
