import { Outlet } from 'react-router';
import Header from '../../../widgets/ui/Header/Header';
import Footer from '../../../widgets/ui/Footer/Footer';
import AuthPage from '../LoginPages/AuthPage/AuthPage';
import RegisterPage from '../LoginPages/RegisterPage/RegisterPage';
import { useModalStore } from '../../../features/store/ModalStore/ModalStore';

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
