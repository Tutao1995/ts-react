import React, { FC } from "react";
import Login from "./pages/Login/index";
import Home from "./pages/Home/index";

import { HashRouter, Switch, Route } from "react-router-dom";
import "@css/page_common.css";
import "./style/less/app.less";

const App: FC = () => (
    <div className="app">
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
            </Switch>
        </HashRouter>
    </div>
);
export default App;
