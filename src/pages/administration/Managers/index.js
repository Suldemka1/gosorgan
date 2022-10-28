import React from 'react';
import StandartLayout from "../../../layouts/standartLayout";
import AdministrationLayout from "../../../layouts/administrationLayout";

const Managers = () => {
    return (
        <StandartLayout>
            <div className="navi">
                <div className="wrap">
                    <a href="#">Главная</a> <i className="fa fa-angle-right"></i> <a href="#">Администрация</a> <i
                    className="fa fa-angle-right"></i> Руководство
                </div>
            </div>
            <AdministrationLayout>
                <div className="managers-page">
                    <h1>Руководство</h1>
                    <div className="item flex">
                        <div className="image">
                            <img src="/img/manager.png"/>
                        </div>
                        <div className="text">
                            <div className="name">
                                <a href="#">Андреев Николай <br/>Александрович</a>
                            </div>
                            <div class="prof">
                                Заместитель руководителя
                            </div>
                            <a href="#" class="mail">ar10@Mail.ru</a>
                            <a href="#" class="phone">+7 495 000-00-00</a>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="item flex">
                        <div className="image">
                            <img src="/img/manager.png"/>
                        </div>
                        <div className="text">
                            <div className="name">
                                <a href="#">Андреев Николай <br/>Александрович</a>
                            </div>
                            <div class="prof">
                                Заместитель руководителя
                            </div>
                            <div class="adress">
                                121000, Москва, ул. Московская, д. 165
                            </div>
                            <a href="#" className="mail">ar10@Mail.ru</a>
                            <a href="#" className="phone">+7 495 000-00-00</a>
                            <a href="#" className="site">www.something_work.ru</a>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="item flex">
                        <div className="image">
                            <img src="/img/manager.png"/>
                        </div>
                        <div className="text">
                            <div className="name">
                                <a href="#">Андреев Николай <br/>Александрович</a>
                            </div>
                            <div className="prof">
                                Заместитель руководителя
                            </div>
                            <a href="#" className="mail">ar10@Mail.ru</a>
                            <a href="#" className="phone">+7 495 000-00-00</a>
                            <a href="#" className="site">http://kremlin.ru/</a>
                        </div>
                    </div>
                </div>
            </AdministrationLayout>
        </StandartLayout>
    );
};

export default Managers;
