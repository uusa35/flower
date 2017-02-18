/**
 * Created by usamaahmed on 2/18/17.
 */
/**
 * Created by usamaahmed on 2/16/17.
 */
import React , { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <div>
                <h1>This is from the App.js</h1>
                {this.props.children}
            </div>
        );
    }
}