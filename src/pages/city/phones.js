import React from 'react';
import StandartLayout from "../../layouts/standartLayout";
import CityLayout from "../../layouts/cityLayout";

const Phones = () => {
    return (
        <StandartLayout>
            <div className="navi">
                <div className="wrap">
                    <a href="#">Главная</a> <i className="fa fa-angle-right"></i> Город
                </div>
            </div>

            <CityLayout>
                <div className="phones-page">
                    <h1>Телефоны доверия</h1>
                    <table>
                        <thead>
                        <tr>
                            <td>Название организации</td>
                            <td>Телефоны</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>МУ МВД России "Мытищинское" <br/>E-mail: <a href="#">uvd-mitishi@mail.ru</a>
                            </td>
                            <td>583-13-70 <br/>(круглосуточно)</td>
                        </tr>
                        <tr>
                            <td>ГУ МВД России по Московской области</td>
                            <td>8 (495) 692-70-66</td>
                        </tr>
                        <tr>
                            <td>Управление собственной безопасности ГУ МВД России по МО</td>
                            <td>8 (499) 317-24-66 <br/>круглосуточно</td>
                        </tr>
                        <tr>
                            <td>ГИБДД ГУ МВД России по Московской области</td>
                            <td>8 (499) 763-11-82</td>
                        </tr>
                        <tr>
                            <td>Отдел ГИБДД МУ МВД России «Мытищинское»</td>
                            <td>586-40-11</td>
                        </tr>
                        <tr>
                            <td>1-ая Служба управления Федеральной службы России по контролю за оборотом
                                наркотиков по Московской области
                            </td>
                            <td>586-73-93 <br/>круглосуточно, анонимно</td>
                        </tr>
                        <tr>
                            <td>Управление ФСКН России по Московской области <br/>Е-mail: <a
                                href="#">info@gnkmo.ru</a></td>
                            <td>8 (499) 152-53-52 <br/>круглосуточно</td>
                        </tr>
                        <tr>
                            <td>
                                УФМС России по Московской области для пресечения коррупционных проявлений со
                                стороны сотрудников УФМС
                                России по МО
                            </td>
                            <td>
                                8-916-655-55-93
                                <br/>
                                8 (498) 642-19-30
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Межрайонный отдел УФМС России по МО в городском поселении Мытищи оформления
                                загран.паспортов для граждан
                                РФ Для иностранных граждан по оформлению патента
                            </td>
                            <td>
                                586-38-32
                                <br/>
                                8-968-838-86-11
                                <br/>
                                8-985-234-54-83
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Региональная общественная организация по защите прав потребителей в
                                жилищно-коммунальной сфере по
                                Московской области. «Телефон доверия» Защита прав производится на безвозмездной
                                основе
                                <br/>
                            </td>
                            <td>
                                8-905-709-87-03;
                                <br/>
                                8-905-708-73-11
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Горячая линия в Администрации Мытищинского муниципального района по применению
                                трудового
                                законодательства РФ
                            </td>
                            <td>586-25-12</td>
                        </tr>
                        <tr>
                            <td>
                                Права потребителей (Горячая линия)
                            </td>
                            <td>
                                617-88-15
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Служба «Антитеррор» - «Телефон доверия» ФСБ России
                            </td>
                            <td>
                                (495) 914-22-22
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Главное управление МЧС России по Московской области
                            </td>
                            <td>
                                424-11-01
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Центр управления в кризисных ситуациях (МЧС)
                            </td>
                            <td>
                                (495) 995-99-99
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Управление Федеральной налоговой службы России по Московской области
                            </td>
                            <td>
                                119-11-70, <br/>
                                круглосуточно
                            </td>
                        </tr>
                        <tr>
                            <td>Мытищинский центр социальной помощи семье и детям "СЕМЬЯ"</td>
                            <td>
                                (495) 684-74-31 <br/>
                                с 9.00 до 18.00
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </CityLayout>
        </StandartLayout>
    );
};

export default Phones;
