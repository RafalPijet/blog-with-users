import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss';
import {BrowserRouter} from "react-router-dom";

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);


ReactDOM.render(<Root/>, document.getElementById('root'));
