import React from 'react';
import StandartLayout from "../../layouts/standartLayout";
import CityLayout from "../../layouts/cityLayout";

const Photogallery = () => {
    return (
        <StandartLayout>
            <div className="navi">
                <div className="wrap">
                    <a href="#">Главная</a> <i className="fa fa-angle-right"></i> Город
                </div>
            </div>

            <CityLayout>
                <div className="gallery-page">
                    <h1>Фотогалерея</h1>
                    <h2>Достопримечательности</h2>
                    <p>Пензенская область поистине удивительное место с богатой историей и красивой природой. Еще в
                        далекой древности, до основания крепости Пенза, на ее территории жило множество народов которые
                        оставили здесь множество памятников архитектуры.</p>
                    <div className="flex">
                        <div className="item">
                            <img src="/img/gallery.jpg"/>
                            <div className="text">
                                <p>Администрация города Пензы</p>
                            </div>
                            <a data-fancybox="gallery" href="/img/gallery.jpg"/>
                        </div>
                        <div className="item">
                            <img src="/img/gallery.jpg"/>
                            <div className="text">
                                <p>Администрация города Пензы</p>
                            </div>
                            <a data-fancybox="gallery" href="/img/gallery.jpg"></a>
                        </div>
                        <div className="item hidden">
                            <img src="/img/gallery.jpg"/>
                            <div className="text">
                                <p>Администрация города Пензы</p>
                            </div>
                            <a data-fancybox="gallery" href="/img/gallery.jpg"></a>
                        </div>
                        <div className="item">
                            <img src="/img/gallery.jpg"/>
                            <div className="text">
                                <p>Администрация города Пензы</p>
                            </div>
                            <a data-fancybox="gallery" href="/img/gallery.jpg"></a>
                        </div>
                        <div className="item big">
                            <div className="items flex">
                                <div className="item">
                                    <img src="/img/gallery.jpg"/>
                                    <div className="text">
                                        <p>Администрация города Пензы</p>
                                    </div>
                                    <a data-fancybox="gallery" href="/img/gallery.jpg"></a>
                                </div>
                                <div className="item">
                                    <img src="/img/gallery.jpg"/>
                                    <div className="text">
                                        <p>Администрация города Пензы</p>
                                    </div>
                                    <a data-fancybox="gallery" href="/img/gallery.jpg"></a>
                                </div>
                                <div className="item">
                                    <img src="/img/gallery.jpg"/>
                                    <div className="text">
                                        <p>Администрация города Пензы</p>
                                    </div>
                                    <a data-fancybox="gallery" href="/img/gallery.jpg"></a>
                                </div>
                                <div className="more-photos-block">
                                    <div className="link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="64"
                                             viewBox="0 0 60 64">
                                            <path
                                                d="M54.012,11.718a15.83,15.83,0,0,1,5.434,9.49l0,.024c.029.267.552,5.115.552,10.734,0,5.656-.517,10.422-.551,10.73l0,.032a15.488,15.488,0,0,1-5.456,9.5l0,0c-.057.042-4.045,2.945-8.986,5.849-4.729,2.741-8.972,4.645-9.487,4.874l-.1.047A13.549,13.549,0,0,1,30,64a13.969,13.969,0,0,1-5.434-1.008l-.051-.022A98.037,98.037,0,0,1,15,58.083c-4.755-2.794-8.627-5.589-8.963-5.832l-.049-.037a15.83,15.83,0,0,1-5.434-9.49l0-.024C.522,42.433,0,37.585,0,31.966c0-5.656.517-10.422.551-10.73l0-.032A15.5,15.5,0,0,1,5.99,11.716l.045-.033c.321-.228,4.2-2.966,8.965-5.766,4.729-2.741,8.972-4.645,9.487-4.874l.1-.047A13.549,13.549,0,0,1,30,0a13.97,13.97,0,0,1,5.434,1.008l.051.022A98.031,98.031,0,0,1,45,5.917c4.755,2.729,8.627,5.521,8.963,5.764Z"
                                                fill="currentColor" style={{opacity: "0.075"}}></path>
                                            <g transform="translate(17.706 -4.094)">
                                                <g transform="translate(0 25)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M137,157a6,6,0,1,0,6,6A6.01,6.01,0,0,0,137,157Zm0,10.085A4.082,4.082,0,1,1,141.085,163,4.087,4.087,0,0,1,137,167.085Z"
                                                            transform="translate(-124.709 -150.661)"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M21.707,28.458H18.174a.3.3,0,0,1-.265-.16l-.978-2.054-.008-.017A2.208,2.208,0,0,0,14.938,25H9.719a2.208,2.208,0,0,0-1.985,1.227l-.008.017L6.748,28.3a.3.3,0,0,1-.264.16h-3.6A2.885,2.885,0,0,0,0,31.339V44.306a2.885,2.885,0,0,0,2.881,2.881H21.707a2.885,2.885,0,0,0,2.881-2.881V31.339A2.885,2.885,0,0,0,21.707,28.458Zm.96,15.848a.962.962,0,0,1-.96.96H2.881a.962.962,0,0,1-.96-.96V31.339a.962.962,0,0,1,.96-.96h3.6a2.208,2.208,0,0,0,1.985-1.227l.008-.017.978-2.054a.3.3,0,0,1,.264-.16h5.219a.3.3,0,0,1,.264.16l.978,2.054.008.017a2.208,2.208,0,0,0,1.985,1.227h3.533a.962.962,0,0,1,.96.96Z"
                                                            transform="translate(0 -25)" fill="currentColor"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        еще 4 фото
                                        <a data-fancybox="gallery" href="/img/gallery.jpg"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Исторические фото</h2>

                    <div className="flex">
                        <div className="item">
                            <img src="/img/gallery.jpg"/>
                            <div className="text">
                                <p>Администрация города Пензы</p>
                            </div>
                            <a data-fancybox="gallery2" href="/img/gallery.jpg"></a>
                        </div>
                        <div className="item">
                            <img src="/img/gallery.jpg"/>
                            <div className="text">
                                <p>Администрация города Пензы</p>
                            </div>
                            <a data-fancybox="gallery2" href="/img/gallery.jpg"></a>
                        </div>
                        <div className="item">
                            <img src="/img/gallery.jpg"/>
                            <div className="text">
                                <p>Администрация города Пензы</p>
                            </div>
                            <a data-fancybox="gallery2" href="/img/gallery.jpg"></a>
                        </div>
                        <div className="item hidden">
                            <img src="/img/gallery.jpg"/>
                            <div className="text">
                                <p>Администрация города Пензы</p>
                            </div>
                            <a data-fancybox="gallery" href="img/gallery.jpg"></a>
                        </div>
                        <div className="item big">
                            <div className="items flex">
                                <div className="item">
                                    <img src="/img/gallery.jpg"/>
                                    <div className="text">
                                        <p>Администрация города Пензы</p>
                                    </div>
                                    <a data-fancybox="gallery2" href="/img/gallery.jpg"></a>
                                </div>
                                <div className="item">
                                    <img src="/img/gallery.jpg"/>
                                    <div className="text">
                                        <p>Администрация города Пензы</p>
                                    </div>
                                    <a data-fancybox="gallery2" href="/img/gallery.jpg"/>
                                </div>
                                <div className="item">
                                    <img src="/img/gallery.jpg"/>
                                    <div className="text">
                                        <p>Администрация города Пензы</p>
                                    </div>
                                    <a data-fancybox="gallery2" href="/img/gallery.jpg"/>
                                </div>
                                <div className="more-photos-block">
                                    <div className="link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="64"
                                             viewBox="0 0 60 64">
                                            <path
                                                d="M54.012,11.718a15.83,15.83,0,0,1,5.434,9.49l0,.024c.029.267.552,5.115.552,10.734,0,5.656-.517,10.422-.551,10.73l0,.032a15.488,15.488,0,0,1-5.456,9.5l0,0c-.057.042-4.045,2.945-8.986,5.849-4.729,2.741-8.972,4.645-9.487,4.874l-.1.047A13.549,13.549,0,0,1,30,64a13.969,13.969,0,0,1-5.434-1.008l-.051-.022A98.037,98.037,0,0,1,15,58.083c-4.755-2.794-8.627-5.589-8.963-5.832l-.049-.037a15.83,15.83,0,0,1-5.434-9.49l0-.024C.522,42.433,0,37.585,0,31.966c0-5.656.517-10.422.551-10.73l0-.032A15.5,15.5,0,0,1,5.99,11.716l.045-.033c.321-.228,4.2-2.966,8.965-5.766,4.729-2.741,8.972-4.645,9.487-4.874l.1-.047A13.549,13.549,0,0,1,30,0a13.97,13.97,0,0,1,5.434,1.008l.051.022A98.031,98.031,0,0,1,45,5.917c4.755,2.729,8.627,5.521,8.963,5.764Z"
                                                fill="currentColor" style={{opacity: '0.075'}}></path>
                                            <g transform="translate(17.706 -4.094)">
                                                <g transform="translate(0 25)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M137,157a6,6,0,1,0,6,6A6.01,6.01,0,0,0,137,157Zm0,10.085A4.082,4.082,0,1,1,141.085,163,4.087,4.087,0,0,1,137,167.085Z"
                                                            transform="translate(-124.709 -150.661)"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M21.707,28.458H18.174a.3.3,0,0,1-.265-.16l-.978-2.054-.008-.017A2.208,2.208,0,0,0,14.938,25H9.719a2.208,2.208,0,0,0-1.985,1.227l-.008.017L6.748,28.3a.3.3,0,0,1-.264.16h-3.6A2.885,2.885,0,0,0,0,31.339V44.306a2.885,2.885,0,0,0,2.881,2.881H21.707a2.885,2.885,0,0,0,2.881-2.881V31.339A2.885,2.885,0,0,0,21.707,28.458Zm.96,15.848a.962.962,0,0,1-.96.96H2.881a.962.962,0,0,1-.96-.96V31.339a.962.962,0,0,1,.96-.96h3.6a2.208,2.208,0,0,0,1.985-1.227l.008-.017.978-2.054a.3.3,0,0,1,.264-.16h5.219a.3.3,0,0,1,.264.16l.978,2.054.008.017a2.208,2.208,0,0,0,1.985,1.227h3.533a.962.962,0,0,1,.96.96Z"
                                                            transform="translate(0 -25)" fill="currentColor"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        еще 4 фото
                                        <a data-fancybox="gallery2" href="/img/gallery.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CityLayout>
        </StandartLayout>
    );
};

export default Photogallery;
