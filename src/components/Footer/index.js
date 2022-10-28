import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrap">
                <div className="flex">
                    <div className="logo">
                        <a href="/"><img src="/img/logo2.svg"/></a>
                    </div>
                    <ul className="top-ul">
                        <li><a href="#">Приём обращений</a></li>
                        <li><a href="#">Карта сайта</a></li>
                        <li><a href="#">Версия для слабовидящих</a></li>
                    </ul>
                    <ul className="top-ul other">
                        <li><a href="#">+7 (900) 000-00-00</a></li>
                        <li><a href="#">pro@redsign.ru</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
                <div className="line"></div>
                <div className="flex">
                    <nav>
                        <p>Город</p>
                        <ul>
                            <li><a href="#">Общая информация</a></li>
                            <li><a href="#">История</a></li>
                            <li><a href="#">Символика</a></li>
                            <li><a href="#">Экстренные случаи</a></li>
                            <li><a href="#">Телефоны доверия</a></li>
                            <li><a href="#">Инвестиционная привлекательность</a></li>
                            <li><a href="#">СМИ города</a></li>
                            <li><a href="#">Экономика</a></li>
                            <li><a href="#">Социальная сфера</a></li>
                            <li><a href="#">Генеральный план</a></li>
                            <li><a href="#">Открытые данные</a></li>
                            <li><a href="#">Фотогалерея</a></li>
                            <li><a href="#">Проекты</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <p>Администрация</p>
                        <ul>
                            <li><a href="#">Структура администрации города</a></li>
                            <li><a href="#">Полномочия, задачи и функции</a></li>
                            <li><a href="#">Руководство</a></li>
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
                    </nav>
                    <nav>
                        <p>Документы</p>
                        <ul>
                            <li><a href="#">Нормативные правовые акты</a></li>
                            <li><a href="#">Законопроекты</a></li>
                            <li><a href="#">Регламенты государственных и муниципальных услуг</a></li>
                            <li><a href="#">Установленные формы обращений и заявлений</a></li>
                            <li><a href="#">Уставные документы</a></li>
                        </ul>
                        <p>Закупки</p>
                        <ul>
                            <li><a href="#">Перечень информационных сообщений об объявленных торгах</a></li>
                            <li><a href="#">Планы-графики размещения заказов</a></li>
                        </ul>
                        <p>Обращения</p>
                        <ul>
                            <li><a href="#">Написать письмо</a></li>
                            <li><a href="#">Ответы на обращение</a></li>
                            <li><a href="#">Мои обращения</a></li>
                            <li><a href="#">Письменные обращения</a></li>
                            <li><a href="#">Личный приём</a></li>
                            <li><a href="#">Информация о рассмотрении обращений</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="bottom-block flex">
                    <div className="copy">
                        © Все права защищены
                    </div>
                    <div className="dev">
                        Разработано в <a href="#">Альфа Системс</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
