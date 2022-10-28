import React from 'react';

const Services = () => {
    return (
        <div className="wrap">
            <div className="index-services-block">
                <div className="block-name">
                    Сервисы для горожан
                </div>
                <div className="tabs">
                    <ul>
                        <li><a href="#t1">Физические лица</a></li>
                        <li><a href="#t2">Органы власти</a></li>
                        <li><a href="#t3">Юридические лица</a></li>
                    </ul>
                    <div id="t1">
                        <div className="flex">
                            {[1,2,3,4,5,6].map((item, index) => <div key={index} className="item">
                                <img src="/img/service.jpg"/>
                                <a href="#">Градостроительство и архитектура</a>
                                Улучшение городской инфраструктуры
                            </div>)}
                        </div>
                    </div>
                    <div id="t2">
                        <div className="flex">
                            {[1,2,3,4].map((item, index) => <div key={index} className="item">
                                <img src="/img/service.jpg"/>
                                <a href="#">Градостроительство и архитектура</a>
                                Улучшение городской инфраструктуры
                            </div>)}
                        </div>
                    </div>
                    <div id="t3">
                        <div className="flex">
                            {[1,2,3,4,5].map((item, index) => <div key={index} className="item">
                                <img src="/img/service.jpg"/>
                                <a href="#">Градостроительство и архитектура</a>
                                Улучшение городской инфраструктуры
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
