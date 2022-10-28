import React from 'react';

const FeedbackLayout = ({children}) => {
    return (
        <div className="inner-page">
            <div className="wrap flex">
                <div className="inner-page-content">
                    {children}
                </div>
                <aside className="page-right-side">
                    <ul>
                        <li><a href="#" className="active">Написать письмо</a></li>
                        <li><a href="#">Ответы на обращение</a></li>
                        <li><a href="#">Мои обращения</a></li>
                        <li><a href="#">Письменные обращения</a></li>
                        <li><a href="#">Личный приём</a></li>
                        <li><a href="#">Информация о рассмотрении обращений</a></li>
                    </ul>
                    <div className="virtual">
                        <img src="img/index-bottom-block1.svg"/>
                            <a href="#">Виртуальная приемная</a>
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
                            <a href="#">Вакансии города</a>
                            Сведения о вакантных должностях государственной службы
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default FeedbackLayout;
