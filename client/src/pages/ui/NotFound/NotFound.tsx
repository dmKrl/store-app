import s from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={s.notFound}>
            <div className={s.notFoundContent}>
                <h2 className={s.notFoundHeading}>404</h2>
                <p className={s.notFoundMainText}>
                    Страница не найдена. Возможно, вы неверно указали адрес
                    страницы
                </p>
                <a className={s.notFoundLink} href="/">
                    Перейти на главную
                </a>
            </div>
        </div>
    );
};
