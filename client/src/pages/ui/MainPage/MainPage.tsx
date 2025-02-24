import { Outlet } from 'react-router';
import { useModalStore } from 'src/features/store';
import Header from 'src/widgets/ui/Header/Header';
import Footer from 'src/widgets/ui/Footer/Footer';
import { AuthPage } from '../LoginPages/AuthPage/AuthPage';
import { RegisterPage } from '../LoginPages/RegisterPage/RegisterPage';

export const MainPage = () => {
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
