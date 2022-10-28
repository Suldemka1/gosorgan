import React from 'react';
import StandartLayout from "../layouts/standartLayout";
import Slider from "../components/Slider";
import News from "../components/News";
import Resources from "../components/resources";
import CityProjects from "../components/CityProjects";
import Services from "../components/Services";

const Main = () => {
    return (
        <StandartLayout>
            <Slider/>
            <News/>
            <div className="wrap">
                <div className="index-page-banner">
                    <div className="b1">
                        <p>Виртуальная <br/>приёмная</p>
                        <button>Задать вопрос</button>
                    </div>
                    <div className="b2">
                        Наши специалисты рассмотрят заявку в течение пяти рабочих дней и ответят удобным для вас
                        способом. <br/><br/>
                        Или обратитесь по телефону:
                        <a href="#">+7 495 000-00-01</a>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <div className="index-bottom-blocks flex">
                    <div className="item">
                        <img src="/img/index-bottom-block1.svg"/>
                        <div className="text">
                            <a href="#">Виртуальная приемная</a>
                            В «Личном кабинете» вы сможете посмотреть результаты по каждому отправленному вами обращению
                            или запросу
                        </div>
                    </div>
                    <div className="item">
                        <img src="/img/index-bottom-block2.svg"/>
                        <div className="text">
                            <a href="#">Вакансии города</a>
                            Сведения о вакантных должностях государственной службы
                        </div>
                    </div>
                </div>
            </div>
            <Services />
            <div className="wrap">
                <CityProjects/>
            </div>

            <Resources/>
        </StandartLayout>
    );
};

export default Main;
