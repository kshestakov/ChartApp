import React, { Component } from 'react';
import App from '../components/App/App';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import {addItem} from '../actions/'; 

export default ReactRedux.connect(
    (state) => ({}),
    (dispatch) => ({
        addItem: Redux.bindActionCreators(addItem, dispatch),
    })
)(App);


