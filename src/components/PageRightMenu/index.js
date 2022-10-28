import React from 'react';

const PageRightMenu = ({children}) => {
    return (
        <ul>
            {children}
            <li><a href="#">Общая информация</a></li>
            <li><a href="#">История</a></li>
            <li><a href="#">Символика</a></li>
            <li><a href="#">Экстренные случаи</a></li>
            <li><a href="#" className="active">Телефоны доверия</a></li>
            <li><a href="#">Инвестиционная привлекательность</a></li>
            <li><a href="#">СМИ города</a></li>
            <li><a href="#">Экономика</a></li>
            <li><a href="#">Социальная сфера</a></li>
            <li><a href="#">Генеральный план</a></li>
            <li><a href="#">Открытые данные</a></li>
            <li><a href="#">Фотогалерея</a></li>
            <li><a href="#">Проекты</a></li>
        </ul>
    );
};

const PageRightMenuItem = ({params}) => {
    return (
        <li><a href={params.href}>{params.title}</a></li>
    )
}

export default PageRightMenu;
