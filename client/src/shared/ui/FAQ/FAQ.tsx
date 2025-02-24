import ItemFAQ from 'src/shared/ui/ItemFAQ/ItemFAQ';
import s from './FAQ.module.css';
import CatalogButton from 'src/shared/ui/CatalogButton/CatalogButton';

const FAQ = () => {
    return (
        <div className="container">
            <div className={s.FAQWrapper}>
                <div className={s.FAQContent}>
                    <ItemFAQ
                        itemFAQText={
                            'Можно ли подключать Airpods к смартфонам Android?'
                        }
                    />
                    <ItemFAQ itemFAQText={'Как заряжать AirPods?'} />
                    <ItemFAQ itemFAQText={'Даете ли вы гарантии?'} />
                </div>
                <div className={s.FAQDescription}>
                    <div className={s.FAQDescriptionBlock}>
                        <p>
                            Потеряли наушник, кейс <br /> или кабель? Вы также
                            можете приобрести их в нашем магазине
                        </p>
                        <CatalogButton>Перейти в каталог</CatalogButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
