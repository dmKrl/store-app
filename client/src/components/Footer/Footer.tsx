import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import s from './Footer.module.css';
import { useUsersStore } from '../../store/UsersStore';
import { useModalStore } from '../../store/ModalStore';

const Footer = () => {
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
        <div className={s.footer}>
            <div className="container">
                <div className={s.footerUp}>
                    <a href="#">
                        <img src="image/apple.svg" alt="apple" />
                    </a>
                    <Link className={s.footerLink} to="/catalog">
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
                    <Link
                        className={s.footerLink}
                        to=""
                        onClick={(event) => {
                            event.preventDefault();
                            checkAuthUser();
                        }}
                    >
                        Корзина
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
