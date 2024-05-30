import { FC, useState } from 'react';
import s from './ItemFAQ.module.css';
import { useSpring, animated } from '@react-spring/web';

interface ItemFAQProps {
    itemFAQText: string;
}

const ItemFAQ: FC<ItemFAQProps> = ({ itemFAQText }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const styles = useSpring({
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.4s ease',
    });

    function changeIsVisible(): void {
        setIsVisible(!isVisible);
    }

    return (
        <div className={s.itemFAQContent}>
            <div className={s.itemFAQBlock}>
                <p>{itemFAQText}</p>
                <button onClick={changeIsVisible}>
                    <img src="image/buttonFAQ.svg" alt="button-FAQ" />
                </button>
            </div>
            <div
                className={s.itemFAQTextBox}
                style={{ display: isVisible ? 'block' : 'none' }}
            >
                <animated.p className={s.itemFAQMainText} style={styles}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error quia adipisci ipsam eius atque tempore quaerat, fugiat
                    perferendis assumenda. Voluptates?
                </animated.p>
            </div>
        </div>
    );
};

export default ItemFAQ;
