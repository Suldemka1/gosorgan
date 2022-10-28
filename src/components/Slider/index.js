import React from 'react';

const Slider = () => {
    return (
        <div className="index-page-slider">
            {[1, 2, 3].map((item, index) => {
                return (
                    <div key={index} className="item">
                        <div className="image" style={{backgroundImage: `url('/img/slider.webp')`}}>
                            <img src="/img/slider.webp"/></div>
                        <div className="wrap">
                            <div className="text">
                                <div className="name">
                                    Готовая дизайн система государственных сайтов
                                </div>
                                <p>Структура и демо-наполнение в соответствие с требованиями федеральных законов</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Slider;
