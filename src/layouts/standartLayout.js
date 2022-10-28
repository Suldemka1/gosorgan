import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopupBoss from "../components/PopupBoss";

const StandartLayout = ({children}) => {
    return (
        <div>
            <PopupBoss/>
            <Header/>
            {children}
            <Footer />
        </div>
    );
};

export default StandartLayout;
