import { Link } from 'react-router-dom';
import '../../App.css';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className="container">
                <div className={s.footerUp}>
                    <a href="#">
                        <img src="image/apple.svg" alt="apple" />
                    </a>
                    <Link className={s.footerLink} to="/">
                        Каталог
                    </Link>
                    <Link className={s.footerLink} to="/instraction">
                        Инструкции
                    </Link>
                    <Link className={s.footerLink} to="/pay-delivery">
                        Оплата и доставка
                    </Link>
                    <Link className={s.footerLink} to="/contacts">
                        Контакты
                    </Link>
                </div>
                <div className={s.footerDown}>
                    <p>Политика конфиденциальности</p>
                    <p>Договор оферты</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
