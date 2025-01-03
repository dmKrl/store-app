import s from './MainCharacteristics.module.css';

const Characteristics = () => {
    return (
        <div className={s.characteristicsWrapper}>
            <div className={s.characteristicsContent}>
                <div className={s.characteristicsUp}>
                    <div className="container">
                        <div className={s.characteristicsUpBlock}>
                            <h2 className={s.characteristicsHeading}>
                                3 причины купить AirPods
                            </h2>
                            <p className={s.characteristicsMainText}>
                                Airpods – одни из лучших моделей беспроводных
                                наушников на сегодняшний день. По оценкам, за
                                2019-й Apple продала 35 миллионов пар AirPods.
                            </p>
                            <ul className={s.characteristicsList}>
                                <li>
                                    Флагман рынка
                                    <span>
                                        Cамые продаваемые беспроводные наушники
                                        2019 года.
                                    </span>
                                </li>
                                <li>
                                    Лучшее звучание
                                    <span>
                                        Ощущается ровное звучание низких,
                                        средних и высоких частот.
                                    </span>
                                </li>
                                <li>
                                    Хорошая автономность
                                    <span>
                                        До 20-ти часов в режиме воспроизведения
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.characteristicsDown}>
                    <img src="image/headphonesBlack.png" alt="headphones" />
                </div>
            </div>
        </div>
    );
};

export default Characteristics;
