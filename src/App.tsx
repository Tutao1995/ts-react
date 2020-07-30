import React, { FC } from 'react';
import Login from './pages/Login/index'
import '@css/page_common.css'
import './style/less/app.less'

const App: FC = () => (
  <div className="app">
    <Login />
  </div>
);
export default App;
