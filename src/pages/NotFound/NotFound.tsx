import '../../App.css';
import s from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={s.NotFound}>
            <div className={s.NotFoundContent}>
                <h2 className={s.NotFoundHeading}>404</h2>
                <p className={s.NotFoundMainText}>
                    Страница не найдена. Возможно, вы неверно указали адрес
                    страницы
                </p>
                <a className={s.NotFoundLink} href="/">
                    Перейти на главную
                </a>
            </div>
        </div>
    );
};

export default NotFound;
