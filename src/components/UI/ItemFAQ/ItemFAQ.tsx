import { FC } from 'react';
import s from './ItemFAQ.module.css'

interface ItemFAQProps {
    itemFAQText: string;
}

const ItemFAQ: FC<ItemFAQProps> = ({ itemFAQText }) => {
    return (
        <div className={s.itemFAQBlock}>
            <p>{itemFAQText}</p>
            <button><img src="image/buttonFAQ.svg" alt="button-FAQ" /></button>
        </div>
    );
};

export default ItemFAQ;
