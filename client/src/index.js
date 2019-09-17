import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './App';
import './styles/global.scss';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

);


ReactDOM.render(<Root/>, document.getElementById('root'));
