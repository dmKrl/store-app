import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';

const MainPage = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default MainPage;
