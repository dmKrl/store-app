import s from './BasketDescription.module.css';

const BasketDescription = () => {
    return (
        <div className={s.basketDescription}>
            <div className={s.basketDescriptionBlock}>
                <p>Товар</p>
                <div className={s.basketDescriptionBlockRight}>
                    <p>Цена, ₽</p>
                    <p>Количество</p>
                    <p>Стоимость</p>
                </div>
            </div>
        </div>
    );
};

export default BasketDescription;
