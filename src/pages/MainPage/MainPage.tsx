import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';

const MainPage = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default MainPage;
