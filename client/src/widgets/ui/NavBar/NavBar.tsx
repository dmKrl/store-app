import { Link, useNavigate } from 'react-router-dom';
import s from './NavBar.module.css';
import { useModalStore, useUsersStore } from 'features/store';

const NavBar = () => {
    const { checkUser } = useUsersStore();
    const { setIsVisibleModalAuth } = useModalStore();
    const navigate = useNavigate();

    const checkAuthUser = (): void => {
        checkUser().then((response): void => {
            if (response.status) {
                return setIsVisibleModalAuth();
            }
            return navigate('/basket');
        });
    };

    return (
        <nav className={s.navbar}>
            <Link to="/catalog">Каталог</Link>
            <Link to="/instraction">Инструкция</Link>
            <Link to="/pay-delivery">Доставка и оплата</Link>
            <Link to="/contacts">Контакты</Link>
            <Link
                to=""
                onClick={(event) => {
                    event.preventDefault();
                    checkAuthUser();
                }}
            >
                Корзина
            </Link>
        </nav>
    );
};

export default NavBar;
