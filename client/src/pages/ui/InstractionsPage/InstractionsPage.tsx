import InstractionsList from 'shared/ui/InstractionsList/InstractionsList';
import InstractionsCard from 'shared/ui/InstractionsCard/InstractionsCard';
import s from './InstractionsPage.module.css';

const InstractionsPage = () => {
    return (
        <div className={s.instractionsContainer}>
            <div className="container">
                <div className={s.instractionsWrapper}>
                    <h2 className={s.instractionsHeading}>
                        Инструкция по синхронизации нового наушника AirPods
                    </h2>
                    <div className={s.instractionsContent}>
                        <InstractionsList
                            firstListItem="Поместите оба наушника AirPods в футляр для зарядки;"
                            secondListItem="Откройте крышку и проверьте световой индикатор состояния. Он должен мигать оранжевым цветом;"
                            thirdListItem="Откройте крышку, нажмите и в течение нескольких секунд удерживайте кнопку настройки на задней стороне футляра. Индикатор состояния должен начать мигать белым цветом;"
                        />
                        <img
                            src="image/airpods2OutCase.png"
                            alt="airpods-out-case"
                        />
                        <InstractionsList
                            firstListItem="На устройстве iPhone перейдите на экран «Домой»;"
                            secondListItem="Футляр, в котором находятся AirPods, поднесите к iPhone. На устройстве iPhone отобразится анимационная заставка программы настройки;"
                            thirdListItem="Нажмите «Подключить» и выберите «Готово»"
                        />
                    </div>
                    <div className={s.instractionsContentDown}>
                        <InstractionsCard
                            descriptionCard="Если индикатор по-прежнему мигает оранжевым цветом, подключите футляр к источнику питания, закройте крышку и подождите еще 60 минут. Затем откройте крышку, снова нажмите, и в течение нескольких секунд удерживайте кнопку настройки до тех пор, пока индикатор состояния не начнет мигать белым цветом."
                            imgUrl="image/airpods2Front.png"
                        />
                        <InstractionsCard
                            descriptionCard="Наушники AirPods легко синхронизируются друг с другом. Для того, чтобы подключить наушники AirPods, достаточно открыть крышку кейса рядом с устройством и на смартфоне отобразится предложение о синхронизации. "
                            imgUrl="image/airpods2InCase.png"
                        />
                        <InstractionsCard
                            descriptionCard="Наша компания предоставляет  возможность приобрести не целый комплект, а левый или правый наушник в отдельности, а также зарядный кейс для них. "
                            imgUrl="image/airpods2TopCase.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstractionsPage;
