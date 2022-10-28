import React from 'react';

const PopupBoss = () => {
    return (
        <div className="popup-boss">
            <div className="window flex">
                <div className="text">
                    <div className="name">
                        Уважаемые посетители данного ресурса!
                    </div>
                    <p>Сайт создан для того, чтобы вы имели возможность в режиме online быть в курсе событий,
                        происходящих в жизни города, могли высказать мнение об актуальных для вас проблемах, а также
                        задать через интернет-приемную интересующие вас вопросы.</p>
                    <p>Искренне надеюсь, что общими усилиями мы сделаем столицу нашей республики лучше, краше,
                        комфортнее, а жизнь горожан – стабильнее и благополучнее.</p>
                    <div className="flex">
                        <p>О.В. Иванов</p>
                        <div className="sign"><img src="/img/sign.png"/></div>
                    </div>
                </div>
                <div className="person">
                    <div className="image">
                        <img src="/img/photo.png"/>
                    </div>
                    <div className="name">
                        Олег Владимирович <br/>
                        Иванов
                    </div>
                    <div className="prof">
                        Губернатор области
                    </div>
                    <a href="#" className="phone">8 800 000-00-00</a>
                    <a href="#" className="mail">info@sitename.ru</a>
                    <div className="hours">
                        приемные часы: <br/>
                        пн–пт с 8:00 до 17:00
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupBoss;
