import React from 'react';
import StandartLayout from "../layouts/standartLayout";

const Documents = () => {
    return (
        <StandartLayout>
            <div className="navi">
                <div className="wrap">
                    <a href="#">Главная</a> <i className="fa fa-angle-right"></i> <a href="#">Документы</a> <i
                    className="fa fa-angle-right"></i> Нормативные правовые акты
                </div>
            </div>
            <div className="inner-page">
                <div className="wrap flex">
                    <div className="inner-page-content">
                        <div className="docs-page">
                            <h1>Документы</h1>
                            <div className="sort flex">
                                <div className="date">
                                    <p>Начало активности (дата)</p>
                                    <div className="flex">
                                        <div className="input">
                                            <span>с</span>
                                            <input type="text" className="datepicker"/>
                                            <svg className="icon-svg">
                                                <use xlinkHref="img/sprite.svg#calendar"></use>
                                            </svg>
                                        </div>
                                        <div className="input">
                                            <span>по</span>
                                            <input type="text" className="datepicker"/>
                                            <svg className="icon-svg">
                                                <use xlinkHref="img/sprite.svg#calendar"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <p>Название</p>
                                    <div>
                                        <input type="text"/>
                                        <svg className="icon-svg">
                                            <use xlinkHref="img/sprite.svg#search2"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="link">
                                    <a href="#">Указ Президента Российской Федерации от 13.12.2021 № 701 "Об
                                        имущественном взносе Российской Федерации в Государственную корпорацию по
                                        содействию разработке, производству и экспорту высокотехнологичной промышленной
                                        продукции "Ростех"</a>
                                </div>
                                <div className="flex">
                                    <div className="date">
                                        Дата публикации: 13 декабря 2021
                                    </div>
                                    <a href="#">
                                        <svg className="icon-svg fs-4 me-2 flex-shrink-0">
                                            <use xlinkHref="/img/sprite.svg#file"></use>
                                        </svg>
                                        Скачать (PDF, 77 КБ)</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="link">
                                    <a href="#">Указ Президента Российской Федерации от 13.12.2021 № 701 "Об
                                        имущественном взносе Российской Федерации в Государственную корпорацию по
                                        содействию разработке, производству и экспорту высокотехнологичной промышленной
                                        продукции "Ростех"</a>
                                </div>
                                <div className="flex">
                                    <div className="date">
                                        Дата публикации: 13 декабря 2021
                                    </div>
                                    <a href="#">
                                        <svg className="icon-svg fs-4 me-2 flex-shrink-0">
                                            <use xlinkHref="img/sprite.svg#file"></use>
                                        </svg>
                                        Скачать (PDF, 77 КБ)</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="link">
                                    <a href="#">Указ Президента Российской Федерации от 13.12.2021 № 701 "Об
                                        имущественном взносе Российской Федерации в Государственную корпорацию по
                                        содействию разработке, производству и экспорту высокотехнологичной промышленной
                                        продукции "Ростех"</a>
                                </div>
                                <div className="flex">
                                    <div className="date">
                                        Дата публикации: 13 декабря 2021
                                    </div>
                                    <a href="#">
                                        <svg className="icon-svg fs-4 me-2 flex-shrink-0">
                                            <use xlinkHref="/img/sprite.svg#file"></use>
                                        </svg>
                                        Скачать (PDF, 77 КБ)</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="link">
                                    <a href="#">Указ Президента Российской Федерации от 13.12.2021 № 701 "Об
                                        имущественном взносе Российской Федерации в Государственную корпорацию по
                                        содействию разработке, производству и экспорту высокотехнологичной промышленной
                                        продукции "Ростех"</a>
                                </div>
                                <div className="flex">
                                    <div className="date">
                                        Дата публикации: 13 декабря 2021
                                    </div>
                                    <a href="#">
                                        <svg className="icon-svg fs-4 me-2 flex-shrink-0">
                                            <use xlinkHref="/img/sprite.svg#file"></use>
                                        </svg>
                                        Скачать (PDF, 77 КБ)</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="page-right-side">
                        <ul>
                            <li><a href="#" className="active">Нормативные правовые акты</a></li>
                            <li><a href="#">Законопроекты</a></li>
                            <li><a href="#">Регламенты государственных и муниципальных услуг</a></li>
                            <li><a href="#">Установленные формы обращений и заявлений</a></li>
                        </ul>
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

export default Documents;
