import React from 'react';

const CityLayout = ({children}) => {
    return (
        <div className="inner-page">
            <div className="wrap flex">
                <div className="inner-page-content">
                    {children}
                </div>
                <aside className="page-right-side">
                    <ul>
                        <li><a href="/city" className="active">Общая информация</a></li>
                        <li><a href="/city/history">История</a></li>
                        <li><a href="/city/">Символика</a></li>
                        <li><a href="/city/">Экстренные случаи</a></li>
                        <li><a href="/city/phones">Телефоны доверия</a></li>
                        <li><a href="/city/invest">Инвестиционная привлекательность</a></li>
                        <li><a href="/city/">СМИ города</a></li>
                        <li><a href="/city/">Экономика</a></li>
                        <li><a href="/city/">Социальная сфера</a></li>
                        <li><a href="/city/">Генеральный план</a></li>
                        <li><a href="/city/">Открытые данные</a></li>
                        <li><a href="/city/photogallery">Фотогалерея</a></li>
                        <li><a href="/city/">Проекты</a></li>
                    </ul>
                    <div className="virtual">
                        <img src="/img/index-bottom-block1.svg"/>
                        <a href="src/pages/city/city#">Виртуальная приемная</a>
                        В «Личном кабинете» вы сможете посмотреть результаты по каждому отправленному вами обращению
                        или запросу
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
                        <a href="src/pages/city/city#">Вакансии города</a>
                        Сведения о вакантных должностях государственной службы
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default CityLayout;
