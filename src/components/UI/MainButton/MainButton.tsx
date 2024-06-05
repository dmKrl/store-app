import { FC } from 'react';
import s from './MainButton.module.css';

interface MainButtonProps {
    children: string;
}

const MainButton: FC<MainButtonProps> = ({ children }) => {
    return <button className={s.mainButton}>{children}</button>;
};

export default MainButton;
