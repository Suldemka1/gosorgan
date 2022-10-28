import React from 'react';
import AdministrationLayout from "../../../layouts/administrationLayout";
import StandartLayout from "../../../layouts/standartLayout";

const Manager = () => {
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
                    <h1>Заместитель руководителя Андреев Николай Александрович</h1>
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
                        </div>
                    </div>
                    <table>
                        <tr>
                            <td>E-Mail:</td>
                            <td>ar10@Mail.ru</td>
                        </tr>
                        <tr>
                            <td>Профессия:</td>
                            <td>Зам. начальника</td>
                        </tr>
                        <tr>
                            <td>Должность:</td>
                            <td>Заместитель руководителя</td>
                        </tr>
                        <tr>
                            <td>Телефон компании:</td>
                            <td>+7 495 000-00-00</td>
                        </tr>
                        <tr>
                            <td>Факс:</td>
                            <td>+7 495 000-00-00</td>
                        </tr>
                        <tr>
                            <td>Подразделения:</td>
                            <td>Заместители</td>
                        </tr>
                    </table>
                </div>
            </AdministrationLayout>
        </StandartLayout>
    );
};

    export default Manager;
