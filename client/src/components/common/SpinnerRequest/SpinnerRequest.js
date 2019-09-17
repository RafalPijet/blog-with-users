import React from 'react';
import {Spinner} from 'reactstrap';
import './SpinnerRequest.scss';

const SpinnerRequest = () => (
    <div className="spinner-main">
        <div className="spinner-box">
            <Spinner color="dark" size="sm"/>
            <Spinner className="second-spinner" type="grow" color="danger" style={{ width: '2rem', height: '2rem' }}/>
        </div>
        <div className="spinner-box">
            <Spinner color="dark" size="sm"/>
            <Spinner className="second-spinner" type="grow" color="success" style={{ width: '2rem', height: '2rem' }}/>
        </div>
        <div className="spinner-box">
            <Spinner color="dark" size="sm"/>
            <Spinner className="second-spinner" type="grow" color="warning" style={{ width: '2rem', height: '2rem' }}/>
        </div>
        <div className="spinner-box">
            <Spinner color="dark" size="sm"/>
            <Spinner className="second-spinner" type="grow" color="primary" style={{ width: '2rem', height: '2rem' }}/>
        </div>
    </div>

);

export default SpinnerRequest;
