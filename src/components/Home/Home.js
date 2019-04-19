import React, { Component } from "react";
import '../../App.css';

export default class Home extends Component {
    state = {
    }

    render () {
        return (
            <div id="container">
                <h1> Welcome to the Graduate Program Manager Application!</h1>
                <a href="/info">
                    <button class="button">Info</button>
                </a>
                <a href="/login">
                    <button class="button">Login</button>
                </a>
            </div>
        )
    }
}