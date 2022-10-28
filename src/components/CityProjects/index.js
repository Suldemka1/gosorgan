import React from 'react';
import { $ } from 'jquery'

const CityProjects = () => {
    return (
        <div className="index-projects-block">
            <div className="block-name">
                Проекты города
            </div>
            <nav>
                <a className="active" onClick={() => {
                    $('.index-projects-block .list').slick('slickGoTo', 0)
                }}>
                    Розыгрыш денежных призов
                </a>
                <a onClick={() => $('.index-projects-block .list').slick('slickGoTo', 1)}>
                    Новые безопасные дороги
                </a>
                <a onClick={() => $('.index-projects-block .list').slick('slickGoTo', 2)}>
                    Российское долголетие
                </a>
                <a onClick={() => $('.index-projects-block .list').slick('slickGoTo', 3)}>
                    Здоровый образ жизни
                </a>
            </nav>
            <div className="list">
                <div className="item">
                    <img src="/img/project.jpg"/>
                    <div className="text">
                        <div className="name">
                            Розыгрыш денежных призов
                        </div>
                        <p>среди вакцинированных от коронавируса</p>
                        <button>Подробнее</button>
                    </div>
                </div>
                <div className="item">
                    <img src="/img/project.jpg"/>
                    <div className="text">
                        <div className="name">
                            Розыгрыш денежных призов
                        </div>
                        <p>среди вакцинированных от коронавируса</p>
                        <button>Подробнее</button>
                    </div>
                </div>
                <div className="item">
                    <img src="/img/project.jpg"/>
                    <div className="text">
                        <div className="name">
                            Розыгрыш денежных призов
                        </div>
                        <p>среди вакцинированных от коронавируса</p>
                        <button>Подробнее</button>
                    </div>
                </div>
                <div className="item">
                    <img src="/img/project.jpg"/>
                    <div className="text">
                        <div className="name">
                            Розыгрыш денежных призов
                        </div>
                        <p>среди вакцинированных от коронавируса</p>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityProjects;
