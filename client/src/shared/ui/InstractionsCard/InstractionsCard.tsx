import { FC } from 'react';
import s from './InstractionsCard.module.css';

interface InstractionsCardProps {
    descriptionCard: string;
    imgUrl: string;
}

const InstractionsCard: FC<InstractionsCardProps> = ({
    descriptionCard,
    imgUrl,
}) => {
    return (
        <div className={s.instractionsCard}>
            <img src={imgUrl} alt="airpods" />
            <p>{descriptionCard}</p>
        </div>
    );
};

export default InstractionsCard;
