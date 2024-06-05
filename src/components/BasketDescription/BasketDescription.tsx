import s from './BasketDescription.module.css';

const BasketDescription = () => {
    return (
        <div className={s.basketDescription}>
            <div className={s.basketDescriptionBlock}>
                <p>Товар</p>
                <p>Цена, ₽</p>
                <p>Количество</p>
                <p>Стоимость</p>
            </div>
        </div>
    );
};

export default BasketDescription;
