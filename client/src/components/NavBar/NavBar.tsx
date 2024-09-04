import { Link } from 'react-router-dom';
import s from './NavBar.module.css';
import { useUsersStore } from '../../store/UsersStore';

const NavBar = () => {
    const { checkUser } = useUsersStore();

    function checkAuthUser(): void {
        checkUser().then((response) => {
            console.log(response);
        });
    }

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
