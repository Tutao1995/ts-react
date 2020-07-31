import React, { FC } from "react";
import Nav from './components/PageNav/index'

import "./style.less";

const Home: FC = () => {
    return (
        <div className="page-wrappger">
            <div className="page-nav">
                <Nav />
            </div>
            <div className="page-content"></div>
        </div>
    );
};

export default Home;
