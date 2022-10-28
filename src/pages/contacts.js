import React from 'react';
import StandartLayout from "../layouts/standartLayout";

const Contacts = () => {
    return (
        <StandartLayout>
            <div className="navi">
                <div className="wrap">
                    <a href="#">Главная</a> <i className="fa fa-angle-right"></i> Контакты
                </div>
            </div>
            <div className="inner-page">
                <div className="wrap flex">
                    <div className="inner-page-content">
                        <div className="contacts-page">
                            <h1>Контакты</h1>
                            <div className="top-text">
                                В данном разделе вы сможете найти необходимые номера телефонов информационно-справочных
                                служб для решения ваших вопросов.
                            </div>
                            <div className="flex">
                                <div className="item">
                                    <a href="#">+7 (495) 000-00-00</a>
                                    <span>Единая справочная служба</span>
                                    круглосуточно
                                </div>
                                <div className="item">
                                    <a href="#">+7 (495) 000-00-00</a>
                                    <span>Центр мониторинга общественного мнения</span>
                                    номер для SMS: 7877
                                </div>
                                <div className="item">
                                    <a href="#">+7 (495) 000-00-00</a>
                                    <span>Служба поддержки портала</span>
                                    круглосуточно
                                </div>
                                <div className="item">
                                    <a href="#">+7 (495) 000-00-00</a>
                                    <span>Телефон прямой связи</span>
                                    с 9:00 до 16:00 ежедневно
                                </div>
                            </div>
                            <h2>Номера экстренных служб</h2>
                            <div className="item2">
                                <a href="#">112</a>
                                <span>Единый номер экстренных служб</span>
                                назначен в качестве единого номера вызова экстренных оперативных служб на всей
                                территории Российской Федерации.
                            </div>
                            <div className="item2">
                                <a href="#">101</a>
                                <span>Пожарная служба</span>
                                круглосуточно
                            </div>
                            <div className="item2">
                                <a href="#">102</a>
                                <span>Полиция</span>
                                круглосуточно
                            </div>
                            <div className="item2">
                                <a href="#">103</a>
                                <span>Скорая помощь</span>
                                круглосуточно
                            </div>
                            <div className="item2">
                                <a href="#">104</a>
                                <span>Служба газа</span>
                                круглосуточно
                            </div>
                        </div>
                    </div>
                    <aside className="page-right-side">
                        <div className="virtual">
                            <img src="/img/index-bottom-block1.svg"/>
                                <a href="#">Виртуальная приемная</a>
                                В «Личном кабинете» вы сможете посмотреть результаты по каждому отправленному вами
                                обращению или запросу
                        </div>
                        <div className="banner">
                            <img src="/img/banner.jpg"/>
                                <div className="text">
                                    <span>Вам нравится наш новый сайт?</span>
                                    Проголосуйте! Нам очень важно ваше мнение.
                                </div>
                                <button>Подробнее</button>
                        </div>
                        <div className="virtual">
                            <img src="/img/index-bottom-block2.svg"/>
                                <a href="#">Вакансии города</a>
                                Сведения о вакантных должностях государственной службы
                        </div>
                    </aside>
                </div>
            </div>
        </StandartLayout>
    );
};

export default Contacts;
