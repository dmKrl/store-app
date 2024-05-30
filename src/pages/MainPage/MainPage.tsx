import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MainPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainPage;
