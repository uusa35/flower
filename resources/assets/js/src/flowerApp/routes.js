/**
 * Created by usamaahmed on 2/18/17.
 */
/**
 * Created by usamaahmed on 2/16/17.
 */
import React , { Component } from 'react';
import { Router , Route , IndexRoute , hashHistory } from 'react-router';
import App from './app';
import Layout from './components/Layout';
import Test from './components/Test';
import TestAnother from './components/TestAnother';

export default class Routes extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Layout}></IndexRoute>
                    <Route path="test1" component={Test}></Route>
                    <Route path="test2" component={TestAnother}></Route>
                </Route>
            </Router>
        );
    }
}