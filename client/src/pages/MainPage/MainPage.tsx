import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AuthPage from '../AuthPage/AuthPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import { useModalStore } from '../../features/store/ModalStore/ModalStore';

const MainPage = () => {
    const { isVisibleModalAuth, isVisibleModalRegistration } = useModalStore();
    return (
        <>
            <Header />
            {isVisibleModalAuth && <AuthPage />}
            {isVisibleModalRegistration && <RegisterPage />}
            <Outlet />
            <Footer />
        </>
    );
};

export default MainPage;
