import { FC } from 'react';
import s from './PayDeliveryItem.module.css';

interface PayDeliveryItemProps {
    nameDelivery: string;
    priceDelivery: string;
    description: string;
}

const PayDeliveryItem: FC<PayDeliveryItemProps> = ({
    nameDelivery,
    priceDelivery,
    description,
}) => {
    return (
        <div className={s.payDeliveryItem}>
            <p className={s.payDeliveryItemName}>
                {nameDelivery}
                <span>{description}</span>
            </p>
            <p className={s.payDeliveryItemPrice}>{priceDelivery}</p>
        </div>
    );
};

export default PayDeliveryItem;
