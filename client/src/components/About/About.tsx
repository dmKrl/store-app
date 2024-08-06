import s from './About.module.css';
import '../../App.css';
import MainButton from '../UI/MainButton/MainButton';

const About = () => {
    return (
        <div className={s.about}>
            <img
                className={s.aboutAirpodsFront}
                src="image/headphonesWhiteFront.png"
                alt="airpods"
            />
            <img
                className={s.aboutLine}
                src="image/Line.svg"
                alt="line-svg"
            />
            <div className="container">
                <div className={s.aboutContent}>
                    <div className={s.aboutLeft}>
                        <h2 className={s.aboutHeading}>Кто мы?</h2>
                        <p className={s.aboutMainText}>
                            С 2018 года продаем оригинальные беспроводные
                            наушники Airpods, комплектами и по частям. В случае
                            поломки, потери наушника, кейса или кабеля - вы
                            можете заказать их на нашем сайте. Даем гарантию 30
                            дней на комплект и его составляющие.
                        </p>
                        <MainButton>Перейти в каталог</MainButton>
                    </div>
                    <div className={s.aboutRight}>
                        <img
                            src="image/airpodsAboutComponent.png"
                            alt="airpods"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
