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
                    <a className={s.footerLink} href="#">
                        Каталог
                    </a>
                    <a className={s.footerLink} href="#">
                        Инструкции
                    </a>
                    <a className={s.footerLink} href="#">
                        Оплата и доставка
                    </a>
                    <a className={s.footerLink} href="#">
                        Контакты
                    </a>
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
