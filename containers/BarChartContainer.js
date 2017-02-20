import React, { Component } from 'react';
import BarChart from '../components/BarChart/BarChart';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import {vote} from '../actions/'; 

export default ReactRedux.connect(
    (state) => ({
        itemArray: state.itemArray,
        counter: state.counter,
    }),
    (dispatch) => ({
        vote: Redux.bindActionCreators(vote, dispatch),
    })
)(BarChart);


