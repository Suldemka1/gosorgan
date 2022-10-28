import React from 'react';
import StandartLayout from "../../layouts/standartLayout";
import FeedbackLayout from "../../layouts/feedbackLayout";

const Feedback = () => {
    return (
        <StandartLayout>
            <div className="navi">
                <div className="wrap">
                    <a href="#">Главная</a> <i className="fa fa-angle-right"></i> <a href="#">Виртуальная приемная</a>
                    <i className="fa fa-angle-right"></i> Написать письмо
                </div>
            </div>
            <FeedbackLayout>
                <div className="feedback-page">
                    <h1>Написать письмо</h1>
                    <div className="top-text">
                        <p>Поля, отмеченные <span>*</span>, обязательны для заполнения</p>
                        <p>Информация о персональных данных авторов обращений, направленных в электронном виде,
                            хранится и обрабатывается с соблюдением требований российского законодательства о
                            персональных данных.</p>
                    </div>
                    <h2>В электронной анкете в Вашем обращении укажите:</h2>
                    <div className="tabs">
                        <ul>
                            <li><a href="#t1">Кому</a></li>
                            <li><a href="#t2">Куда</a></li>
                        </ul>
                        <div id="t1">
                            <div className="field-name">
                                Должностное лицо <span>*</span>
                            </div>
                            <select>
                                <option>Булатова Владислава Павловна [Ответственный за организацию работы мобильной
                                    приёмной]
                                </option>
                                <option>Булатова Владислава Павловна [Ответственный за организацию работы мобильной
                                    приёмной]
                                </option>
                                <option>Булатова Владислава Павловна [Ответственный за организацию работы мобильной
                                    приёмной]
                                </option>
                            </select>
                        </div>
                        <div id="t2">
                            <div className="field-name">
                                Ответственная организация <span>*</span>
                            </div>
                            <input type="text" value="Современное Государственное Учреждение" className="readonly"
                                   readOnly/>
                        </div>
                    </div>
                    <div className="br"></div>
                    <h2>Укажите в именительном падеже Ваши</h2>
                    <div className="field-name">
                        Фамилия <span>*</span>
                    </div>
                    <input type="text"/>
                    <div className="field-name">
                        Имя <span>*</span>
                    </div>
                    <input type="text"/>
                    <div className="name3">
                        <div className="field-name">
                            Отчество <span>*</span>
                        </div>
                        <input type="text"/>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="ch1"/><label htmlFor="ch1">Отчество отсутствует</label>
                    </div>
                    <div className="field-name">
                        Наименование организации (юридического лица)
                    </div>
                    <input type="text"/>
                    <div className="br"></div>
                    <h2>Укажите адрес электронной почты для получения ответа или уведомления о
                        переадресации обращения</h2>
                    <div className="field-name">
                        Email <span>*</span>
                    </div>
                    <input type="text"/>
                    <div className="br"></div>
                    <h2>Контактные данные</h2>
                    <div className="field-name">
                        Телефон
                    </div>
                    <div className="phone-field">
                        <input type="text" id="phone" name="quantity1"/>
                    </div>
                    <div className="br"></div>
                    <div className="add-person">
                        <div className="block-name">
                            Соавтор
                            <a className="close"></a>
                        </div>
                        <div className="fields">
                            <h2>Укажите в именительном падеже Ваши</h2>
                            <div className="field-name">
                                Фамилия <span>*</span>
                            </div>
                            <input type="text"/>
                            <div className="field-name">
                                Имя <span>*</span>
                            </div>
                            <input type="text"/>
                            <div className="name4">
                                <div className="field-name">
                                    Отчество <span>*</span>
                                </div>
                                <input type="text"/>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="ch2"/><label htmlFor="ch2">Отчество
                                отсутствует</label>
                            </div>
                            <div className="field-name">
                                Наименование организации (юридического лица)
                            </div>
                            <input type="text"/>
                            <div className="br"></div>
                            <h2>Укажите адрес электронной почты для получения ответа или
                                уведомления о переадресации обращения</h2>
                            <div className="field-name">
                                Email <span>*</span>
                            </div>
                            <input type="text"/>
                            <div className="br"></div>
                            <h2>Контактные данные</h2>
                            <div className="field-name">
                                Телефон
                            </div>
                            <input type="text"/>
                        </div>
                    </div>
                    <button className="add">Добавить соавтора</button>
                    <div className="br"></div>
                    <h2>Текст обращения</h2>
                    <div className="text">
                        В соответствии с частью 1 статьи 7 Федерального закона от 2 мая 2006 года
                        No59-ФЗ «Опорядке рассмотрения обращений граждан Российской Федерации»
                        гражданин в своем обращении в обязательном порядке излагает суть
                        предложения, заявления или жалобы.<br/><br/>
                        Обращаем Ваше внимание, что в целях объективного и всестороннего
                        рассмотрения Вашего обращения рекомендуется в тексте обращения указывать
                        адрес описанного Вами места действия, факта или события.<br/><br/>
                        В случае, если текст Вашего обращения не позволяет определить суть
                        предложения, заявления или жалобы, ответ на обращение не дается и оно не
                        подлежит направлению на рассмотрение в государственный орган, орган местного
                        самоуправления или должностному лицу в соответствии с их компетенцией, о чем
                        Вам будет сообщено в течение семи дней со дня регистрации
                        обращения.<br/><br/>
                        Обращаем Ваше внимание, что при написании текста обращения в форме
                        электронного документа в поле ввода текста обращения в форме электронного
                        документа для изложения сути предложения, заявления или жалобы отсутствует
                        ограничение по вводимому количеству символов.
                    </div>
                    <a className="text-link"></a>
                    <div className="field-name">
                        Изложите суть предложения, заявления или жалобы <span>*</span>
                    </div>
                    <textarea></textarea>
                    <div className="text">
                        В соответствии с частью 1 статьи 7 Федерального закона от 2 мая 2006 года
                        No59-ФЗ «Опорядке рассмотрения обращений граждан Российской Федерации»
                        гражданин в своем обращении в обязательном порядке излагает суть
                        предложения, заявления или жалобы.<br/><br/>
                        Обращаем Ваше внимание, что в целях объективного и всестороннего
                        рассмотрения Вашего обращения рекомендуется в тексте обращения указывать
                        адрес описанного Вами места действия, факта или события.<br/><br/>
                        В случае, если текст Вашего обращения не позволяет определить суть
                        предложения, заявления или жалобы, ответ на обращение не дается и оно не
                        подлежит направлению на рассмотрение в государственный орган, орган местного
                        самоуправления или должностному лицу в соответствии с их компетенцией, о чем
                        Вам будет сообщено в течение семи дней со дня регистрации
                        обращения.<br/><br/>
                        Обращаем Ваше внимание, что при написании текста обращения в форме
                        электронного документа в поле ввода текста обращения в форме электронного
                        документа для изложения сути предложения, заявления или жалобы отсутствует
                        ограничение по вводимому количеству символов.
                    </div>
                    <a className="text-link"></a>
                    <div className="br"></div>
                    <h2>Для приложения к обращению необходимых документов и материалов в электронной
                        форме нажмите кнопку «Прикрепить файл(ы)».</h2>
                    <div className="br"></div>
                    <input type="file" />
                    <button className="upload">Прикрепить файл</button>
                    <div className="text">
                        Обращаем Ваше внимание, что подтверждением прикрепления файла(ов)
                        вложения является появление строки с наименованием(ями) выбранного(ых)
                        Вами файла(ов).
                    </div>
                    <div className="br"></div>
                    <div className="br"></div>
                    <button className="other">Написать письмо</button>
                </div>
            </FeedbackLayout>
        </StandartLayout>
    );
};

export default Feedback;
