import React from 'react';

const AdministrationLayout = ({children}) => {
    return (
        <div className="inner-page">
            <div className="wrap flex">
                <div className="inner-page-content">
                    {children}
                </div>
                <aside className="page-right-side">
                    <ul>
                        <li><a href="#">Структура администрации города</a></li>
                        <li><a href="#">Полномочия, задачи и функции</a></li>
                        <li><a href="#" className="active">Руководство</a></li>
                        <li><a href="#">Территориальные органы и представительства</a></li>
                        <li><a href="#">Участие в программах и международное сотрудничество</a></li>
                        <li><a href="#">Подведомственные организации</a></li>
                        <li><a href="#">Защита населения</a></li>
                        <li><a href="#">Результаты проверок</a></li>
                        <li><a href="#">Статистическая информация</a></li>
                        <li><a href="#">Информационные системы</a></li>
                        <li><a href="#">Учрежденные СМИ</a></li>
                        <li><a href="#">Информация</a></li>
                        <li><a href="#">Вакансии</a></li>
                        <li><a href="#">Приоритеты</a></li>
                        <li><a href="#">Антикоррупционная деятельность</a></li>
                    </ul>
                    <div className="virtual">
                        <img src="/img/index-bottom-block1.svg"/>
                        <a href="#">Виртуальная приемная</a>
                        В «Личном кабинете» вы сможете посмотреть результаты по каждому отправленному вами обращению или
                        запросу
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
    );
};

export default AdministrationLayout;
