import { FC } from 'react';
import s from './CatalogButton.module.css';

interface CatalogButtonProps {
    children: string;
}

const CatalogButton: FC<CatalogButtonProps> = ({ children }) => {
    return <button className={s.catalogButton}>{children}</button>;
};

export default CatalogButton;
