import React from 'react';

const News = () => {
    return (
        <div className="wrap">
            <div className="index-news-block">
                <div className="top-block flex">
                    <div className="block-name">
                        Новости
                    </div>
                    <a href="#">Все новости</a>
                </div>
                <div className="flex">
                    <div className="big-item" style={{backgroundImage: `url('/img/news2.jpg')`}}>
                        <div className="text">
                            <a href="#">Совместный семинар-совещание Правительства и комиссии Госсовета по направлению
                                «Строительство, жилищно-коммунальное хозяйство</a>
                            <div className="date">
                                19 августа 2021, 7:06
                            </div>
                        </div>
                    </div>
                    <div className="item other">
                        <img src="/img/news.jpg"/>
                        <a href="#">Начался приём заявок на предоставление грантов на реализацию проектов в сфере
                            образования</a>
                        <div className="date">
                            19 августа 2021, 7:06
                        </div>
                    </div>
                    <div className="item">
                        <img src="/img/news.jpg"/>
                        <a href="#">Начался приём заявок на предоставление грантов на реализацию проектов в сфере
                            образования</a>
                        <div className="date">
                            19 августа 2021, 7:06
                        </div>
                    </div>
                    <div className="item">
                        <img src="/img/news.jpg"/>
                        <a href="#">Начался приём заявок на предоставление грантов на реализацию проектов в сфере
                            образования</a>
                        <div className="date">
                            19 августа 2021, 7:06
                        </div>
                    </div>
                    <div className="item">
                        <img src="/img/news.jpg"/>
                        <a href="#">Начался приём заявок на предоставление грантов на реализацию проектов в сфере
                            образования</a>
                        <div className="date">
                            19 августа 2021, 7:06
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
