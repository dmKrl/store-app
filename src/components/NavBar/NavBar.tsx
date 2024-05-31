import { Link } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={s.navbar}>
            <Link to="/">Каталог</Link>
            <Link to="/instraction">Инструкция</Link>
            <Link to="/pay-delivery">Доставка и оплата</Link>
            <Link to="/contacts">Контакты</Link>
        </nav>
    );
};

export default NavBar;
