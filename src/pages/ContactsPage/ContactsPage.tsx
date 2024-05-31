import s from './ContactsPage.module.css';

const ContactsPage = () => {
    return (
        <div className={s.contactsWrapper}>
            <div className={s.contactsWrapperBlock}>
                <div className={s.contactsContent}>
                    <h2 className={s.contactsHeading}>Контакты</h2>
                    <div className={s.contactsDescription}>
                        <a className={s.contactsPhoneLink} href="tel:+79005555555">+7 (900) 555-55-55</a>
                        <a className={s.contactsMailLink} href="mail:malito@random.com">airpods-pro.com</a>
                        <p>Работаем ежедневно с 10:00 до 21:00</p>
                    </div>
                    <div className={s.contactsSocial}>
                        <a href="">
                            <img src="image/facebook.svg" alt="icon-facebook" />
                        </a>
                        <a href="">
                            <img
                                src="image/instagram.svg"
                                alt="icon-instagram"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;
