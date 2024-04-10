import { Link } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={s.navbar}>
            <Link to="/">Каталог</Link>
            <Link to="/">Инструкция</Link>
            <Link to="/">Доставка и оплата</Link>
            <Link to="/">Контакты</Link>
        </div>
    );
};

export default NavBar;
