import MainButton from '../UI/MainButton/MainButton';
import s from './TopContent.module.css';
import '../../App.css';

const TopContent = () => {
    return (
        <div className='container'>
            <div className={s.top}>
                <div className={s.topLeft}>
                    <div className={s.topDescription}>
                        <h1 className={s.topHeading}>Беспроводные наушники</h1>
                        <p className={s.topText}>Комплектом и по отдельности</p>
                    </div>
                    <div className={s.topBlockPrice}>
                        <MainButton>Узнать подробнее</MainButton>
                        <p className={s.topPrice}>69$</p>
                    </div>
                    <div className={s.topListBlock}>
                        <ul className={s.topList}>
                            <li>Прозрачный режим</li>
                            <li>Пространственное аудио</li>
                            <li>Четкое звучание</li>
                        </ul>
                    </div>
                </div>
                <div className={s.topRight}>
                    <p className={s.topRightText}>AirPods</p>
                    <img src="image/topheadphones.png" alt="headphones" />
                </div>
            </div>
        </div>
    );
};

export default TopContent;
