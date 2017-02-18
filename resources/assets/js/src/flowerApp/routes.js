/**
 * Created by usamaahmed on 2/18/17.
 */
/**
 * Created by usamaahmed on 2/16/17.
 */
import React , { Component } from 'react';
import App from './app';

export default class Routes extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <div>
                <h1>react js started</h1>
                <h2> routes file</h2>
                <App/>
            </div>
        );
    }
}