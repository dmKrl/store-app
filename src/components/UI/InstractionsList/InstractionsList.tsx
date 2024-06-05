import { FC } from 'react';
import s from './Instractions.module.css';

interface InstractionsListProps {
    firstListItem: string;
    secondListItem: string;
    thirdListItem: string;
}

const InstractionsList: FC<InstractionsListProps> = ({
    firstListItem,
    secondListItem,
    thirdListItem,
}) => {
    return (
        <ul className={s.instractionsList}>
            <li>{firstListItem}</li>
            <li>{secondListItem}</li>
            <li>{thirdListItem}</li>
        </ul>
    );
};

export default InstractionsList;
